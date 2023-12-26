import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';
import { Filter } from '../components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <ContactForm />
      <h2>Contacts</h2>
      <div>{isLoading && !error && <b>Request in progress...</b>}</div>
      <Filter />
      <ContactList />
    </>
  );
}
