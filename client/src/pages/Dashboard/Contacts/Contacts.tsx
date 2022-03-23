import React from 'react';
import ContactsList from './ContactsList';

interface ContactsProps {
  id: string;
}

export default function Contacts({ id }: ContactsProps) {
  return (
    <div className="container-fluid h-100">
      <div className="d-flex h-100">
        <div className="d-flex w-100 m-2 justify-content-center">
          <div className="col-4">
            <ContactsList id={id} />
          </div>
          <div className="col-8">
            <div>
              Adress book
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
