import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'Redux/Selectors';
import { addContact } from 'Redux/contactsSlice';
import { Form, Label, Input, Button } from './Phonebook.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);

  const twinCheck = (newContactName, contact) => {
    let isTwin = contactsList.find(prevContact => {
      if (prevContact.name === newContactName) {
        toast.warn('This contact already exists', {
          position: toast.POSITION.TOP_CENTER,
        });
        return true;
      }
      return false;
    });
    if (!isTwin) {
      dispatch(addContact(contact));
    }
    isTwin = false;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    const contact = {
      name: name,
      number: phone,
    };
    twinCheck(name, contact);

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ToastContainer />
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Phone
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
