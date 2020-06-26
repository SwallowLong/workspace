import React from 'react'
import Child from './Child.js'
import './index.css'
export default class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: "Hello World"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            count: "Hello React"
        })
    }
    render() {
        return <div className="content"> 
            <p> React生命周期介绍</p>
            <button onClick={this.handleClick}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name="lgy"/>
        </div>
    }
} 