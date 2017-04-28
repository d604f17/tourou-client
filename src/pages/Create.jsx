import React, {Component} from 'react';
import Radium from 'radium';
import AddressInput from 'components/AddressInput';
import TransportTypeInput from 'components/TransportTypeInput';
import TimesInput from 'components/TimesInput';
import RangeInput from 'components/RangeInput';

@Radium
export default class CreatePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      transportType: 0,
      times: {
        start: '00:00',
        end: '00:00',
      },
      distance: 10,
      elevation: 5,
    };

    this.handleAddressChange = this.handleInputChange.bind(this, 'address');
    this.handleTransportTypeChange = this.handleInputChange.bind(this, 'transportType');
    this.handleTimesChange = this.handleInputChange.bind(this, 'times');
    this.handleDistanceChange = this.handleInputChange.bind(this, 'distance');
    this.handleElevationChange = this.handleInputChange.bind(this, 'elevation');
  }

  handleInputChange(key, value) {
    this.setState({[key]: value});
  }

  render() {
    const {address, transportType, times, distance, elevation} = this.state;

    return (
        <div style={styles.page}>
          <header style={[styles.input, styles.header]}>
            <AddressInput value={address}
                          placeholder="Address..."
                          onChange={this.handleAddressChange}/>
          </header>

          <main style={styles.main}>
            <section style={styles.input}>
              <TransportTypeInput value={transportType}
                                  onChange={this.handleTransportTypeChange}/>
            </section>

            <section>
              <div style={styles.label}>Times</div>
              <div style={styles.input}>
                <TimesInput value={times}
                            onChange={this.handleTimesChange}/>
              </div>
            </section>

            <section>
              <div style={styles.label}>Distance</div>
              <RangeInput value={distance}
                          onChange={this.handleDistanceChange}/>
            </section>

            <section>
              <div style={styles.label}>Elevation</div>
              <RangeInput value={elevation}
                          onChange={this.handleElevationChange}/>
            </section>
          </main>
        </div>
    );
  }
}

const styles = {
  page: {
    height: '100%',
    backgroundColor: '#f2f2f2',
  },
  header: {
    padding: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '0',
    margin: '0',
  },
  main: {
    padding: '16px',
  },
  input: {
    borderRadius: '3px',
    borderBottom: '1px solid #e6e6e6',
    backgroundColor: '#ffffff',
    margin: '0 0 32px 0',
  },
};
