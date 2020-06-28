import React from 'react'
import {Link} from 'gatsby'

import styles from './section-who-we-are.module.css'

const SectionWhoWeAre = () => {
  return (
    <div className={styles.root}>
      <h2>Who we are</h2>
      <p className={styles.description}>
        Nulla euismod tempus metus quis varius. Nunc condimentum efficitur ante nec gravida. Vestibulum accumsan lectus ex, vel feugiat sapien molestie vel.
      </p>
      <Link to='/who-we-are'>Meet the team</Link>
    </div>
  )
}

export default SectionWhoWeAre
