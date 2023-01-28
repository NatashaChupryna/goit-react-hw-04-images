import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <List>
   
        <ImageGalleryItem images={images}/>
  
    </List>
  );
};




// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
// import { List } from './ImageGallery.styled';

// export const ImageGallery = ({ images }) => {
//   return (
//     <List>
//       {images.map(item => (
//         <ImageGalleryItem
//           key={item.id}
//           webformatURL={item.webformatURL}
//           largeImageURL={item.largeImageURL}
//           tags={item.tags}
//         />
//       ))}
//     </List>
//   );
// };