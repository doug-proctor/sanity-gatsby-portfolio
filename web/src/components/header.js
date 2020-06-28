import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import LogoImage from '../images/logo.svg'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav}) => (
  <div className={styles.root}>
    <div className={styles.logo}>
      <Link to='/'>
        <img src={LogoImage} alt='Squire Studio logo' className={styles.logo} />
      </Link>
    </div>
    <button className={styles.button} onClick={showNav ? onHideNav : onShowNav}>
      <Icon symbol='hamburger' />
    </button>
    {showNav && (
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li><Link to='/who-we-are'>Who we are</Link></li>
          <li><Link to='/our-work'>Our work</Link></li>
          <li><Link to='/our-directors'>Our directors</Link></li>
          <li><Link to='/articles'>News</Link></li>
        </ul>
      </nav>
    )}
  </div>
)

export default Header
