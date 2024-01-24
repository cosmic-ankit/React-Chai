import React, { useContext, useState } from 'react';
import UserContext from '../Contexts/User/UserContext';

function SignUp() {
  const { setUser, setPassword } = useContext(UserContext);
//   Retrieving setUser and setPassword from object
  const [username, setUsername] = useState('');
  const [passCode, setPassCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username }); // Passing an object to setUser
    setPassword({ passCode }); // Passing an object to setPassword

    
  };

  return (
    <div>
      <input
        placeholder='Username'
        type='text'
        value={username} // bound to state variable
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        placeholder='Password'
        type='text'
        value={passCode} // bound to state variable
        onChange={(e) => {
          setPassCode(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SignUp;
