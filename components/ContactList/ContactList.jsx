import { removeContact } from 'redux/contacts/slice';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));

  return (
    <div>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => dispatch(removeContact(contact.id))}
              style={{
                marginLeft: 5,
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};