import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

import Button from 'components/Button/Button';
import { List } from './ItemGallary.styled';

const KEY = '37747663-1158017a6a7069441e8b1da5b';

class ImageGallery extends Component {
  state = {
    data: [],
    total: 0,
    page: 1,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      try {
        this.setState({ page: 1, data: [], total: 0, status: 'pending' });
        const { total, hits } = await this.getFetch();
        console.log(hits);

        this.setState({ data: hits, total, status: 'resolved' }); //записуємо в стейт отримані дані
      } catch {
        this.setState({ status: 'rejected' });
      } //деструктурезую дані із запиту
    }
    if (prevState.page !== this.state.page) {
      const { hits } = await this.getFetch(); //деструктурезую дані із запиту

      this.setState({ data: [...prevState.data, ...hits] });
    }
  }

  getFetch = async () => {
    const params = new URLSearchParams({
      //об'єкт параметрів
      q: this.props.searchName,
      per_page: 12,
      image_type: 'photo',
      page: this.state.page,
      orientation: 'horizontal',
    });
    const respons = await fetch(
      `https://pixabay.com/api/?key=${KEY}&${params}`
    ); //запит на API

    if (!respons.ok) {
      //Якщо відповідь статус не ок прокидуємо помилку
      throw new Error('Sorry');
    }

    const data = await respons.json(); //розпаршуємо данні

    return data; // асинхронна функція повертає проміс
  };
  handleClickButtonMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.getFetch();
  };

  render() {
    const { data } = this.state;
    if (this.state.status === 'resolved') {
      return (
        <>
          <List>
            {data.map(el => (
              <ImageGalleryItem item={el} key={el.id} />
            ))}
          </List>
          <Button onclick={this.handleClickButtonMore} />
        </>
      );
    }
    if (this.state.status === 'rejected') {
      return <p>Error</p>;
    }
  }
}
export default ImageGallery;
