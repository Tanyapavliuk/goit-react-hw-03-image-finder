import PropTypes from 'prop-types';
import { WrapButton, ButtonMore } from './Button.styled';

const Button = ({ onclick }) => {
  return (
    <WrapButton>
      <ButtonMore type="button" onClick={onclick}>
        Load more
      </ButtonMore>
    </WrapButton>
  );
};

export default Button;
Button.propTypes = {
  onClick: PropTypes.func,
};
