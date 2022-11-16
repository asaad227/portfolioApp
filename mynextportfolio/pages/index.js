import React from "react";
import Image from "next/Image";
import styles from "../styles/Home.module.css"
import logo from "../src/assets/Images/ahammedSaad.png";
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
          sequence={["Hi! I'm Ahammed Saad. ", 3000]}
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
              Project
            </li>
          </Link>
          <Link  className={styles.linklink} href="/aboutMe">
            <li className={styles.linklist}>
             About Me
            </li>
          </Link>
          <Link className={styles.linklink} href="/resume">
            <li className={styles.linklist}>
              Resume
            </li>
          </Link>
        </div>
        <div className={styles.sociallinks}>
          <Link className={styles.linklink} href="https://www.linkedin.com/in/ahammed-saad-5341b3231/">
      
           linkedin
          </Link>
          <Link className={styles.linklink} href="https://github.com/asaad227">
       
          github
          </Link>
          <Link className={styles.linklink} href="https://twitter.com/a_saad227">
       
           twitter
          </Link>
          <Link className={styles.linklink} href="mailhref:a.saad227@gmail.com? subject=subject text">
       
           Gmail
          </Link>
          <Link className={styles.linklink} href="mailhref:a.saad227@yahoo.com? subject=subject text">
    
          Yahoo mail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
