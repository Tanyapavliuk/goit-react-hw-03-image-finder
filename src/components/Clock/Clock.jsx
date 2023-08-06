import { Component } from 'react';

import { ClockWrap } from './Clock.styled';
import { Tb24Hours } from 'react-icons/tb';

class Clock extends Component {
  state = { data: new Date() };

  tick = () => {
    this.setState({ data: new Date() });
  };

  componentDidMount() {
    this.intervalClickId = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalClickId);
  }

  render() {
    return (
      <>
        <ClockWrap>
          <Tb24Hours style={{ width: '1.5em', height: '1.5em' }} />
          <p>{this.state.data.toLocaleTimeString()}</p>
        </ClockWrap>
      </>
    );
  }
}

export default Clock;
