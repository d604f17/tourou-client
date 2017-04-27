import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
    };

    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleAddressSubmit = this.handleAddressSubmit.bind(this);
  }

  handleAddressChange(event) {
    this.setState({address: event.target.value});
  }

  handleAddressSubmit(event) {
    event.preventDefault();

    this.props.history.push({
      pathname: '/create',
      state: {
        address: this.state.address,
      },
    });
  }

  render() {
    return (
        <div className="page-home">
          <section>
            <h1>tourou</h1>
            <form onSubmit={this.handleAddressSubmit}>
              <input type="text" onChange={this.handleAddressChange}/>
            </form>
          </section>
        </div>
    );
  }
}

export default HomePage;