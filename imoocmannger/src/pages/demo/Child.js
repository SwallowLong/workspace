import React from 'react'

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: "Hello World"
        };
    }

    componentWillMount() {
        console.log('will mount');
    }

    render() {
        return <div>
            <p>你好</p>
            <p>{this.props.name}</p>
        </div>
    }
}
