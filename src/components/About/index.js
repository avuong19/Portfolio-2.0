import React from 'react';
import coverImage from '../../assets/img/biopic1.jpg';
import "bootstrap/dist/css/bootstrap.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'

function About() {
        return (
        <section >
            <h1 id="about">About Me</h1>
            <div class="row">
                <div class="col-sm-8">
                <Image src={coverImage}
                        className="img-fluid rounded" width="70%" height="70%" 
                        alt="cover"/>
                </div>
                <div class="col-sm-4">
                    <p>
                        HI, WELCOME TO MY PAGE
                        
                     
                    </p>
                    <p>
                        My name is Anh Vuong. I am currently a QA Tester learning to code to become a software developer. I am taking a coding bootcamp class at the University of Texas, Austin. I am sufficient in both front end and back end. Some of my highlighted skills are: HTML,CSS, JavaScript, jQuery, React.js, Angular.js, IndexedDb, Node.js, Express.js, SQL, noSQL, APIs. Please take a look at my page. My contact are in the footer or under the contact tab. Thank you for visiting me!
                        
                     
                    </p>
                </div>
            </div>


        
    </section>
    );
}

export default About;
