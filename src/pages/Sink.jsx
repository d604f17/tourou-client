import React from 'react';
import RangeInput from 'components/RangeInput';

class SinkPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      distance: 50,
    };

    this.handleDistanceChange = this.handleDistanceChange.bind(this);
  }

  handleDistanceChange(value) {
    this.setState({distance: value})
    console.log(value);
  }

  render() {
    const {distance} = this.state;

    return (
        <div className="page-sink">
          <RangeInput value={distance} onChange={this.handleDistanceChange}/>
        </div>
    );
  }
}

export default SinkPage;