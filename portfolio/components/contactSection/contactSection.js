import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import contactStyles from './contactSection.module.scss';
import utilStyles from '../../styles/utils.module.scss'

export default function ContactSection(props){
    let contact = props.contact;
    return (<section>
        <h1>Contact</h1>
        <p>I'd love to hear from you!</p>
        <a href="https://www.codewars.com/users/doublexhelix/"><img src="https://www.codewars.com/users/doublexhelix/badges/large" /></a>
    </section>
    )
}