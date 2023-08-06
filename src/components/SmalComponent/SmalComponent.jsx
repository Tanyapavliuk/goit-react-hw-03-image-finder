import { Wrapper } from 'components/ImageGallery/ItemGallary.styled';
import { TextMassage } from 'components/ImageGallery/ItemGallary.styled';

export const NotFaundPhoto = () => {
  return (
    <Wrapper>
      <TextMassage>На жаль, фото не знайдено</TextMassage>
      <img
        src="https://pixabay.com/get/g0c5d7741c0d23f0f422b05afea77c9ded3abae9de31c6b798ffa7f07fc07d6efe193d1843df95411474ac5cd3c2a27c5c750b49b5f6b207e3534cc379f8616b2_640.jpg"
        alt="search again, please"
        width="400px"
      />
    </Wrapper>
  );
};
