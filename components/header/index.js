import { headerLinks } from '../../config.json'
import PageLinks from './pageLinks.js'
import HomeLink from './homeLink.js'

const Header = () => {
  return (
    <nav className='Header'>
      <HomeLink />
      <PageLinks links={headerLinks} />
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          max-width: 1152px;
                }
      `}
      </style>
    </nav>
  )
}

export default Header