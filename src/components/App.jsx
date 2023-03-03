import { ContactForm, Filter, ContactList } from './index';
import { Container, TitleH1, TitleH2 } from './Phonebook.styled';

export default function App() {
  return (
    <Container>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm />
      <TitleH2>Contacts</TitleH2>
      <Filter />
      <ContactList />
    </Container>
  );
}
