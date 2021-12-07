import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import './Profil.css'
const ProfilPhoto = ({ children, abonne }) => {
    return (
        <div className="picture">
            <Container>
                <Row>
                    <Col  style={{fontSize:'16px'}}> 
                        {children}
                        {abonne}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
ProfilPhoto.defaultProps = {
    abonne: "100k abonnés"
}
export default ProfilPhoto
