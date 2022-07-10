import React from 'react'; 
import resumeFile from '../../assets/Resume/Anh Vuong_cv.pdf';


function Resume() {
    return(
<a href={resumeFile} download="AnhVuongresume.pdf"> Click here to download my Resume </a>
    )
}



export default Resume;