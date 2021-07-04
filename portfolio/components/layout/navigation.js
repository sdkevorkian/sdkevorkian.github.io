import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './navigation.module.scss'

export default function Navigation({nav}){
    const { asPath } = useRouter()
    return (
        <>
        {nav && <nav className={styles.nav}>
            {nav.fields.links.map(link=>{
                
                return (
                <Link href={link.fields.linkUrl} key={'link-'+link.sys.id}>
                    <a className={asPath === link.fields.linkUrl ? styles.active : ""}>
                        {link.fields.linkText}
                    </a>
                </Link>
                )
            })}
        </nav> }
        </>
    )
}