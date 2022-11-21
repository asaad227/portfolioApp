import React, {useState} from "react";
import myData from "../lib/files"
import Image from "next/image";
import styles from "/styles/project.module.css";
import Nav from "/src/Component2/Nav/navbar";



import Link from "next/link";

export default function Project() {
  const [data, setData] = useState(myData);

 console.log(data)
  return (
    <div>
      <header>
        <Nav />
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
      </header>
      
  
      <div className={styles.project}>
      {data.map(e=>{
        return(<div className={styles.flexbox}>
          <Link href={e.url}>
           <h4 className={styles.title}>{e.name}</h4>
          </Link>
          <p className={styles.para}>{e.text}</p>
          <Image className={styles.imageDesign}  width={495} height={350} src={e.project} alt={e.name}/>
        </div>)
        
      })}
      </div>

      
     
      </div>
   
  );
}
