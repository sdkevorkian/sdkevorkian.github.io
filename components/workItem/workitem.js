import Link from 'next/link'
import styles from './workitem.module.scss'

export default function WorkItem(props){
    let workItem = props.work;
    return(
        <div className={styles.workItem}>
            <Link href={'/work/'+props.id}>
                <a style={{backgroundImage: 'url('+workItem.image.fields.file.url+')'}}>
                    <h2>{workItem.name}</h2>
                </a>
            </Link>
        </div>
    )
}