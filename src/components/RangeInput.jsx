import React from 'react';
import Radium from 'radium';

@Radium
export default class RangeInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleStart = this.handleStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  handleStart() {
    document.addEventListener('mousemove', this.handleDrag);
    document.addEventListener('mouseup', this.handleEnd);
  }

  handleDrag(event) {
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const x = clientX - (this.handle.offsetWidth / 2);

    this.handle.focus();

    this.props.onChange(this.getValueFromPosition(x));
  }

  handleEnd() {
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleEnd);
  }

  handleKey(event) {
    const {value, step, onChange} = this.props;
    const increment = event.shiftKey ? step * 5 : step;

    switch (event.keyCode) {
      case 39:
        onChange(value + increment);
        break;
      case 37:
        onChange(value - increment);
        break;
    }
  }

  getValueFromPosition(clientX) {
    const {min, max, step} = this.props;
    const {left, right} = this.slider.getBoundingClientRect();
    const scalar = (right - left) / 100;
    const percentage = (clientX - left) / scalar;
    const baseValue = ((max - min) / 100) * percentage;
    const value = Math.round(baseValue / step) * step;

    if (value < min) return min;
    else if (value > max) return max;
    else return value;
  }

  getPositionFromValue() {
    const {min, max, value} = this.props;
    const position = (value - min) / (max - min) * 100;

    if (position < 0) return 0;
    else if (position > 100) return 100;
    else return position;
  }

  render() {
    const {value, min, max, format} = this.props;

    return (
        <div style={styles.slider}
             ref={slider => {
               this.slider = slider;
             }}>
          <button style={[styles.handle, {left: this.getPositionFromValue() + '%'}]}
                  ref={handle => {
                    this.handle = handle;
                  }}
                  onKeyDown={this.handleKey}
                  onMouseDown={this.handleStart}
                  onTouchMove={this.handleDrag}
                  onTouchEnd={this.handleEnd}>
            <span style={styles.handleBars}/>
            <span style={styles.handleBars}/>
            <span style={styles.handleBars}/>
            <span style={styles.tooltip}>{format(value)}</span>
          </button>
          <div style={styles.rail}
               onMouseDown={this.handleDrag}
               onMouseUp={this.handleEnd}
               onTouchStart={this.handleDrag}
               onTouchEnd={this.handleEnd}/>
          <span style={[styles.label, styles.labelLeft]}>{format(min)}</span>
          <span style={[styles.label, styles.labelRight]}>{format(max)}</span>
        </div>
    );
  }
}

RangeInput.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  format: value => value,
};

const styles = {
  slider: {
    height: '32px',
    display: 'flex',
    padding: '14px 0',
    boxSizing: 'content-box',
    alignItems: 'center',
    marginRight: '27px',
    position: 'relative',
  },
  handle: {
    padding: '6px 8px',
    display: 'flex',
    backgroundColor: '#ffffff',
    border: '1px solid #e6e6e6',
    borderRadius: '3px',
    position: 'absolute',
    left: '100%',
    ':focus': {
      outline: '0',
      border: '1px solid #ff6673',
    },
  },
  handleBars: {
    display: 'block',
    height: '16px',
    width: '1px',
    margin: '1px',
    backgroundColor: '#e6e6e6',
  },
  rail: {
    height: '10px',
    width: 'calc(100% + 27px)',
    marginRight: '-27px',
    backgroundColor: '#ffffff',
    border: '1px solid #e6e6e6',
    borderRadius: '3px',
  },
  tooltip: {
    position: 'absolute',
    top: '-14px',
    left: '0px',
    right: '0px',
    color: '#ff6673',
    fontSize: '0.714em',
    fontWeight: '600',
    whiteSpace: 'nowrap',
  },
  label: {
    display: 'block',
    minWidth: '27px',
    textAlign: 'center',
    position: 'absolute',
    fontSize: '0.714em',
    whiteSpace: 'nowrap',
    color: '#919191',
    bottom: '0px',
  },
  labelLeft: {
    left: '0px',
  },
  labelRight: {
    right: '-27px',
  },
};