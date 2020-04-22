
// child component "checkout button"
const CheckoutBtn = (props) => {
  console.log('props => ', props)
  return <button onClick={props.handleNextBtn}>Check out</button>
}

class UserForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1 onClick={() => this.props.handleNextBtn()}>Form user infos</h1>
    )
  }
}

class AddressForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1 onClick={this.props.handleNextBtn}>Form shipping address</h1>
    )
  }
}

class CreditCardForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1 onClick={this.props.handleNextBtn}>Form Credit card</h1>
    )
  }
}

class ConfirmationForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>Confirmation page</h1>
    )
  }
}

// child component "form1" -- name, email, password
// class Form1 extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state ={
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       isValidPassword: false,
//       require: false
//     }

//     console.log('this.props => ', props)

//     this.handleOnChange = this.handleOnChange.bind(this);

//   }

//   handleOnChange(e) {
//     let {name, value} = e.target;

//     console.log('onchange => ', name, value)

//     this.setState({
//       [name]: value
//     });

//     this.validateField();

//   }

//   validateField() {
//     // let resetValidPassword = this.state.password === this.state.confirmPassword ? true : false;

//     let resetRequireField = this.state.name !== '' && this.state.email !== '' && this.state.password !== '' && this.state.confirmPassword !== '' ? true : false;

//     this.setState({
//       require: resetRequireField
//     })

//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     console.log('submitted form 1 (this.props) => ', this.props)
//     this.props.handleCheckoutBtn();
//   }

//   render() {
//     let nextBtn = this.state.require ? <button> Next Step </button> : <div></div>;
//     return (
//       <form onSubmit={(e) => this.handleSubmit.bind(this, e)}>
//         <label>Name</label>
//         <input onChange={this.handleOnChange} type="text" value={this.state.name} name="name" placeholder="name"></input>
//         <label>Email</label>
//         <input onChange={this.handleOnChange} type="text" value={this.state.email} name="email" placeholder="email"></input>
//         <label>Password</label>
//         <input onChange={this.handleOnChange} type="password" value={this.state.password} name="password" placeholder="password"></input>
//         <label>Confirm Password</label>
//         <input onChange={this.handleOnChange} type="password" value={this.state.confirmPassword} name="confirmPassword" placeholder="confirmPassword"></input>
//         {nextBtn}
//       </form>
//     )
//   }
// }

// Main app component

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: 0
    };
  }

  handleNextBtn() {
    console.log('clicked on check out btn..')

    let nextForm = Number(this.state.form);
    nextForm += 1;

    this.setState({
      form: nextForm
    })

    console.log('state => ', this.state)
  }

  render() {
    return (
      <div className="multistep_checkout">
        { this.state.form === 0 && <CheckoutBtn handleNextBtn={this.handleNextBtn.bind(this)} />}
        { this.state.form === 1 && <UserForm handleNextBtn={this.handleNextBtn.bind(this)} />}
        { this.state.form === 2 && <AddressForm handleNextBtn={this.handleNextBtn.bind(this)} />}
        { this.state.form === 3 && <CreditCardForm handleNextBtn={this.handleNextBtn.bind(this)} />}
        { this.state.form === 4 && <ConfirmationForm handleNextBtn={this.handleNextBtn.bind(this)} />}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))