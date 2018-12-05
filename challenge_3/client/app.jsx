class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleHomepageClick = this.handleHomepageClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePurchaseClick = this.handlePurchaseClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      current: <Homepage onHomepageClick={this.handleHomepageClick} />,
      location: "Homepage",
      next: null,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      streetAddress: '',
      cityStateZip: '',
      phoneNum: '',
      ccNum: '',
      expirDate: '',
      zip: ''
    }
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  handleHomepageClick() {
    this.setState(
      {
        current: <F1 onHandleChange={this.handleChange} />,
        location: "F1",
        next: <Next onNextClick={this.handleNextClick} />
      }
    )
  }

  handleNextClick() {

    if (this.state.location === "Homepage") {
      this.setState(
        {
          current: <F1 onHandleChange={this.handleChange} />,
          location: "F1"
        }
      )
    } else if (this.state.location === "F1") {

      var jsonState = JSON.stringify(this.state);

        fetch('/F', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: jsonState
        }).catch((err) => {
          console.error(err)
        }).then(res => console.log('Success!', res.text()))

        this.setState(
          {
            current: <F2 onHandleChange={this.handleChange} />,
            location: "F2",
          }
          )

    } else if (this.state.location === "F2") {

      var jsonState = JSON.stringify(this.state);

        fetch('/F', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: jsonState
        }).catch((err) => {
          console.error(err)
        }).then(res => console.log('Success!', res.text()))

      this.setState(
        {
          current: <F3 onHandleChange={this.handleChange} />,
          location: "F3"
        }
      )
    } else if (this.state.location === "F3") {

      var jsonState = JSON.stringify(this.state);

        fetch('/F', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: jsonState
        }).catch((err) => {
          console.error(err)
        }).then(res => console.log('Success!', res.text()))

      this.setState(
        {
          current: <Confirmation onPurchaseClick={this.handlePurchaseClick} appState={this.state} />,
          location: "Confirmation",
          next: null
        }
      )

      fetch('/confirm')
        .catch(err => {
          console.error(err)
        })
        .then(res => {
          return res.json()
        },
        (err) =>{
          console.error(err)
        })
        .then(res => {
          console.log('array', res[0])
        })
    }
  }

  handlePurchaseClick() {
    this.setState(
      {
        current: <Homepage onHomepageClick={this.handleHomepageClick} />,
        location: "Homepage",
        next: null,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        streetAddress: '',
        cityStateZip: '',
        phoneNum: '',
        ccNum: '',
        expirDate: '',
        zip: '',
      }
    )
  }

  render() {
    return (
      <div>
        {this.state.current}
        {this.state.next}
      </div>
    )
  }
}

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onHomepageClick();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Checkout
        </button>
      </div>
    )
  }
}

class Next extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onNextClick();
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Next
      </button>
    )
  }
}

class F1 extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.props.onHandleChange(e);
  }

  render() {
    return(
      <div>
        <h2>Account Creation</h2>
        <form>
          <label>
            First Name:
            <br />
            <input type="text" name="firstName" onChange={this.handleChange} />
          </label>
        </form>
        <form>
          <label>
            Last Name:
            <br />
            <input type="text" name="lastName" onChange={this.handleChange} />
          </label>
        </form>
        <form>
          <label>
            Email:
            <br />
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
        </form>
        <form>
          <label>
            Password:
            <br />
            <input type="text" name="password" onChange={this.handleChange} />
          </label>
        </form>
      </div>
    )
  }
}

class F2 extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.props.onHandleChange(e);
  }

  render() {
    return(
      <div>
        <h2>Shipping Address</h2>
        <form>
          <label>
            Street Address:
            <br />
            <input type="text" name="streetAddress" onChange={this.handleChange} />
          </label>
        </form>
        <form>
          <label>
            City, State, Zip:
            <br />
            <input type="text" name="cityStateZip" onChange={this.handleChange} />
          </label>
        </form>
        <form>
          <label>
            Phone Number:
            <br />
            <input type="text" name="phoneNum" onChange={this.handleChange} />
          </label>
        </form>
      </div>
    )
  }
}

class F3 extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.props.onHandleChange(e);
  }

  render() {
    return(
      <div>
        <h2>Payment Info</h2>
        <form>
          <label>
            Credit Card Number:
            <br />
            <input type="text" name="ccNum" onChange={this.handleChange} />
          </label>
        </form>
        <form>
          <label>
            Expiration Date (mm/yyyy):
            <br />
            <input type="text" name="expirDate" onChange={this.handleChange} />
          </label>
        </form>
        <form>
          <label>
            Billing Zip Code:
            <br />
            <input type="text" name="zip" onChange={this.handleChange} />
          </label>
        </form>
      </div>
    )
  }
}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onPurchaseClick();
  }

  render() {
    console.log('Confirm state', this.props)
    return(
      <div>
        <h2>Confirmation</h2>
        <p>First Name: {this.props.appState.firstName}</p>
        <p>Last Name: {this.props.appState.lastName}</p>
        <p>Email: {this.props.appState.email}</p>
        <p>Street Address: {this.props.appState.streetAddress}</p>
        <p>City, State, Zip: {this.props.appState.cityStateZip}</p>
        <p>Phone Number: {this.props.appState.phoneNum}</p>
        <p>Credit Card Number: {this.props.appState.ccNum}</p>
        <p>Expiration Date: {this.props.appState.expirDate}</p>
        <p>Zip Code: {this.props.appState.zip}</p>
        <button onClick={this.handleClick}>
          Purchase
        </button>
      </div>
    )
  }
}



window.App = App;

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

/*
after clicking each next button:
  collect information from state object
  send post request to server

after clicking purchase button:
  send get request to server asking for
    specific entry from that person
  display collected information in Confirmation component
*/