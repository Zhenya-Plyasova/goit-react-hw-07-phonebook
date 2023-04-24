// import { removeContact } from 'redux/contacts/slice';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const {items, isLoading, error} = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  // const filteredContacts = items.filter(contact => contact.name.toLowerCase().includes(filter));

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <p>{
        items.length > 0 &&
        JSON.stringify(items, null, 2)}</p>
      {/* <ul> {items.map(item => (
          <li key={item.id}>
            {item.name}: {item.number}
            <button
              type="button"
              onClick={() => dispatch(removeContact(item.id))}
              style={{
                marginLeft: 5,
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};