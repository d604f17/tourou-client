import React from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
class RangeInput extends React.Component {
  constructor(props) {
    super(props);

    this.onDrag = this.onDrag.bind(this);
  }

  onDrag(event) {
    console.log(event);
  };

  render() {
    return (
        <div>
          <Slider
              value={this.props.value}
              onChange={this.props.onChange}
          />
        </div>
    );
  }
}

export default RangeInput;