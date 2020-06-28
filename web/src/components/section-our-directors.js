import React from 'react'
import {Link} from 'gatsby'

import styles from './section-our-work.module.css'

const SectionOurWork = () => {
  return (
    <div className={styles.root}>
      <h2>Our directors</h2>
      <p className={styles.description}>
        Nulla euismod tempus metus quis varius. Nunc condimentum efficitur ante nec gravida. Vestibulum accumsan lectus ex, vel feugiat sapien molestie vel.
      </p>
      <Link to='/our-directors'>Meet our directors</Link>
    </div>
  )
}

export default SectionOurWork
