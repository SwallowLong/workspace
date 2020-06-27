import React from 'react'
import './style.css'

export default class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            inputValue: '',
        }
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChangeValue(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleDelet(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
            //  为什么以下列方式写时会报错
            //  list: list.splice(index,1)
        })
    }

    render() {
        return (
            <React.Fragment>
                <input value={this.state.inputValue} onChange={this.handleChangeValue} />
                <button className="btnstyle" onClick={this.handleClick}>提交</button>
                <div>
                    {this.state.list.map((Item, index) => {
                        return <li key={index} onClick={this.handleDelet.bind(this, index)}>{Item}</li>
                    }
                    )}
                </div>
            </React.Fragment>
        )
    }
}