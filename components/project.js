import Markdown from '../components/markdown'
import Link from 'next/link'
import Image from 'next/image'
import Fleuron from '../components/fleuron'

const SourceLink = ({ url }) => {
  return (
    <div>
      <Link href={url}>
        <a>source link
      </a>
      </Link>
      <style jsx>{`
      div {
        align-self: flex-end;
      }
      `}</style>
    </div>
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
      <Fleuron />
      <style jsx>{`
      article {
        padding-bottom: 2em;
        display: flex;
        flex-direction: column;
      }
    `}
      </style>
    </article>

  )
}

export default Project