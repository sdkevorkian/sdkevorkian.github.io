import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import contactStyles from './contactSection.module.scss';
import utilStyles from '../../styles/utils.module.scss'

export default function ContactSection(props){
    let contact = props.contact;
    return (<section className={contactStyles.contact}>
        <h1>{contact.entryTitle}</h1>
        {documentToReactComponents(contact.text)}
        {contact.pageLinks.map(link=>{
            
            return <a href={link.fields.linkUrl} aria-label={link.fields.linkText} target="_blank">
                <i className={link.fields.iconClass + " fa-3x"} aria-hidden="true"></i>
            </a>
        })}
    </section>
    )
}