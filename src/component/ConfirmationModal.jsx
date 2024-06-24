// components/ConfirmationModal.jsx
import React from 'react';
import { Dialog } from '@headlessui/react';

const ConfirmationModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <Dialog.Title className="text-xl font-bold mb-4">Confirmed!</Dialog.Title>
          <p className="text-gray-600">Your action has been confirmed.</p>

          <div className="flex justify-end mt-4">
            <button onClick={onClose} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md">
              Close
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmationModal;
