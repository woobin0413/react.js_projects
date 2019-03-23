import React, { Component } from "react";
import "./App.css";
// import Counters from "./components/counters";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      }
    ]
  };

  constructor() {
    super();
    console.log("App - Counstructor");
  }

  componentDidMount() {
    console.log("component is mounted");
  }
  // e 는 counterId props로 쓰는거
  // e를 뺸 나머지 counter를 오버라이팅 한다.
  handleDelete = e => {
    const counters = this.state.counters.filter(c => c.id !== e);
    this.setState({ counters });
  };

  //eventhandler can not access to "this", this.state
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //this.state.counter에있는 값들을 모두 복사
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("app rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />

        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
