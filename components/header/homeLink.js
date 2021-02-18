import Link from 'next/link'

const HomeLink = () => {
  return (
    <div className='HomeLink'>
      <Link href="/">
        <a>PHEU</a>
      </Link>
      <Link href="/pheu">
        <a className="bang">!</a>
      </Link>
      <style jsx>{`
          div {
            font-style: oblique;
            font-weight: bolder;
            font-size: 3vh;
          }
          .bang:hover {
            color: fuchsia
          }
          
        `}</style>
    </div>
  )
}

export default HomeLink