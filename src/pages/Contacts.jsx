import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { fetchContacts } from '../redux/Contacts/operations';
import { selectIsLoading, selectError } from 'redux/Contacts/selectors';
import { selectVisibleContacts } from 'redux/Contacts/selectors';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import { Button } from 'components/ContactItem/ContactItem.styled';

export default function Contacts() {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
      </HelmetProvider>
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter />
      {contacts.length > 0 ? (
        <ContactsList />
      ) : (
        <Link to="/" style={{ textAlign: 'center' }}>
          <Button>Please add contacts</Button>
        </Link>
      )}
      {isLoading && <Loader />}
      {error && <Error message={error} />}
    </>
  );
}
