import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchBar.styled';


export const SearchBar = ({onSubmit, onQueryHandler}) =>{
return (
  <Searchbar>
    <SearchForm onSubmit={onSubmit}>
      <SearchFormButton type="submit">
        &#128269;
      </SearchFormButton>

      <SearchFormInput
        type="text"
        autocomplete="off"
        placeholder="Search images and photos"
        onChange={onQueryHandler}
      />
    </SearchForm>
  </Searchbar>
);
}