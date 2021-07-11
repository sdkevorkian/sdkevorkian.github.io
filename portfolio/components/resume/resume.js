import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import resumeStyles from './resume.module.scss';
import utilStyles from '../../styles/utils.module.scss'

export default function Resume(props){
    let resume = props.resume;
    return (<section className={resumeStyles.resume}>
        <h2>Resume</h2>
            {/* //todo: add icons and blurb */}
        {documentToReactComponents(resume.text)}
        <div className={resumeStyles.btnContainer}>
            <i className="fas fa-file-pdf fa-3x"></i>
            <a href={resume.pdfResume.fields.file.url} className={utilStyles.attachmentBtn} target="_blank">View PDF</a>
        </div>
        <div className={resumeStyles.btnContainer}>
            <i className="fas fa-file-alt fa-3x"></i>
            <a href={resume.plainTextResume.fields.file.url} className={utilStyles.attachmentBtn} target="_blank">View Text</a>
        </div>
    </section>)
}