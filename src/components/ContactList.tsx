import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteContact } from '../redux/contactSlice';
import ContactModal from './ContactModal'; // Import the modal component

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [selectedContact, setSelectedContact] = useState<any>(null); // State for selected contact
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State for modal visibility

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (contact: any) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedContact(null);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Contact List</h2>
      <ul className="list-disc pl-5">
        {contacts.map((contact) => (
          <li key={contact.id} className="flex items-center justify-between mb-2 p-3 border border-gray-200 rounded-md">
            <div>
              <p className="font-semibold">{contact.firstName} {contact.lastName}</p>
              <p className="text-gray-600">Status: {contact.status}</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => handleEdit(contact)} className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600">
                Edit
              </button>
              <button onClick={() => handleDelete(contact.id)} className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isModalOpen && selectedContact && (
        <ContactModal
          contact={selectedContact}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ContactList;
