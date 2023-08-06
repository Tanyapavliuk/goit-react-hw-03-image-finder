import PropTypes from 'prop-types';
import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import Clock from 'components/Clock/Clock';

import { Header, Form, Button, Input } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    search: '',
  };
  handleChangeInput = e => {
    this.setState({ search: e.target.value });
  };
  handleSubmitInput = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  };
  render() {
    return (
      <Header>
        <Clock />
        <Form onSubmit={this.handleSubmitInput}>
          <Input
            type="text"
            placeholder="Search images and photos"
            value={this.state.search}
            onChange={this.handleChangeInput}
          />

          <Button type="submit">
            <span style={{ fontSize: '12px', color: '#260033' }}>
              <BsSearch style={{ fill: '#260033', marginRight: '5px' }} />
              Search
            </span>
          </Button>
        </Form>
      </Header>
    );
  }
}
export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
