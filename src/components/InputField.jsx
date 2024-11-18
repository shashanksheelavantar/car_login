import React from 'react';

function InputField({ label, type, value, onChange, placeholder, id }) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default InputField;