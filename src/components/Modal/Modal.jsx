import { Component } from 'react';
import { Backdrop, ModalContent } from './Modal.styled';

class Modal extends Component {
  render() {
    return (
      <Backdrop
        onClick={e => {
          if (e.target === e.currentTarget) {
            this.props.funcClick();
          }
        }}
      >
        <ModalContent>{this.props.children}</ModalContent>
      </Backdrop>
    );
  }
}

export default Modal;
