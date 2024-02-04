import Link from 'next/link'
import NavData from './NavData.json'

const NavMenu = () => {
  return (
    <>
      <ul className='nav-list-item'>
        {NavData.navHeadings.map((item, i) => (
          <li key={i}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavMenu
