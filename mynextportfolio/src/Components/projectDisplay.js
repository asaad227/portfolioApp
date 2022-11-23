import React from 'react'
import styles from "../../styles/projectDisplay.module.css"
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectDisplay({data}) {
  return (
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
  )
}
