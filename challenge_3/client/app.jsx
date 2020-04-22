
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form1: 0
    };
  }

  render() {
    return (
      <div className="multistep_checkout">
        <button>Check out</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))