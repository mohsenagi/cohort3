import React from 'react';
import './MyComponents.css';

class Hello extends React.Component {
    render () {
        return (
            <div className="IconsContainer">
                <h1>My First React Apps</h1>
            </div>
        );
    }
}

class Icon extends React.Component {
    render () {
        return (
            <div>
                <img src={this.props.Url} className={this.props.ClassName} alt={this.props.Name} />
            </div>
        );
    }
}



export {Hello, Icon}