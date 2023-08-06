import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Component } from 'react';

export class App extends Component {
  state = {
    searchName: '',
  };

  setSearchNameInState = searchName => {
    this.setState({ searchName });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.setSearchNameInState} />
        <ImageGallery searchName={this.state.searchName} />
      </>
    );
  }
}
