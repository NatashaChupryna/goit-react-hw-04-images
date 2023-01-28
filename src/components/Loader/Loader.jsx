import { Oval } from 'react-loader-spinner';
import { LoaderDiv } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderDiv>
      <Oval
        height={80}
        width={80}
        color="#547054"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#8ea98e"
        strokeWidth={5}
        strokeWidthSecondary={5}

      />
    </LoaderDiv>
  );
};
