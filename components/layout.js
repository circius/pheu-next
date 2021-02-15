import Header from './header'
const Layout = ({ children }) => {
  return (
    <div className='Layout'>
      <Header />
      {children}
    </div>
  )
}

export default Layout