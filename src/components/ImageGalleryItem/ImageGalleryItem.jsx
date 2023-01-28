import { useState } from 'react';
import { ListItem, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(prevState => !prevState);
  };

  return (
    <ListItem>
      <Image src={webformatURL} alt={tags} onClick={toggleModal} />

      {openModal && (
        <Modal srcImg={largeImageURL} tags={tags} onClose={toggleModal} />
      )}
    </ListItem>
  );
};

// import { useState } from 'react';
// import { ListItem, Image } from './ImageGalleryItem.styled';
// import { Modal } from 'components/Modal/Modal';

// export const ImageGalleryItem = ({ images }) => {
//   const [openModal, setOpenModal] = useState(false);
// console.log('item images', images)
//   const toggleModal = () => {
//     setOpenModal(prevState => !prevState);
//   };

//   // eslint-disable-next-line no-lone-blocks
//   {
//     images.map(({ webformatURL, largeImageURL, id }) => {

//       return (
//         <ListItem key={id}>
//           <img src={webformatURL} alt="" />
//           {/* <Image src={webformatURL} alt="" width={350} height={350} onClick={toggleModal}/> */}

//           {/* {openModal && (
//         <Modal srcImg={largeImageURL}  onClose={toggleModal} />
//       )} */}
//         </ListItem>
//       );
//     });
//   }

// };
