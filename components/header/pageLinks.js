import Link from 'next/link'

const PageLinks = ({ links }) => {
  return (
    <div className='PageLinks'>
      {links.map(
        (link, idx) => <Link href={link.href} key={idx}>
          <a>{link.label}</a>
        </Link>)
      }
    </div>
  )
}

export default PageLinks