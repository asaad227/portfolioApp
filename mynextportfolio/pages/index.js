import React from "react";
import Image from "next/image";
import styles from "/styles/home.module.css"
import logo from "../src/assets/Images/ahammedSaad_profile_pic.jpeg";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";


function Main() {
  return (
    <div>

      <div className={styles.profilecontainer}>
        <Image className={styles.card} src={logo} alt="Ahammed Saad" loading="lazy" />

        <TypeAnimation
          className={styles.type}
          cursor={false}
          sequence={["I'm Ahammed Saad. ", 3000]}
        />
        <TypeAnimation
        className={styles.type}
          cursor={false}
          sequence={["WelCome to My Portfolio", 2000]}
        />
        <TypeAnimation
          className={styles.type}
          sequence={[
            "Software Engineer",
            2000,
            "",
            "Full Stack",
            2000,
            "",
            "FrontEnd",
            2000,
            "",
            "BackEnd",
            2000,
            "",
          ]}
          repeat={Infinity}
          wrapper="h4"
        />

        <div className={styles.navhome}>
          <Link className={styles.linklink} href="/project">
            <li className={styles.linklist}>
            <i className= "fa fa-page">Poject</i>
            </li>
          </Link>
          <Link  className={styles.linklink} href="/aboutMe">
            <li className={styles.linklist}>
             <i className= "fa fa-about">About Me</i>
            </li>
          </Link>
          <Link className={styles.linklink} href="https://github.com/asaad227/ahammed-portfolio/blob/main/src/assets/PDF/Ahammed_Saad_CV.pdf?raw=true" download="Ahammed_Saad_CV.pdf">
            <li className={styles.linklist}>
              <i className="fa fa-download">CV</i>
            </li>
          </Link>
        </div>
        <div className={styles.sociallinks}>
        <Link href="https://www.linkedin.com/in/ahammed-saad-5341b3231/">
        <i className="fa fa-linkedin"> </i>
        </Link>
        <Link href="https://github.com/asaad227">
        <i className="fa fa-github"> </i>
 

        </Link>
        <Link href="https://twitter.com/a_saad227">
        <i className="fa fa-twitter"> </i>
 
        </Link>
        <Link href="mailto:a.saad227@gmail.com? subject=subject text">
        <i className="fa fa-google"> </i>
       
        </Link>
        <Link href="mailto:a.saad227@yahoo.com? subject=subject text">
        <i className="fa fa-yahoo"> </i>
          
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Main;
