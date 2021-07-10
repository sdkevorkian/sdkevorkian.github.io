import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import resumeStyles from './resume.module.scss';

export default function Resume(props){
    let resume = props.resume;
    return (<div>
        <h2>Resume</h2>
            {/* //todo: add icons and blurb */}
        {documentToReactComponents(resume.text)}
        <div>
            <a href={resume.pdfResume.fields.file.url} download>Download PDF</a>
            <a href={resume.pdfResume.fields.file.url} target="_blank">View PDF</a>
        </div>
        <div>
            <a href={resume.pdfResume.fields.file.url} download>Download Plain Text</a>
            <a href={resume.plainTextResume.fields.file.url} target="_blank">View Plain Text</a>
        </div>
    </div>)
}