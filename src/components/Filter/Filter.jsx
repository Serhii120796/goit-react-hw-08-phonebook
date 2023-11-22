import { useDispatch } from 'react-redux';
import { MainTitle, FilterTitle, StyleInput } from './Filter.styled';
import { findContact } from 'redux/Contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <MainTitle>Contacts</MainTitle>
      <label>
        <FilterTitle>Find contacts by name</FilterTitle>
        <StyleInput
          type="text"
          name="filter"
          placeholder="Search"
          onChange={evt => dispatch(findContact(evt.target.value))}
        />
      </label>
    </>
  );
};
