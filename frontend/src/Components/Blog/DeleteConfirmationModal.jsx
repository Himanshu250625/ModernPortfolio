import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="text-red-500">
            <FaExclamationTriangle size={24} />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Delete Post</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Are you sure you want to delete the post "{title}"? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal; 