import React from 'react';
import { useUserQuery } from '../../generated/types';

const User: React.FunctionComponent = () => {
  const { data, error, loading } = useUserQuery();
  const user = data && data.user;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {user && (
        <p>
          Id: {user.id}, Email: {user.email}
        </p>
      )}
    </>
  );
};

export default User;
