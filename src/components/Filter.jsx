import { useDispatch } from 'react-redux';
import { setFilter } from 'Redux/contactsSlice';
import { Input, Label } from './Phonebook.styled';

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <Input
        onChange={e => dispatch(setFilter(e.target.value))}
        type="text"
      ></Input>
    </Label>
  );
}
