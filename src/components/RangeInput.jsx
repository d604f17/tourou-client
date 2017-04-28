import React from 'react';

class RangeInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleStart = this.handleStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  handleStart() {
    document.addEventListener('mousemove', this.handleDrag);
    document.addEventListener('mouseup', this.handleEnd);
  }

  handleDrag(event) {
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    console.log(clientX);
  }

  handleEnd() {
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleEnd);
  }

  getValueFromPosition() {

  }

  getPositionFromValue() {

  }

  render() {
    return (
        <div>
          <div onMouseDown={this.handleStart}
               onTouchMove={this.handleDrag}
               onTouchEnd={this.handleEnd}>
            K
          </div>
        </div>
    );
  }
}

export default RangeInput;