class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleHomepageClick = this.handleHomepageClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePurchaseClick = this.handlePurchaseClick.bind(this);
    this.state = {
      current: <Homepage onHomepageClick={this.handleHomepageClick} />,
      location: "Homepage",
      next: null
    }
  }

  handleHomepageClick() {
    this.setState(
      {
        current: <F1 />,
        location: "F1",
        next: <Next onNextClick={this.handleNextClick} />
      }
    )
  }

  handleNextClick() {
    if (this.state.location === "Homepage") {
      this.setState(
        {
          current: <F1 />,
          location: "F1"
        }
      )
    } else if (this.state.location === "F1") {
      this.setState(
        {
          current: <F2 />,
          location: "F2"
        }
      )
    } else if (this.state.location === "F2") {
      this.setState(
        {
          current: <F3 />,
          location: "F3"
        }
      )
    } else if (this.state.location === "F3") {
      this.setState(
        {
          current: <Confirmation onPurchaseClick={this.handlePurchaseClick} />,
          location: "Confirmation",
          next: null
        }
      )
    }
  }

  handlePurchaseClick() {
    this.setState(
      {
        current: <Homepage onHomepageClick={this.handleHomepageClick} />,
        location: "Homepage",
        next: null
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
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value});
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
    this.state = {
      streetAddress: '',
      cityStateZip: '',
      phoneNum: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value});
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
    this.state = {
      ccNum: '',
      expirDate: '',
      zip: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value});
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
    return(
      <div>
        <h2>Confirmation</h2>
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