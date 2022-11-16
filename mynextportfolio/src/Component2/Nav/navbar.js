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
            <li><i className="fa fa-home"></i>Home</li>
            </Link>
            <Link href="/project">
            <li><i className="fa"></i>Project</li>
            </Link>
            <Link href="/about">
            <li><i className="fa"></i>About Me</li>
            </Link>
            <Link href="/resume">
            <li><i className="fa"></i>Resume</li>
            </Link>
   
    </div>
    <buthrefn className="openbtn" onClick={openNav}>
    <i className='fa'>☰</i></buthrefn>  

    </div>
  )
}
