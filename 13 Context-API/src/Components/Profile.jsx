import React, { useContext } from 'react';
import UserContext from '../Contexts/User/UserContext';

function Profile() {
  const { user, password } = useContext(UserContext); // Taking the user and password from object in context

//   They have the value of 
//  user = {username}
// password = {passCode}

  if (!user.username || !password.passCode) return <div>Please Login</div>;

  return (
    <div>
      User = {user.username} and Password = {password.passCode}
    </div>
  );
}

export default Profile;
