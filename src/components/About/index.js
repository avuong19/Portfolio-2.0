import React from 'react';
import coverImage from '../../assets/img/biopic1.jpg';
import "bootstrap/dist/css/bootstrap.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function About() {
        return (
        <section >
            <h1 id="about">About Me</h1>
            <div class="row">
                <div class="col-sm-8">
                <img src={coverImage}
                        className="row justify-content-center" width="70%" height="70%" 
                        alt="cover"/>
                </div>
                <div class="col-sm-4">col-sm-4
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
                                  condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
                                  mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
                                  Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
                                  justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
                                  dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
                                  Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
                    </p>
                </div>
            </div>


        
    </section>
    );
}

export default About;
