import path from 'path'
import sizeOf from 'image-size'

const publicDir = '../public'

export const getImageDimensions = path => {
  const imagePath = path.join(publicDir, path)
  const { height, width } = fs.readFile(imagePath)
  return {
    height,
    width
  }
}