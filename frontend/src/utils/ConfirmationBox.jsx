import React from "react";

const ConfirmationBox = ({ onConfirm, onCancel, isLoading }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative rounded-lg bg-white px-4 pb-4 pt-5 text-left ">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center">
              <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
              <p className="mb-4">Are you sure you want to delete this item?</p>
              <div className="flex justify-end gap-2">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={onConfirm}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin -ml-1 mr-3 h-5 w-5 border-2 border-white rounded-full border-t-transparent"></div>
                      Deleting...
                    </span>
                  ) : (
                    "Delete"
                  )}
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
                  onClick={onCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationBox;
