import React from 'react';
import styles from "../../../styles/Navbar.module.css"
import Link from 'next/link';


export default function Nav() {

    function openNav() {
        document.getElementById("mySidepanel").style.width = "200px";
        document.getElementById("mySidepanel").style.height = "700px";
    }
      function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
      }
  return (
      <div > 
    <div  className={styles.sidepanel} id="mySidepanel">
 
<Link href='#' className={styles.closebtn} onClick={closeNav}>
<i className="fa fa-caret">X</i></Link>
       
        <Link href="/">
            <li className={styles.linklist}>Home</li>
            </Link>
            <Link href="/project">
            <li className={styles.linklist}>Project</li>
            </Link>
            <Link  href="/aboutme">
            <li className={styles.linklist}>About Me</li>
            </Link>
            <Link href="/resume">
            <li className={styles.linklist}>Resume</li>
            </Link>
   
    </div>
    <buthrefn className={styles.openbtn} onClick={openNav}>
    <i className='fa'>☰</i></buthrefn>  

    </div>
  )
}
