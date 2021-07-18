import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import resumeStyles from './resume.module.scss';
import utilStyles from '../../styles/utils.module.scss'

export default function Resume(props){
    let resume = props.resume;
    return (<section className={resumeStyles.resume}>
        <h2>Resume</h2>
        {documentToReactComponents(resume.text)}
        <div className={resumeStyles.btnContainer}>
            <FontAwesomeIcon icon={["fas","file-pdf"]} size="3x"/>
            <a href={resume.pdfResume.fields.file.url} className={utilStyles.attachmentBtn} target="_blank">View PDF</a>
        </div>
        <div className={resumeStyles.btnContainer}>
            <FontAwesomeIcon icon={["fas","file-alt"]} size="3x"/>
            <a href={resume.plainTextResume.fields.file.url} className={utilStyles.attachmentBtn} target="_blank">View Text</a>
        </div>
    </section>)
}