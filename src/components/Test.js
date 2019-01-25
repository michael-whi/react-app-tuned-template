import React, { Component } from 'react';

class Test extends Component {

    constructor (){
        super();
        this.state = { theme: null };
    }
    
    render() {

        const { theme } = this.state;
        return (
            <div>
                Test
            </div>
        );

    }

}

export default Test;