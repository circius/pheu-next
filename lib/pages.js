import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const pageDirectory = path.join(process.cwd(), 'pages')

export async function getPageData(id) {
  const fullPath = path.join(pageDirectory, `${id}.md`)
  return pageGetData(fullPath)
}

const pathGetTag = fd => {
  return path
    .basename(fd)
    .split(".")[0]
}

const pageGetData = (fd) => {
  const fileContents = fs.readFileSync(fd, 'utf8')
  const matterResult = matter(fileContents)
  const id = pathGetTag(fd)
  return {
    id,
    content: matterResult.content,
    ...matterResult.data
  }
}

const hiddenP = fd => {
  const filename = path.basename(fd)
  return filename.split('')[0] === "."
}

export async function getAllPages(subdir) {
  const fullPath = path.join(pageDirectory, subdir)
  const filenames = fs
    .readdirSync(fullPath)
    .filter(fd => !hiddenP(fd))

  const fds = filenames
    .map(filename => path.join(pageDirectory, subdir, filename))

  return fds
    .map(
      fd => pageGetData(fd)
    )

}