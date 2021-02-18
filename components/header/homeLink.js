import Link from 'next/link'

const HomeLink = () => {
  return (
    <div className='HomeLink'>
      <span className="logo">
        <Link href="/">
          <a>PHEU</a>
        </Link>
        <Link href="/pheu">
          <a className="bang">!</a>
        </Link>
      </span>

      <span className="tag"> // personal website of simon bull</span>
      <style jsx>{`
          span.logo {
            font-style: oblique;
            font-weight: bolder;
            font-size: 3vh;
          }
          span.tag{
            opacity: 66%;
          }
          .bang:hover {
            color: fuchsia
          }
          
        `}</style>
    </div>
  )
}

export default HomeLink