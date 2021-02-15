import { headerLinks } from '../../config.json'
import PageLinks from './pageLinks.js'
import HomeLink from './homeLink.js'

const Header = () => {
  return (
    <div className='Header'>
      <HomeLink />
      <PageLinks links={headerLinks} />
    </div>
  )
}

export default Header