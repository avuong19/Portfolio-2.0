import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import gamerConnect from '../../assets/img/gamerconnect.png';
import noteTaker from '../../assets/img/notetaker.JPG';
import theSpellBook from '../../assets/img/thespellbook.JPG';
import workDaySchedule from '../../assets/img/workdayschedule.jfif';
import passGen from '../../assets/img/passwordgen.JPG';
import weatherDash from '../../assets/img/Capture.jfif';
import artBoard from '../../assets/img/artboard.JPG';




function Project() {
    return (
        <Container>
            <Row  md={2} xs={2} lg={2} >
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <p>Gamer Social Media
                                </p>
                                <div><a href="https://secret-coast-34340.herokuapp.com/">Click here for deployed link</a></div>
                                <a href="https://github.com/avuong19/Video-Game-Chats">Click here for Git Repo</a>

                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom"
                            src={gamerConnect}/>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <p>Art Board
                                </p>
                                <div><a href="https://project-3-artboard.herokuapp.com/">Click here for deployed link</a></div>
                                <a href="https://github.com/avuong19/project-3-artBoard">Click here for Git Repo</a>

                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom"
                            src={artBoard}/>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <p>Note Taker
                                </p>
                                <div><a href="https://fast-reaches-21351.herokuapp.com/">Click here for deployed link</a></div>
                                <a href="https://github.com/avuong19/note_taker">Click here for Git Repo</a>

                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom"
                            src={noteTaker}/>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <p>D and D Spell Search
                                </p>
                                <div><a href="https://laynewegenast.github.io/project-1-the-spell-book//">Click here for deployed link</a></div>
                                <a href="https://github.com/avuong19/project-1-the-spell-book">Click here for Git Repo</a>

                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom"
                            src={theSpellBook}/>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <p>Work Day Scheduler
                                </p>
                                <div><a href="https://avuong19.github.io/workday-schedulerr/">Click here for deployed link</a></div>
                                <a href="https://github.com/avuong19/workday-schedulerr">Click here for Git Repo</a>

                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom"
                            src={workDaySchedule}/>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <p>Password Generator
                                </p>
                                <div><a href="https://avuong19.github.io/Pass-generator/">Click here for deployed link</a></div>
                                <a href="https://github.com/avuong19/Pass-generator">Click here for Git Repo</a>

                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom"
                            src={passGen}/>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body >
                            <Card.Text>
                                <p>Weather Dashboard
                                </p>
                                <div><a href="https://avuong19.github.io/Weather-Dashboard/">Click here for deployed link</a></div>
                                <a href="https://github.com/avuong19/Weather-Dashboard">Click here for Git Repo</a>

                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom"
                            src={weatherDash}/>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}

export default Project;
