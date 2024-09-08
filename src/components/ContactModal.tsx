import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../redux/contactSlice';

interface ContactModalProps {
  contact: any;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ contact, onClose }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [status, setStatus] = useState(contact.status);

  const handleSave = () => {
    const updatedContact = { ...contact, firstName, lastName, status };
    dispatch(updateContact(updatedContact));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Edit Contact</h2>
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
        <div className="flex justify-end space-x-2">
          <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Save
          </button>
          <button onClick={onClose} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
