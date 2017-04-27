import React from 'react';
import Radium from 'radium';

const TransportTypeInput = ({value, onChange}) => {
  const TransportType = Radium(({style, type, children, ...other}) => {
    const buttonStyles = [styles.button, value == type ? styles.active : {}];
    const innerStyles = [styles.inner, style];

    return (
        <button style={buttonStyles}
                onClick={onChange.bind(this, type)}>
          <div style={innerStyles} {...other}>{children}</div>
        </button>
    );
  });

  return (
      <div style={styles.base}>
        <TransportType className="icon-walk" type="0" style={styles.left}/>
        <TransportType className="icon-bicycle" type="1"/>
        <TransportType className="icon-car" type="2" style={styles.right}/>
      </div>
  );
};

const styles = {
  base: {
    display: 'flex',
  },
  button: {
    height: '42px',
    flex: '1 1',
    padding: '0',
    background: 'transparent',
    border: '1px solid transparent',
    fontSize: '22px',
    color: '#d9d9d9',
    ':focus': {
      outline: '0',
      borderRadius: '3px',
      border: '1px solid #ff6673',
    },
  },
  inner: {
    display: 'flex',
    height: '32px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    borderRight: '1px solid #e6e6e6',
  },
  right: {
    borderLeft: '1px solid #e6e6e6',
  },
  active: {
    color: '#ff6673',
  },
};

export default Radium(TransportTypeInput);