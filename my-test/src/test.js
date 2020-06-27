import React from 'react'

export default class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      // change code below this line
  this.toggleVisibility = this.toggleVisibility.bind(this);
      // change code above this line
    }
    // change code below this line
  toggleVisibility() {
    // 此处注意是this.state.visibility不要忘记了this.state
    const visibility = this.state.visibility ? false : true;
    this.setState({visibility: visibility})
  }
    // change code above this line
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  };