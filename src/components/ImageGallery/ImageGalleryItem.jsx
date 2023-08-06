import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ImageGallary.module.css';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onClickEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onClickEsc);
  }

  handleClickOnImg = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  onClickEsc = e => {
    if (e.code === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { largeImageURL, webformatURL, tags } = this.props.item;
    return (
      <>
        <img
          className={css.imageGalleryItemStyle}
          src={largeImageURL}
          width="200"
          height="300"
          alt={tags}
          onClick={this.handleClickOnImg}
        />
        {this.state.isModalOpen && (
          <Modal funcClick={this.handleClickOnImg}>
            <img src={webformatURL} width="100%" height="100%" alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};
