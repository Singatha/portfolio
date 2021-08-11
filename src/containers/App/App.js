import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import GalleryDetail from '../Gallery/GalleryDetail/GalleryDetail';
import GalleryCard from '../Gallery/GalleryCard/GalleryCard';
import Home from '../Home/Home';

class App extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/gallery-detail" component={GalleryDetail} />
                    <Route path="/gallery-card-view" component={GalleryCard} />
                </Switch>
            </Router>
        );
    }
}

export default App;
