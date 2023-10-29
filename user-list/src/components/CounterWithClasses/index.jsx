import { Component } from "react";

class CounterWithClasses extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }

  // life cicle, works after firs loading app
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
   }

  dec = () => {
    const {
      state: { count },
      props: { step },
    } = this;

    this.setState({
      count: count - step,
    });
  };

  inc = () => {
    const {
      state: { count },
      props: { step },
    } = this;

    this.setState({
      count: count + step,
    });
  };

  render() {
    console.log("render");
    const { count } = this.state;
    return (
      <div>
        Count: {count}
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
      </div>
    );
  }
}

export default CounterWithClasses;
