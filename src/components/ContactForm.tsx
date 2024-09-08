import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactSlice';

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState<'active' | 'inactive'>('inactive');

  const handleSubmit = () => {
    const newContact = { id: Date.now(), firstName, lastName, status };
    dispatch(addContact(newContact));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add Contact</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-2"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Status:</label>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            value="active"
            checked={status === 'active'}
            onChange={() => setStatus('active')}
            className="mr-2"
          />
          <label className="mr-4">Active</label>
          <input
            type="radio"
            value="inactive"
            checked={status === 'inactive'}
            onChange={() => setStatus('inactive')}
            className="mr-2"
          />
          <label>Inactive</label>
        </div>
      </div>
      <button onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Save Contact
      </button>
    </div>
  );
};

export default ContactForm;
