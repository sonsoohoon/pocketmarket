import React from "react";
import {Row, Col} from 'reactstrap';
import './MartInfo.css';
import { BsFillHeartFill } from "react-icons/bs";


class MartInfo extends React.Component {
    render() {
        return (
            <div className="mart">
                <Row>
                    <Col className="left-col">
                        <div className="left">
                            <img className="mart-img" src={require('./10.png')} alt="mart"/>
                        </div>
                    </Col>
                    <Col className="right-col">
                        <div>
                            <h6>
                                {this.props.mart.martName}
                                <span className="mart-like-count">
                                    <BsFillHeartFill color="blue"/>
                                    <span>{this.props.mart.martLike}</span>
                                </span>
                            </h6>
                        </div>
                        <div>
                            {this.props.mart.martComment}
                            <span className="comment-like-count">
                                <BsFillHeartFill color="red"/>
                                <span>{this.props.mart.martLike}</span>
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MartInfo;