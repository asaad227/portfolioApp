import React from 'react'
import styles from "../../styles/footer.module.css"
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.sociallinks}>
    <Link className={styles.linkItem} href="https://www.linkedin.com/in/ahammed-saad-5341b3231/">
    <i className="fa fa-linkedin"> </i>
    </Link>
    <Link className={styles.linkItem} href="https://github.com/asaad227">
    <i className="fa fa-github"> </i>
    </Link>
    <Link className={styles.linkItem} href="https://twitter.com/a_saad227">
    <i className="fa fa-twitter"> </i>

    </Link>
    <Link className={styles.linkItem} href="mailto:a.saad227@gmail.com? subject=subject text">
    <i className="fa fa-google"> </i>
   
    </Link>
    <Link className={styles.linkItem} href="mailto:a.saad227@yahoo.com? subject=subject text">
    <i className="fa fa-yahoo"> </i>
      
    </Link>
  </div>
  )
}
