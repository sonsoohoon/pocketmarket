import React from "react";
import {Row, Col} from "reactstrap";
import './Footer.css';

const Footer = () => (
    <Row className="footer-row">
        <Col className="left-footer-col">
            <h5>사용방법</h5>
            <div>1.매장선택</div>
            <div>2.상품선택</div>
            <div>3.팝업화면 점원한테 보여주기</div>
        </Col>
        <Col className="right-footer-col">
            <h5>CONTACT</h5>
            <div>010-9410-9188</div>
        </Col>
    </Row>
)

export default Footer;
