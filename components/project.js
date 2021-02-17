import Markdown from '../components/markdown'
import Link from 'next/link'
import Image from 'next/image'

const SourceLink = ({ url }) => {
  return (
    <Link href={url}>
      <a>source link
      <style jsx>
          {`
        a {
          align-self: end
        }
        `}
        </style>
      </a>
    </Link>
  )
}

const Project = ({ name, year, source, content, imgData, imgLg, imgHeight, imgWidth, imgAlt }) => {
  return (
    <article>
      <h2>{name} ({year})</h2>
      <figure>
        <Image
          src={imgLg}
          alt={imgAlt}
          height={imgHeight}
          width={imgWidth}
          layout="responsive"
        />
        <figcaption>{imgAlt}</figcaption>
      </figure>
      <Markdown>
        {content}
      </Markdown>
      <SourceLink url={source} />
      <style jsx>{`
      article {
        padding-bottom: 6em;
        min-height: 100vw
      }
    `}
      </style>
    </article>

  )
}

export default Project