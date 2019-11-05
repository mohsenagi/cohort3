import React from 'react';

class MyComp extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello World says {this.props.whatToSay}</h1>
                <button onClick={this.props.func}>Push Me</button>
            </div>
        );
    }
}

class EvenComp extends React.Component {
    render () {
        return (
            <div>
                <h1>Even Component</h1>
            </div>
        );
    }
}

class OddComp extends React.Component {
    render () {
        return (
            <div>
                <h1>Odd Component</h1>
            </div>
        );
    }
}



export {MyComp, EvenComp, OddComp};