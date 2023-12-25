import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemBtn } from './ContactList.styled';
import { deleteContact } from '../../redux/contacts/operations';
// import { selectContacts, selectFilter } from '../../redux/contacts/selectors';
import { selectContacts } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  // const stateFilter = useSelector(selectFilter);

  // const visibleContacts = contacts.filter(contact => {
  //   const hasFilteredName = contact.name
  //     .toLowerCase()
  //     .includes(stateFilter.toLowerCase());

  //   return hasFilteredName;
  // });

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      {contacts.length > 0 && (
        <List>
          {contacts.map(contact => (
            <ListItem key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <ListItemBtn onClick={() => handleDelete(contact.id)}>
                Delete
              </ListItemBtn>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
