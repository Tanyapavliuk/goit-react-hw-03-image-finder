import {
  Wrapper,
  TextMassage,
} from 'components/ImageGallery/ItemGallary.styled';
import { Bear } from './Error.styled';

export const Error = () => {
  return (
    <Wrapper>
      <TextMassage>На жаль, сталась помилка. Спробуйте ще раз.</TextMassage>
      <Bear />
    </Wrapper>
  );
};
