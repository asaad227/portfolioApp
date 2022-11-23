import React from "react";
import Image from "next/image";
import styles from "/styles/home.module.css";
import logo from "../src/assets/Gif/logo.gif";
import { TypeAnimation } from "react-type-animation";
import Footer from "../src/Components/footer";
import Router from "../src/Components/router";

function Main() {
  return (
    <div>
      <div className={styles.profilecontainer}>
        <Image
          className={styles.card}
          src={logo}
          alt="Ahammed Saad"
          loading="lazy"
        />

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
          <Router 
            iconName={"fa fa-folder"}
            pageLink={"/project"}
            text={" Project"}
          />
          <Router
            iconName={"fa fa-user"}
            pageLink={"/aboutMe"}
            text={" AboutMe"}
          />
          <Router
            iconName={"fa fa-download"}
            pageLink={
              "https://github.com/asaad227/ahammed-portfolio/blob/main/src/assets/PDF/Ahammed_Saad_CV.pdf?raw=true"
            }
            download="Ahammed_Saad_CV.pdf"
            text={" CV"}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
