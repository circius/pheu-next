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
    </div>
  )
}

export default HomeLink