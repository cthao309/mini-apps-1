
// child component "checkout button"
const CheckoutBtn = (props) => {
  console.log('props => ', props)
  return <button onClick={props.handleNextBtn}>Check out</button>
}

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      isValidPassword: false,
      require: false
    }

    console.log('this.props => ', props)

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleOnChange(e) {
    let {name, value} = e.target;

    console.log('onchange => ', name, value)

    this.setState({
      [name]: value
    });

    let resetRequireField = this.state.name !== '' && this.state.email !== '' && this.state.password !== '' && this.state.confirmPassword !== '' ? true : false;

    this.setState({
      require: resetRequireField
    })

  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('submitted form 1 (this.props) => ', this.props)
    this.props.handleNextBtn();
  }

  render() {
    let nextBtn = this.state.require ? <button> Next Step </button> : <div></div>;
    return (
      <div>
        <h1>User Information</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.name} name="name" placeholder="name"></input>
          <label>Email</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.email} name="email" placeholder="email"></input>
          <label>Password</label>
          <input onChange={this.handleOnChange} type="password" value={this.state.password} name="password" placeholder="password"></input>
          <label>Confirm Password</label>
          <input onChange={this.handleOnChange} type="password" value={this.state.confirmPassword} name="confirmPassword" placeholder="confirmPassword"></input>
          {nextBtn}
        </form>
      </div>
    )
  }
}

class AddressForm extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      address: '',
      city: '',
      state: '',
      zipcode: ''
    }

    console.log('this.props => ', props)

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleOnChange(e) {
    let {name, value} = e.target;

    console.log('onchange => ', name, value)

    this.setState({
      [name]: value
    });

    let resetRequireField = this.state.address !== '' && this.state.city !== '' && this.state.state !== '' && this.state.zipcode !== '' ? true : false;

    this.setState({
      require: resetRequireField
    })

  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('submitted form 1 (this.props) => ', this.props)
    this.props.handleNextBtn();
  }

  render() {
    let nextBtn = this.state.require ? <button> Next Step </button> : <div></div>;
    return (
      <div>
        <h1>Form shipping address</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Address</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.address} name="address" placeholder="address"></input>
          <label>City</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.city} name="city" placeholder="city"></input>
          <label>State</label>
          <input onChange={this.handleOnChange} type="state" value={this.state.state} name="state" placeholder="state"></input>
          <label>Zip-code</label>
          <input onChange={this.handleOnChange} type="password" value={this.state.zipcode} name="zipcode" placeholder="zip-code"></input>
          {nextBtn}
        </form>
      </div>
    )
  }
}

class CreditCardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      ccNum: '',
      expireDate: '',
      cvv: '',
      billingZipcode: ''
    }

    console.log('this.props => ', props)

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleOnChange(e) {
    let {name, value} = e.target;

    console.log('onchange => ', name, value)

    this.setState({
      [name]: value
    });

    let resetRequireField = this.state.name !== '' && this.state.email !== '' && this.state.password !== '' && this.state.confirmPassword !== '' ? true : false;

    this.setState({
      require: resetRequireField
    })

  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('submitted form 1 (this.props) => ', this.props)
    this.props.handleNextBtn();
  }

  render() {
    let nextBtn = this.state.require ? <button> Next Step </button> : <div></div>;
    return (
      <div>
        <h1>Form Credit card</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Credit Card Number</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.ccNum} name="ccNum" placeholder="credit card number"></input>
          <label>Expire Date</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.expireDate} name="expireDate" placeholder="expire date"></input>
          <label>CVV #</label>
          <input onChange={this.handleOnChange} type="password" value={this.state.cvv} name="cvv" placeholder="cvv number"></input>
          <label>Billing Zip-code</label>
          <input onChange={this.handleOnChange} type="password" value={this.state.billingZipcode} name="billingZipcode" placeholder="Billing Zip-code"></input>
          {nextBtn}
        </form>
      </div>
    )
  }
}

class ConfirmationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      isValidPassword: false,
      require: false
    }

    console.log('this.props => ', props)

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleOnChange(e) {
    let {name, value} = e.target;

    console.log('onchange => ', name, value)

    this.setState({
      [name]: value
    });

    let resetRequireField = this.state.name !== '' && this.state.email !== '' && this.state.password !== '' && this.state.confirmPassword !== '' ? true : false;

    this.setState({
      require: resetRequireField
    })

  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('submitted form 1 (this.props) => ', this.props)
    this.props.handleNextBtn();
  }

  render() {
    let nextBtn = this.state.require ? <button> Purchase </button> : <div></div>;
    return (
      <div>
        <h1>Confirmation page</h1>
        <h4>data from the database...</h4>
        {/* <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.name} name="name" placeholder="name"></input>
          <label>Email</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.email} name="email" placeholder="email"></input>
          <label>Password</label>
          <input onChange={this.handleOnChange} type="password" value={this.state.password} name="password" placeholder="password"></input>
          <label>Confirm Password</label>
          <input onChange={this.handleOnChange} type="password" value={this.state.confirmPassword} name="confirmPassword" placeholder="confirmPassword"></input>
          {nextBtn}
        </form> */}
      </div>
    )
  }
}

// child component "form1" -- name, email, password
// class Form1 extends React.Component {

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