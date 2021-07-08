import styles from './workitem.module.scss'

export default function WorkItem(props){
    let workItem=props.work;
    return(
        <div className={styles.workItem}>
            <div style={{backgroundImage: 'url('+workItem.image.fields.file.url+')'}}>
                <h2>{workItem.name}</h2>
            </div>
        </div>
    )
}