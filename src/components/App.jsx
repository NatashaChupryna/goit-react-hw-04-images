import {PureComponent, useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { StyledApp } from './App.styled';
import { SearchBar } from './Searchbar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImage } from './API/Api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

// export class App extends PureComponent {
//   state = {
//     searchQuery : '',
//     isLoading: false,
//     images: [],
//     error: null,
//     page: 1,
//     total: 0,
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.page !== this.state.page ||
//       prevState.searchQuery !== this.state.searchQuery
//     ) {
//       try {
//         const images = await getImage(this.state.searchQuery, this.state.page);
//         console.log('результат фетч -', images)
//    if(!images){
//     throw new Error()
//    }
//         this.setState(prevState => ({
//           images: prevState.images.concat(images),
//           isLoading: true,
//           error: null,
//           total: images.totalHits,
//         }));
//       } catch (error) {
//         this.setState({ error });
//       } finally {
//         this.setState({ isLoading: false });
//       }
//     }
//   }

//   handleFormSubmit = query => {
//     this.setState({ searchQuery: query,
//     images: [],
//   page: 1 });
//   };

//   onLoadButtonClick = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     return (
//       <StyledApp>
//         <SearchBar onSubmit={this.handleFormSubmit} isLoading={this.state.isLoading}></SearchBar>

//         {this.state.isLoading && <Loader></Loader>}

//         {this.state.images && (
//           <ImageGallery
//             images={this.state.images}
//             onModalClick={this.toggleModal}
//           ></ImageGallery>
//         )}

//         {this.state.images.length > 0 && (
//           <Button
//             onClick={this.onLoadButtonClick}
//             // isLoading={this.state.isLoading}
//           ></Button>
//         )}

// <Toaster
//   position="top-right"
//   reverseOrder={false}
// />
//       </StyledApp>
//     );
//   }
// }




// ХУКИ!
export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchImg() {
      if (searchQuery === '') {
        return;
      }

      try {
        console.log('images -', images)
        
        setIsLoading(true);
        const img = await getImage(searchQuery, page);
        console.log('результат фетч -', img)
        if (!img) {
          throw new Error();
        }
        setImages(prevState => [...prevState, ...img]);
        setError(null);
        setTotal(img.totalHits)
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImg();
  }, [page, searchQuery]);

  const handleFormSubmit = query => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
  };

  const onLoadButtonClick = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <StyledApp>
      <SearchBar onSubmit={handleFormSubmit} />

      {isLoading && <Loader />}

      {images && <ImageGallery images={images} />}

      {this.state.images.length > 0 &&  images.length < total && <Button onClick={onLoadButtonClick} />}

      <Toaster position="top-right" reverseOrder={false} />
    </StyledApp>
  );
};
