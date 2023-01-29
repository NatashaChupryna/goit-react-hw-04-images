import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { StyledApp } from './App.styled';
import { SearchBar } from './Searchbar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImage } from './API/Api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // useEffect(() => {
  //   async function fetchImg() {
  //     if (searchQuery === '') {
  //       return;
  //     }

  //     try {
  //       setIsLoading(true);
  //       const img = await getImage(searchQuery, page);
  //       if (!img) {
  //         throw new Error();
  //       }
  //       setImages( [...images, ...img]);
  //       setError(null);
  //       setTotal(img.totalHits)
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchImg();
  // }, [page, searchQuery]);

  const handleQueryChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    setImages([]);
    setPage(1);
    if (searchQuery === '') {
      toast.error('Please enter your request');
      return;
    }

    setIsLoading(true);
    const img = await getImage(searchQuery, page);
    event.target.reset();
    
    if (!img) {
      setIsLoading(false);
    }
    if (img.length) {
      setImages([...img]);
    }

    setIsLoading(false);
  };

  const onLoadButtonClick = async event => {
    setPage(prevState => prevState + 1);
    if (searchQuery === '') {
      return;
    }
    setIsLoading(true);
    const img = await getImage(searchQuery, page);
    setImages([...images, ...img]);
    setIsLoading(false);
  };

  return (
    <StyledApp>
      <SearchBar
        onSubmit={handleFormSubmit}
        onQueryHandler={handleQueryChange}
      />

      {isLoading && <Loader />}

      <ImageGallery images={images} />

      {images.length > 0 && <Button onClick={onLoadButtonClick} />}

      <Toaster position="top-right" reverseOrder={false} />
    </StyledApp>
  );
};
