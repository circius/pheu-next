import Link from 'next/link'
import Icon from './icon'
import { FaGithub, FaEnvelope } from 'react-icons/fa'

const getLabel = link => {
  switch (link.label) {
    case "Github":
      return (
        <Icon>
          <FaGithub size="1.6em" />
        </Icon>
      )
    case "Contact":
      return (
        <Icon>
          <FaEnvelope size="1.6em" />
        </Icon>
      )
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
          padding-left:2em;
          padding-top:.5em;
        }
        div {
          display: flex;
          flex-wrap: wrap;
          justify-contents: flex-end;
          align-items: flex-end;
        }
    `}</style>
    </div>

  )
}

export default PageLinks