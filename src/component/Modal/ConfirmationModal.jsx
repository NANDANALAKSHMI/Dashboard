import React from "react";

const ConfirmationModal = ({ isVisible, onConfirm, onCancel }) => {
  if (!isVisible) return null; 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-lg w-80">
        <h2 className="mb-4 text-lg font-bold">Confirm Logout</h2>
        <p className="mb-6 text-sm text-gray-600">Are you sure you want to log out?</p>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 text-sm text-black bg-gray-300 rounded hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700"
            onClick={onConfirm}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
