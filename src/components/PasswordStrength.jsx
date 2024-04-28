import React, { useEffect, useState } from "react";

const PasswordStrength = ({ password }) => {
  const [strength, setStrength] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    const strengthLevel = checkPasswordStrength(password);
    setStrength(strengthLevel);

    switch (strengthLevel) {
      case 'Weak':
        setBackgroundColor('red');
        break;
      case 'Medium':
        setBackgroundColor('orange');
        break;
      case 'Strong':
        setBackgroundColor('green');
        break;
      default:
        setBackgroundColor('transparent');
    }
  }, [password]);

  function checkPasswordStrength(password) {
    let strengthCounter = 0;

    if (/[A-Z]/.test(password)) strengthCounter++;
    if (/[a-z]/.test(password)) strengthCounter++;
    if (/\d/.test(password)) strengthCounter++;
    if (/[$#&_]/.test(password)) strengthCounter++;
    if (password.length >= 8) strengthCounter++;

    if (strengthCounter <= 2) {
      return 'Weak';
    } else if (strengthCounter <= 4) {
      return 'Medium';
    } else {
      return 'Strong';
    }
  }

  return (
    <div
      className="px-5 py-5 rounded-b-2xl"
      style={{ backgroundColor }}
    >
      <h4 className="text-white text-center">
        {strength} Password
      </h4>
    </div>
  );
};

export default PasswordStrength;
