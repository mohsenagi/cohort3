import React from 'react';

class Hello extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}

class Icon extends React.Component {
    render () {
        return (
            <div>
                <img src={this.props.Url} className="Icons" alt={this.props.Name} />
            </div>
        );
    }
}

export {Hello, Icon}