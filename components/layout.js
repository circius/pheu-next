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
      `}</style>
    </div>
  )
}

export default Layout