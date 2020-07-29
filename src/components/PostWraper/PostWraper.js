import React from 'react';
import './PostWraper.css';
import {MartInfo} from "../index";

class PostWraper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            martData: [
                {
                    martName: '스타벅스 고대',
                    martLike: 10,
                    martComment: '너무 맛있어요 ㅋ',
                    martCommentLike: 30
                },
                {
                    martName: '스타벅스 안암',
                    martLike: 55,
                    martComment: '세계멸망을 위하여 오늘도 커피를 마신다..',
                    martCommentLike: 23
                },
                {
                    martName: '카페베네 고대',
                    martLike: 6,
                    martComment: '커피가격좀 낮춰주세요',
                    martCommentLike: 5
                },
            ]
        }//this.state end
    }//construct end

    render() {
        const mapToComponent = data => {
            return data.map((mart, i) => {
                return (<MartInfo mart={mart} key={i}/>);
            });//map end
        };//maptoComponent end
        return (
            <div className="PostWraper">
                <h5 className="distance">{this.props.children}</h5>
                {mapToComponent(this.state.martData)}
            </div>
        );//return end
    }//render end
}


export default PostWraper;