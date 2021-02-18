import Link from 'next/link'
import { FaGithub, FaEnvelope } from 'react-icons/fa'

const getLabel = link => {
  switch (link.label) {
    case "Github":
      return <FaGithub size="1.2em" />
    case "Contact":
      return <FaEnvelope size="1.2em" />
    default:
      return link.label
  }
}

const PageLinks = ({ links }) => {
  return (
    <div className='PageLinks'>
      {links.map(
        (link, idx) => <Link href={link.href} key={idx}>
          <a>{getLabel(link)}</a>
        </Link>)
      }
      <style jsx>{`
        a {
          padding-left: .5em;
        }
    `}</style>
    </div>

  )
}

export default PageLinks