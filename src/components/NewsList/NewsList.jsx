import React from 'react';
import styles from './styles.module.css'
import {NewsItem} from "../NewsItem/NewsItem.jsx";

export const NewsList =({news})=>{
    return(
       <ul className={styles.list}>
           {news.map((n)=> (
                   <NewsItem key={n.id} item={n}/>
               )
           )}
       </ul>
    )
}

