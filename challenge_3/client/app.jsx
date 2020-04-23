
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
    console.log('submitted form 1 (this.props) => ', this.props)
    this.props.handleFormSubmit(this.state)
    this.props.handleNextBtn();

    e.preventDefault();
  }

  render() {
    let nextBtn = this.state.require ? <button> Next Step </button> : <div></div>;
    return (
      <div>
        <h1>User Information Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.name} name="name" placeholder="name"></input>
          <label>Email</label>
          <input onChange={this.handleOnChange} type="email" value={this.state.email} name="email" placeholder="email"></input>
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
      zipcode: '',
      phone: ''
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

    let resetRequireField = this.state.address !== '' && this.state.city !== '' && this.state.state !== '' && this.state.zipcode !== '' && this.state.phone !== '' ? true : false;

    this.setState({
      require: resetRequireField
    })

  }

  handleSubmit(e) {
    this.props.handleFormSubmit(this.state)
    this.props.handleNextBtn();

    e.preventDefault();
  }

  render() {
    console.log('status nextBtn => ', this.state.require)
    let nextBtn = this.state.require ? <button> Next Step </button> : <div></div>;
    return (
      <div>
        <h1>Shipping Address Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Address</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.address} name="address" placeholder="address"></input>
          <label>City</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.city} name="city" placeholder="city"></input>
          <label>State</label>
          <input onChange={this.handleOnChange} type="state" value={this.state.state} name="state" placeholder="state"></input>
          <label>Zip-code</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.zipcode} name="zipcode" placeholder="zip-code"></input>
          <label>Phone Number</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.phone} name="phone" placeholder="phone number"></input>
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
      credit_card: '',
      expire_date: '',
      cvv: '',
      billing_zip: ''
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

    let resetRequireField = this.state.credit_card !== '' && this.state.expire_date !== '' && this.state.cvv !== '' && this.state.billing_zip !== '' ? true : false;

    this.setState({
      require: resetRequireField
    })

  }

  handleSubmit(e) {
    this.props.handleFormSubmit(this.state)
    this.props.handleNextBtn();

    e.preventDefault();
  }

  render() {
    let nextBtn = this.state.require ? <button> Next Step </button> : <div></div>;
    return (
      <div>
        <h1>Credit card Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Credit Card Number</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.credit_card} name="credit_card" placeholder="credit card number"></input>
          <label>Expire Date</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.expire_date} name="expire_date" placeholder="expire date"></input>
          <label>CVV #</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.cvv} name="cvv" placeholder="cvv number"></input>
          <label>Billing Zip-code</label>
          <input onChange={this.handleOnChange} type="text" value={this.state.billing_zip} name="billing_zip" placeholder="Billing Zip-code"></input>
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
      data: props.userData
    }

    console.log('props => ', props, props.userData, this.state.data)
  }

  handleSubmit(e) {
    console.log('submitted confirmation (this.props) => ', this.props)
    this.props.handlePlaceOrder();

    e.preventDefault();
  }

  render() {
    console.log('this.state.data => ', this.state.data)
    return (
      <div>
        <h1>Confirmation page</h1>
        <h4>Please verify the following information</h4>
        <div className="userName">
          <h5>Name: {this.state.data.name}</h5>
          <h5>Email: {this.state.data.email}</h5>
          <h5>Password: {this.state.data.password}</h5>
        </div>
        <div className="userAddress">
          <h5>Address: {this.state.data.address}</h5>
          <h5>City: {this.state.data.city}</h5>
          <h5>State: {this.state.data.state}</h5>
          <h5>Zip-code: {this.state.data.zipcode}</h5>
          <h5>Phone: {this.state.data.phone}</h5>
        </div>
        <div className="userCreditCard">
          <h5>Credit Card #: {this.state.data.credit_card}</h5>
          <h5>Expire Date: {this.state.data.expire_date}</h5>
          <h5>CVV: {this.state.data.cvv}</h5>
          <h5>Billing Zipcode: {this.state.data.billing_zip}</h5>
        </div>
        <div>
          <button onClick={() => this.props.handleNextBtn()}> Purchase </button>
          <a href="http://localhost:3000"> Edit </a>
        </div>
      </div>
    )
  }
}

const AlertMessage = () => {
  return (
    <div>
      <h1> Your information is saved into the database </h1>
      <a href="http:localhost:3000">Go to home page</a>
    </div>
  )
}

// Main app component
class App extends React.Component {
  constructor(props) {
    super(props);

    /*
      CREATE TABLE orders (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(25) NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(25) NOT NULL,
        address VARCHAR(25) NOT NULL,
        city VARCHAR(25) NOT NULL,
        state VARCHAR(25) NOT NULL,
        zipcode VARCHAR(25) NOT NULL,
        phone VARCHAR(25) NOT NULL,
        credit_card BIGINT NOT NULL,
        expire_date INT NOT NULL,
        cvv VARCHAR(5) NOT NULL,
        billing_zip INT NOT NULL,
        PRIMARY KEY(id)
      );
    */

    this.state = {
      form: 0,
      name: '',
      email: '',
      password: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      credit_card: '',
      expire_date:'',
      cvv: '',
      billing_zip: ''
    };
  }

  handleNextBtn() {
    console.log('clicked on check out btn..')

    let nextForm = Number(this.state.form);
    nextForm += 1;

    this.setState({
      form: nextForm
    });

    if(this.state.form == 4) {
      this.saveUserInfoToDatabase();
    }

    console.log('state => ', this.state)
  }

  saveUserInfoToDatabase() {
    console.log('saving data to database...');

    let newData = this.state;

    // confirmPassword, require, form, isValidPassword
    delete newData[confirmPassword];
    delete newData[require];
    delete newData[form];
    delete newData[isValidPassword];

    $.ajax({
      type: "POST",
      url: 'http://localhost:3000',
      data: newData,
      success: () => {
        console.log('Successful saving the data')
      },
      error: (err) => {
        console.log('Error in saving the data => ', err)
      }
    })
  }

  handleFormSubmit(userData) {
    console.log('user data => ', userData)
    Object.assign(this.state, userData);

    console.log('destructuring user infos => ', this.state)

  }

  handlePlaceOrder() {
    console.log('Save user infos into the database...')
  }

  render() {
    console.log('newState => ', this.state)
    return (
      <div className="multistep_checkout">
        { this.state.form === 0 &&
        <CheckoutBtn handleNextBtn={this.handleNextBtn.bind(this)} />}
        { this.state.form === 1 &&
          <UserForm
            handleNextBtn={this.handleNextBtn.bind(this)}
            handleFormSubmit={this.handleFormSubmit.bind(this)}
          />}
        { this.state.form === 2 &&
          <AddressForm
            handleNextBtn={this.handleNextBtn.bind(this)}
            handleFormSubmit={this.handleFormSubmit.bind(this)}
          />}
        { this.state.form === 3 &&
          <CreditCardForm
            handleNextBtn={this.handleNextBtn.bind(this)}
            handleFormSubmit={this.handleFormSubmit.bind(this)}
          />}
        { this.state.form === 4 && <ConfirmationForm
          handleNextBtn={this.handleNextBtn.bind(this)}
          handlePlaceOrder={this.handlePlaceOrder.bind(this)}
          userData={this.state}
        />}
        { this.state.form === 5 && <AlertMessage />}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))