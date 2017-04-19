import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", username: "",
                   email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentWillUnmount() {
    this.setState = { name: "", username: "", password: "" };
    this.props.clearErrors();
  }
  // do I actually need this????

  componentWillReceiveProps(newProps) {
    if (this.props.formType !== newProps.formType) {
      this.setState({ name: "", username: "", password: "" });
      this.props.clearErrors();
    }
  }

  redirect() {
    return this.props.router.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
  }

  update(property) {
    return e => {
      e.preventDefault();
      this.setState({ [property]: e.currentTarget.value });
    };
  }

  render() {
    const actionType = this.props.formType;
    const buttonWord = actionType === '/signup' ? 'Sign Up': 'Log In';

    const linkAction = actionType === '/signup' ? 'login' : 'signup';
    const linkWord = actionType === '/signup' ? 'Log in instead': 'Sign up instead';

    const all_errors = this.props.errors
    const errors = Object.keys(this.props.errors).map(id => {
      return `${id} ${all_errors[id]}`;
    });


    let extraFields;

    if (actionType === "/signup") {
      extraFields = (
        <label>Name:
          <input type="text"
                 onChange={this.update('name')}
                 placeholder="Names"
                 value={this.state.name} />
        </label>
      )
    }

    return(
      <div className="session">
        <div className="form">
          <h1>Welcome to <span>HappyMe</span></h1>
          <form onSubmit={ this.handleSubmit }>
            { extraFields }

            <input type="text"
              onChange={this.update('username')}
              placeholder="Username"
              value={this.state.username} />

            <input type="password"
              onChange={this.update('password')}
              placeholder="Password"
              value={this.state.password} />

            <button>{ buttonWord }</button>
          </form>

          { errors }

          <Link to={`/${linkAction}`}>{ linkWord }</Link>
        </div>

      </div>
    );
  }
}

export default SessionForm;
