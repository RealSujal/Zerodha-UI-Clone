<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 27d40acf1a1dfb5d1544719ed072f8ad00abe25c
import { NavLink } from 'react-router-dom';

function SignupBtn() {
  const [isOpen, setOpen] = useState(false);
  const click = () => {
    setOpen(isOpen(false));
  };

  return (
    <button className="bg-blue-600 hover:bg-black font-medium text-lg text-white px-8 py-2 rounded">
<<<<<<< HEAD
      <NavLink to="signup">Sign up now</NavLink>
=======
      <NavLink onClick={click} to="signup">
        Sign up now
      </NavLink>
>>>>>>> 27d40acf1a1dfb5d1544719ed072f8ad00abe25c
    </button>
  );
}

export default SignupBtn;
