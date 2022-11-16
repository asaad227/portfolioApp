import React from "react";
import Image from "next/Image";
import pic from "../src/assets/Images/ahammedSaad_profile_pic.jpeg";
import styles from "../styles/AboutMe.module.css"
import Auth0 from "../src/assets/Icons/auth0.png";
import Typescript from "../src/assets/Icons/Typescript_logo_2020.svg.png";
import ReactTesting from "../src/assets/Icons/react testing library.png";
import Slack from "../src/assets/Icons/slack-original.svg";
import Next from "../src/assets/Icons/nextjs-original.svg";
import Python from "../src/assets/Icons/python-original-wordmark.svg";
import Java from "../src/assets/Icons/java-original-wordmark.svg";
import Cpress from "../src/assets/Icons/cypress2.png";
import Postman from "../src/assets/Icons/postman.png";
import Trello from "../src/assets/Icons/trello-plain.svg";
import figma from "../src/assets/Icons/figma-original.svg";
import Js from "../src/assets/Icons/javascript-original.svg";
import item from "../src/assets/Icons/react-original-wordmark.svg";
import npmOriginal from "../src/assets/Icons/npm-original-wordmark.svg";
import nodejs from "../src/assets/Icons/nodejs-original-wordmark.svg";
import postGreSql from "../src/assets/Icons/postgresql-original-wordmark.svg";
import vsCode from "../src/assets/Icons/vscode-original-wordmark.svg";
import html5Original from "../src/assets/Icons/html5-original-wordmark.svg";
import css3Original from "../src/assets/Icons/css3-original.svg";
import jestPlain from "../src/assets/Icons/jest-plain.svg";
import Enzyme from "../src/assets/Icons/enzyme.png";
import Chart from "../src/assets/Icons/Chartjs.png";
import Heroku from "../src/assets/Icons/heroku-original-wordmark.svg";
import { TypeAnimation } from "react-type-animation";
import Nav from "../src/Component2/Nav/navbar";
import Link from "next/link";


export default function AboutMe() {
  return (
    <div >
      <Nav />
      <div className={styles.sociallinks}>
        <Link href="https://www.linkedin.com/in/ahammed-saad-5341b3231/">
       Linkedin
        </Link>
        <Link href="https://github.com/asaad227">
      Github

        </Link>
        <Link href="https://twitter.com/a_saad227">
       twitter
 
        </Link>
        <Link href="mailto:a.saad227@gmail.com? subject=subject text">
       Gmail
       
        </Link>
        <Link href="mailto:a.saad227@yahoo.com? subject=subject text">
      Yahoo mail
          
        </Link>
      </div>
      <div className={styles.about}>
      <Image className={styles.card} src={pic} alt="Ahammed Saad" />
      <TypeAnimation cursor={false} sequence={["Ahammed Saad", 2000]} wrapper='h2' />
      <p className={styles.typeprofile}>
        Software Engineer with experience in full stack development, testing and
        maintenance of software system. Equipped with a diverse and promising
        skill-set. Proficient in various platform, and language. Knowledge with
        cutting-edge development tool and procedure. Able to effectively
        self-manage during independent project, as well as collaborate as part
        of a team.
      </p>
      <h4>Hobbies ____________________</h4>
      <p className={styles.typeprofile}>
        Travelling, exploring different cuisine and also like football and
        cricket.
      </p>

      <h4>
        Skills ____________________ </h4>
          <TypeAnimation
            className={styles.typeprofile}
            sequence={[
              "Frontend Development",
              2000,
              "",
              "Database",
              2000,
              "",
              "Programming",
              2000,
              "",
              "UI/UX Design",
              2000,
              "",
              "Agile Methodology",
              2000,
              "",
              "Adaptability",
              2000,
              "",

              "Dedicated Team Player",
              2000,
              "",
            ]}
            repeat={Infinity}
            wrapper="h4"
          />
    
     
      <Image className={styles.gitstate}
        href="https://github-readme-stats.vercel.app/api?username=asaad227&show_icons=true&hide_border=false&title_color=ff652f&icon_color=FFE400&bg_color=09131B&text_color=ffffff&border_color=0c1a25"
       />

      <h4>Tech Stack ____________________ </h4>

      <Image className={styles.imageicons} src={Js} alt="Js" />
      <Image className={styles.imageicons} src={item} alt="React" />
      <Image className={styles.imageicons} src={Typescript} alt="Typescript" />
      <Image
        className={styles.imageicons}
        style={{ background: "white" }}
        src={Next}
        alt="Next"
      />

      <Image className={styles.imageicons} src={Java} alt="Java" loading="lazy" />
      <Image className={styles.imageicons} src={Python} alt="Python" loading="lazy"/>
      <Image className={styles.imageicons} src={nodejs} alt="nodejs" loading="lazy" />
      <Image className={styles.imageicons} src={npmOriginal} alt="npm-original" loading="lazy" />
      <Image className={styles.imageicons} src={html5Original} alt="html5" loading="lazy"/>
      <Image className={styles.imageicons} src={css3Original} alt="css3" loading="lazy"/>
      <Image className={styles.imageicons} src={figma} alt="Figma" loading="lazy"/>
      <Image className={styles.imageicons} src={Chart} alt="Chart.js" loading="lazy"/>
      <Image className={styles.imageicons} src={Heroku} alt="Heroku" loading="lazy"/>
      <Image className={styles.imageicons} src={postGreSql} alt="postgresSql" loading="lazy"/>
      <Image className={styles.imageicons} src={Postman} alt="Postman" loading="lazy"/>
      <Image className={styles.imageicons} src={Auth0} alt="Auth0" loading="lazy"/>
      <Image className={styles.imageicons} src={Enzyme} alt="Enzyme" loading="lazy"/>
      <Image className={styles.imageicons} src={jestPlain} alt="jest" loading="lazy"/>
      <Image className={styles.imageicons} src={ReactTesting} alt="jest" loading="lazy"/>
      <Image className={styles.imageicons} src={Cpress} alt="Cypress" loading="lazy"/>
      <Image className={styles.imageicons} src={Trello} alt="Trello" loading="lazy"/>
      <Image className={styles.imageicons} src={Slack} alt="Slack" loading="lazy"/>
      <Image className={styles.imageicons} src={vsCode} alt="vscode" loading="lazy"/>
    </div>
    </div>
  );
}