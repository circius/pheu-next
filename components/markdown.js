import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const renderers = {
  link: ({ href, children }) => {
    return (
      <Link href={href ? href : ""}>
        <a>{children}</a>
      </Link>
    )
  }
}

const Markdown = ({ children, className }) => {
  return (
    <ReactMarkdown renderers={renderers} className={[className, "markdown"].join(" ")}>{children}</ReactMarkdown>
  )
}

export default Markdown