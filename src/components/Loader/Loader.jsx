import { Hearts, ColorRing } from 'react-loader-spinner';

export const Heart = () => {
  return (
    <Hearts
      height="80"
      width="80"
      color="#6b00b3"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="100"
      width="100"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#9900ff', '#8a00e6', '#7a00cc', '#6b00b3', '#5c0099']}
    />
  );
};
