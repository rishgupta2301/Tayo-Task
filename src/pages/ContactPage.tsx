import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-8 text-center">
        Contact Page
      </h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactPage;
