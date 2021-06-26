import Link from 'next/link'
import styles from './navigation.module.scss'

export default function Navigation(){
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a>Sara Kevorkian</a>
            </Link>
            <Link href="/work">
                <a>Work</a>
            </Link>
            <Link href="/resume">
                <a>Resume</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
            <Link href="/skills">
                <a>Skills</a>
            </Link>
        </nav>
    )
}