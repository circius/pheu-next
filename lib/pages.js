import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import extra from 'remark-code-extra'

const pageDirectory = path.join(process.cwd(), 'pages')

export async function getPageData(id) {
  const fullPath = path.join(pageDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  //parse yaml
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  console.log('contentHtml:', contentHtml)

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}