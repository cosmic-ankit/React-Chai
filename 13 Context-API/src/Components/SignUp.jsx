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
        style={{ border: '1px solid #ccc', padding: '5px' }}
        value={username} // bound to state variable
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        placeholder='Password'
        type='text'
        style={{ border: '1px solid #ccc', padding: '5px' }}
        value={passCode} // bound to state variable
        onChange={(e) => {
          setPassCode(e.target.value);
        }}
      />
      <button onClick={handleSubmit} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>Submit</button>
    </div>
  );
}

export default SignUp;
