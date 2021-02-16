import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const renderers = {
  link: ({ href, children }) => {
    return (
      <Link href={href ? href : ""}>
        <a>{children}</a>
      </Link>
    )
  },
}

const Markdown = ({ children }) => {
  return (
    <ReactMarkdown renderers={renderers}>{children}</ReactMarkdown>
  )
}

export default Markdown