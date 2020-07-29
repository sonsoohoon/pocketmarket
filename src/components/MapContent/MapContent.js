/*global kakao*/
import React from "react";
import './MapContent.css';

class MapContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentAddress: '알수없음'};
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src =
            "https://dapi.kakao.com/v2/maps/sdk.js?appkey=2a40b9e58744cbe7d0cb367e51c07eb4&autoload=false&libraries=services";
        document.head.appendChild(script);
        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById("Map");
                container.style.width = '100%';
                container.style.height = '2rem';
                container.style.textAlign = 'center';

                // 주소-좌표 변환 객체를 생성합니다
                var geocoder = new kakao.maps.services.Geocoder();
                var curAddr = function (result, status) {
                    if (status === kakao.maps.services.Status.OK) {
                        console.log('지역 명칭 : ' + result[0].address.address_name, this);
                        this.setState({ currentAddress: result[0].address.address_name })
                    }
                }.bind(this);

                if (navigator.geolocation) {
                    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var lon = position.coords.longitude; // 경도
                        var lat = position.coords.latitude; // 위도
                        console.log(lon, lat);
                        // 좌표로 법정동 상세 주소 정보를 요청합니다
                        geocoder.coord2Address(lon, lat, curAddr);

                    });
                }//if (navigator.geolocation) { end
            });//kakao.map.load end
        };//script.onload end
    }

    render() {
        return <div id="Map">{this.state.currentAddress}</div>;
    }
}

export default MapContent;