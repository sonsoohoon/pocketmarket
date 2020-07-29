import React from 'react';
import './App.css';
import {Header, PostWraper, MapContent, Footer} from "./components";


class App extends React.Component {
    render() {
        return (
                <div>
                    <Header></Header>
                    <MapContent></MapContent>
                    <PostWraper>500M이내</PostWraper>
                    <PostWraper>1KM이내</PostWraper>
                    <PostWraper>1.5KM이내</PostWraper>
                    <Footer></Footer>
                </div>
        );
    }
}

export default App;
