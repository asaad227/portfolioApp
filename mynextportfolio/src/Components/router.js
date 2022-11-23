import React from 'react'
import styles from "../../styles/home.module.css";
import Link from 'next/link';

export default function Router({pageLink, text, iconName}) {
  return (
    <div >
    <Link className={styles.linkItem} href={pageLink}>
      <li className={styles.linklist}>
      <i className={iconName}>{text}</i>
      </li>
    </Link>
    
  </div>
  )
}
