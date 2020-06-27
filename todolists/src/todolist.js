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
		let list = this.state.list
		list.push(this.state.inputValue)
		this.setState({
			list,
			inputValue: ''
		})
	}

	handleDelet = (index) => {
		let list = this.state.list
		list.splice(index, 1)

		this.setState({
			list
		})
	}

	render() {
		return (
			<React.Fragment>
				<input value={this.state.inputValue} onChange={this.handleChangeValue} />
				<button className="btnstyle" onClick={this.handleClick}>提交</button>
				<ul>
					{
						this.state.list.map((Item, index) => {
							return <li key={index} onClick={() => this.handleDelet(index)} >{Item}</li>
						})
					}
				</ul>
			</React.Fragment>
		)
	}
}