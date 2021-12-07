import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PropTypes from 'prop-types';
import './Profil.css'
import ProfilPhoto from './ProfilPhoto'
import { Button } from 'react-bootstrap';

const Profil = ({ name, handlclick, bio, descrip, professional }) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <ProfilPhoto abonne="734k abonnés">
                            <img src="https://i.pinimg.com/280x280_RS/76/ef/a1/76efa10ff11f9c2800ce12826c0284d5.jpg" className="rounded-circle" alt="" width="150px" />
                            <p>1 331 publications</p>
                        </ProfilPhoto>
                    </Col>
                    <Col>
                        <div className="text-profil">
                            <div className="ProfilName">
                                <div style={{ display: 'flex'}}> <p>{name}</p> <Button variant="outline-secondary" onClick={() => handlclick(name)} style={{ marginLeft: 30 }}> click</Button>
                                </div>
                            </div>
                            <p>{bio}</p>
                            <p>{professional}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
Profil.propTypes = {
    professional: PropTypes.string,
    name: PropTypes.string,
    handlclick: PropTypes.func,
    bio: PropTypes.string
};
export default Profil
