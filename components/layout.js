import Header from './header'
const Layout = ({ children }) => {
  return (
    <div className='Layout'>
      <Header />
      <hr />
      <div className="LayoutPage">
        {children}
      </div>
      <style jsx>{`
        .Layout {
          padding: 1ch;
        }
        .LayoutPage {
          max-width: 62ch;
          margin: auto;
        }
        hr {
          opacity: 20%;
          width:100vw;
        }
      `}</style>
    </div>
  )
}

export default Layout