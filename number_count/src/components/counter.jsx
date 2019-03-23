import React, { Component } from "react";

class Counter extends Component {
  // optimization
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
    }
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    console.log("counter rendered");

    return (
      <div>
        {this.props.children}
        <span className={this.getBaddgeClasses()}>{this.formatvalue()}</span>
        {/* {this.getrenderTag()} */}
        {/* {this.state.tags.length === 0 && <p>Please create a new object</p>} */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          // 다른 버튼과 다르다 이거는 counters 에서 가져온 메소드라 문법이다르며 props를 가져온다.
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // getrenderTag() {
  //   if (this.props.tags.length === 0) {
  //     return <p>No tags!</p>;
  //   } else {
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // }

  getBaddgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatvalue() {
    const { value: value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
