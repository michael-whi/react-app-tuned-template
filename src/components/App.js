import React, { Component } from "react";
import Test from "./Test"
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <div style={{ fontSize: 80 }}>
                    App
                </div>
                <Test />
            </div>
        );
    }
}

export default App;