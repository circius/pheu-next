import Link from 'next/link'

const HomeLink = () => {
  return (
    <div className='HomeLink'>
      <Link href="/">
        <a>PHEU</a>
      </Link>
      <Link href="/pheu">
        <a>!</a>
      </Link>
      <style jsx>{`
          div {
            font-style:
          }
        `}</style>
    </div>
  )
}

export default HomeLink