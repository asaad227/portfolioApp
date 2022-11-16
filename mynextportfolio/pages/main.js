import React from "react";
import Image from "next/Image";
import styles from "../styles/main.module.css"
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
          <Link href="/project">
            <li>
              <i className={styles.fa}></i>Project
            </li>
          </Link>
          <Link href="/about">
            <li>
              <i className={styles.fa}></i>About Me
            </li>
          </Link>
          <Link href="/resume">
            <li>
              <i className={styles.fa}></i>Resume
            </li>
          </Link>
        </div>
        <div className={styles.sociallinks}>
          <Link href="https://www.linkedin.com/in/ahammed-saad-5341b3231/">
      
           linkedin
          </Link>
          <Link href="https://github.com/asaad227">
       
          github
          </Link>
          <Link href="https://twitter.com/a_saad227">
       
           twitter
          </Link>
          <Link href="mailhref:a.saad227@gmail.com? subject=subject text">
       
           Gmail
          </Link>
          <Link href="mailhref:a.saad227@yahoo.com? subject=subject text">
    
          Yahoo mail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
