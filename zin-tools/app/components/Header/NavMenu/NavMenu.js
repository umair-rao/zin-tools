import Link from 'next/link'
import NavData from './NavData.json'

const NavMenu = () => {
  return (
    <>
      <ul className='nav-list-item'>
        {NavData.navHeadings.map((item, i) => (
          <li key={i}>
            <Link href={item.link}>{item.title} {item.has_dropdown ? <i className="fas fa-chevron-down"></i> : null}</Link>
            {item.has_dropdown &&
              <div className="sub-menu">
                <ul>
                  {/* {item.sub_menus?.map((sub_item, index) =>
                    <li key={index}><Link href={sub_item.link}>{sub_item.title}</Link></li>
                  )} */}
                </ul>
              </div>
            }
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavMenu
