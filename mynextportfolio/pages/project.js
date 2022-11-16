import React from "react";
import Image from "next/Image";
import styles from "../styles/Project.module.css"
import Nav from "../src/Component2/Nav/navbar";
import simpleAll from "../src/assets/Gif/Final-project/simpleAll.gif";
import Pigeon1 from "../src/assets/Gif/Pigeon-blogs/Pigeon-blog-p1.gif";
import poetry from "../src/assets/Gif/poetry_finder.gif";
import Bootcampers1 from "../src/assets/Gif/BootcampersSocial/bootcampersSocial-1.gif";
import Bootcampers2 from "../src/assets/Gif/BootcampersSocial/bootcampersSocial-2.gif";
import PokemonQ from '../src/assets/Gif/Pokemon-q.gif'
import AsianRecipe from '../src/assets/Gif/Asian-recipe/Asian-recipe-app.gif';
import AsianRecipeResponsive from '../src/assets/Gif/Asian-recipe/Asian Recipe.gif';
import ECommerce from '../src/assets/Gif/E-commerce-site/E-commerce.gif';
import EcommerceResponsive from '../src/assets/Gif/E-commerce-site/E-commerce-site.gif';
import Link from "next/link";
export default function Project() {
  return (
    <div className="project">
      <header>
        <Nav />
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
      </header>
      <div className={styles.flexcontainer}>
        <div className={styles.flexbox}>
          <Link href="https://simple-app2.netlify.app/">
            <i className="fa"></i>Simple App
          </Link>
          <p>Full stack react app with CRUD functionality. 
          Frontend react.js and backend using PostgreSQL. 
          Features such as darkmode, i18n translator, hide & show component, progressive graph </p>
          <Image className={styles.imageDesign}  src={simpleAll} alt="Simple App" loading="lazy" />
        </div>
        <div className={styles.flexbox}>
          <Link href="https://pokemon-q.vercel.app/">
            <i className="fa"></i>Pokemon-Q
          </Link>
          <p>Fetch Api and JavaScript DOM manipulation to dynamically 
          access and update the content, structure and style of the document.</p>
          <Image className={styles.imageDesign} src={PokemonQ} alt="Pokemon-Q" loading="lazy" />
        </div>
        <div className={styles.flexbox}>
          <Link href="https://e-commerce-site-delta.vercel.app/">
            <i className="fa"></i>E-commerce-site
          </Link>
          <p>E-commerce recat app with localstorage for persistent data</p>
          <Image className={styles.imageDesign} src={ECommerce} alt="E-commerce" loading="lazy" />
        </div>
        <div className={styles.flexbox}>
          <Link href="https://e-commerce-site-delta.vercel.app/">
            <i className="fa"></i>E-commerce-responsive
          </Link>
          <p>Responsive react e-commerce site with localstorage for persistent data</p>
          <Image className={styles.imageDesign} src={EcommerceResponsive} alt="E-commerce-responsive" loading="lazy" />
        </div>
        <div className={styles.flexbox}>
          <Link href="https://asian-recipe.vercel.app/">
            <i className="fa"></i>Asian-recipe
          </Link>
          <p>Asian recipe App using react app</p>
          <Image className={styles.imageDesign} src={AsianRecipe} alt="Asian-recipe" loading="lazy" />
        </div>
        <div className={styles.flexbox}>
          <Link href="https://asian-recipe.vercel.app/">
            <i className="fa"></i>Asian-recipe-responsive
          </Link>
          <p>Asian recipe App using react app</p>
          <Image className={styles.imageDesign} src={AsianRecipeResponsive} alt="Asian-recipe-responsive" loading="lazy" />
        </div>
       
        <div className={styles.flexbox}>
          <Link href="https://bootcampers-social.netlify.app/">
            <i className="fa"></i> Bootcampers Social App
          </Link>
          <p>Full Stack React App with CRUD functionality.</p>
          <Image className={styles.imageDesign} src={Bootcampers1} alt="Bootcampers Social App" loading="lazy" />
        </div>
        <div className={styles.flexbox}>
          <Link href="https://bootcampers-social.netlify.app/">
            <i className="fa"></i> Bootcampers Social App
          </Link>
          <Image className={styles.imageDesign} src={Bootcampers2} alt="Bootcampers Social App" loading="lazy" />
        </div>
        <div className={styles.flexbox}>
          <Link href="https://my-pigeon-blogs.vercel.app/">
            <i className="fa"></i>My Pigeon blog APP
          </Link>
          <p>Simple Next.js app using dummy data to making blog post.</p>
          <Image className={styles.imageDesign} src={Pigeon1} alt="My Pigeon Blogs" loading="lazy" />
        </div>
       

        <div className={styles.flexbox}>
          <Link href="https://poetry-finder.netlify.app/">
            <i className="fa"></i>Poetry Finder APP
          </Link>
          <p>Using Next.js to fetch data and design with css.module.</p>
          <Image className={styles.imageDesign} src={poetry} alt="Poetry Finder" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
