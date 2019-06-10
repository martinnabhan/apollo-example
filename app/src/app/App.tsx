import React from 'react';
import 'normalize.css';
import { useUsersQuery } from '../../generated/types';

const App: React.FunctionComponent = () => {
  const { data, error, loading } = useUsersQuery();
  const users = data && data.users;

  if (loading) {
    return <div>Loading...</div>;
  };

  if (error) {
    return <div>Error! {error.message}</div>;
  };

  return (
    <div>
      {users && users.map(user => <p>Id: {user.id}, Email: {user.email}</p>)}
    </div>
  );
};

export default App;
