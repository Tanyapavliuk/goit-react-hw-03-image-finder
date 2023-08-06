import PropTypes from 'prop-types';
import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem'; //окремий елемент списку
import { Loader, Heart } from 'components/Loader/Loader'; //лоадери
import { NotFaundPhoto } from 'components/SmalComponent/SmalComponent'; //якщо пустий масив
import Button from 'components/Button/Button';
import { Error } from 'components/SmalComponent/Error';

import { List, LoaderWrapper, TextMassage } from './ItemGallary.styled';

const KEY = '37747663-1158017a6a7069441e8b1da5b';

class ImageGallery extends Component {
  state = {
    data: [],
    total: 0,
    page: 1,
    status: 'idle',
    error: null,
  };

  //----------оновлення компоненту при зміні стейту чи пропсів-----------
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      try {
        this.setState({ page: 1, data: [], total: 0, status: 'pending' });
        const { total, hits } = await this.getFetch();

        this.setState({ data: hits, total, status: 'resolved' }); //записуємо в стейт отримані дані
      } catch {
        this.setState({ status: 'rejected' });
      } //деструктурезую дані із запиту
    }

    if (prevState.page !== this.state.page) {
      const { hits } = await this.getFetch(); //деструктурезую дані із запиту
      if (prevProps.searchName !== this.props.searchName) {
        this.setState({ data: hits });
        return;
      }
      this.setState({ data: [...prevState.data, ...hits] });
    }
  }

  //-----------------функція запиту ---------------
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
      throw new Error('На жаль, сталась помилка. Спробуйте ще раз.');
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
    const { data, total, status } = this.state;

    //рендер або ж елементів списку якщо є елементи у відповіді, якщо немає повідомлення, що фото немає
    const Items = data.length ? (
      <>
        <List>
          {data.map(el => (
            <ImageGalleryItem item={el} key={el.id} />
          ))}
        </List>
        {data.length < 12 || total === data.length ? null : (
          <Button onclick={this.handleClickButtonMore} /> //рендер кнопки за умовою
        )}
      </>
    ) : (
      <NotFaundPhoto />
    );

    // рендер залежить від status
    //перше завантаження
    if (status === 'idle') {
      return (
        <LoaderWrapper>
          <TextMassage>Знайди потрібне тобі фото</TextMassage>
          <Heart />
        </LoaderWrapper>
      );
    }

    //йде запит за данними
    if (status === 'pending') {
      return (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      );
    }

    //відповідь успішна
    if (status === 'resolved') {
      return Items;
    }

    //відповідь провальна
    if (status === 'rejected') {
      return <Error />;
    }
  }
}
export default ImageGallery;

ImageGallery.propTypes = {
  searchName: PropTypes.string.isRequired,
};
