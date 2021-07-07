import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.scss'
import aboutStyles from './about.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function About(props){
    let about = props.about;
    return (
        <div className={aboutStyles.about}>
            <Image
                priority
                src={'https:'+about.image.fields.file.url}
                className={utilStyles.borderCircle}
                height={175}
                width={175}
                alt={about.image.fields.description}
                />
            <h1>{about.name}</h1>
            <h2>{about.role} {about.location}</h2>
            {documentToReactComponents(about.blurb)}
            <p>
            <Link href="/work" >
                <a className={utilStyles.btn}>Check my work!</a>
            </Link>
            </p>
      </div>

    )
}