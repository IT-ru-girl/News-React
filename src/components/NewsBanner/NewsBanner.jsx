
import {formatDate} from "../../helpers/formatDate.js";
import {formatTimeAgo} from "../../helpers/formatTimeAgo.js";
import {Image} from "../Image/Image.jsx";
import styles from '../NewsBanner/styles.module.css'



export const NewsBanner =({item})=>{
    return(
        <div className={styles.banner}>
            <Image />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    )
}
