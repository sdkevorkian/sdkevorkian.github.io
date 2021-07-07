import styles from './workitem.module.scss'

export default function WorkItem(props){
    let workItem=props.work;
    return(
        <div className={styles.workItem}
        style={{backgroundImage: 'url('+workItem.image.fields.file.url+')'}}>
            {workItem.name}
        </div>
    )
}