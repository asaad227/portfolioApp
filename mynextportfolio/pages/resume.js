import React from 'react'
import Image from 'next/image';
import Nav from '../src/Component2/Nav/navbar';
import styles from "../styles/resume.module.css"
import aSaadResume from "../src/assets/Images/ahammedSaadCv.png";
import aSaadResume2 from "../src/assets/Images/ahammedSaadCvPart2.png";
import Link from 'next/link';

function Resume(){
 
  
    return (
      <div className={styles.topresume}>
     <header className={styles.projectnav}>
        <Nav />
        <div className={styles.sociallink}>
          <Link href="https://www.linkedin.com/in/ahammed-saad-5341b3231/">
            {" "}
            <i className="fa fa-linkedin"></i>
          </Link>
          <Link href="https://github.com/asaad227">
            {" "}
            <i className="fa fa-github"></i>
          </Link>
          <Link href="https://twitter.com/a_saad227">
            {" "}
            <i className="fa fa-twitter"></i>
          </Link>
          <Link href="mailto:a.saad227@gmail.com? subject=subject text"> <i className='fa fa-google'></i></Link> 
      <Link href="mailto:a.saad227@yahoo.com? subject=subject text"> <i className='fa fa-yahoo'></i></Link>  
        </div>
      </header>
       <Image className={styles.resume} src={aSaadResume} alt="Ahammed Saad Resume"/>
       <Image className={styles.resume} src={aSaadResume2} alt="Ahammed Saad Resume"/>

      </div>
    );
}
 export default Resume
