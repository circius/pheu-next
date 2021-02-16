import Markdown from '../components/markdown'
import Link from 'next/link'

const SourceLink = ({ url }) => {
  return (
    <Link href={url}>
      <a>source link</a>
    </Link>
  )
}

const Project = ({ name, year, source, content }) => {
  return (
    <article>
      <h2>{name} ({year})</h2>
      <Markdown>
        {content}
      </Markdown>
      <SourceLink url={source} />
    </article>
  )
}

export default Project