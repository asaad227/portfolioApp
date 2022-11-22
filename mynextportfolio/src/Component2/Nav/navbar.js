import React from 'react';
import styles from "/styles/navbar.module.css"
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
            <i className="fa fa-home"></i>
            </Link>
            <Link href="/project">
            <i className="fa fa-folder"> Projects</i>
            </Link>
            <Link  href="/aboutMe">
            <i>About Me</i>
            </Link>
            <Link href="https://github.com/asaad227/ahammed-portfolio/blob/main/src/assets/PDF/Ahammed_Saad_CV.pdf?raw=true">
            <i className="fa fa-download">CV</i>
            </Link>
   
    </div>
    <buthrefn className={styles.openbtn} onClick={openNav}>
    <i className='fa fa-menu'>☰</i></buthrefn>  

    </div>
  )
}
