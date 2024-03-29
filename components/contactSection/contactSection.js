import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactStyles from './contactSection.module.scss';
import utilStyles from '../../styles/utils.module.scss'

export default function ContactSection(props){
    let contact = props.contact;
    return (<section className={contactStyles.contact}>
        <h1>{contact.entryTitle}</h1>
        {documentToReactComponents(contact.text)}
        {contact.pageLinks.map(link=>{
            return <a href={link.fields.linkUrl} aria-label={link.fields.linkText} target="_blank" key={link.sys.id}>
                <FontAwesomeIcon icon={[link.fields.iconLibrary, link.fields.iconClass]} size="3x"/>
            </a>
        })}
    </section>
    )
}