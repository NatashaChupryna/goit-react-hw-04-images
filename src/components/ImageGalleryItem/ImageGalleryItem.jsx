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
