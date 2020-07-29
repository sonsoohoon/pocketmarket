import React from 'react';
import './Header.css';
import { BsJustify, BsBriefcaseFill } from "react-icons/bs";
import {Container, Row, Col} from 'reactstrap';

const Header = () => (
    <div className="Header">
        <Container>
            <Row height="20px">
                <Col className="header-col">
                    <button className="config-icon">
                        <BsJustify/>
                    </button>
                </Col>
                <Col className={"header-col"}>
                    <img
                        src={require('./pocket_logo.png')}
                        width={"100%"}
                        height={"100%"}
                        alt="pocket-logo"
                    />
                </Col>
                <Col className={"header-col"}>
                    <button className="mypage-icon">
                        <BsBriefcaseFill/>
                    </button>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Header;