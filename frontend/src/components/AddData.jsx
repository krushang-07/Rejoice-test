import React from "react";

const AddData = ({
  handleSubmit,
  handleInputChange,
  formData,
  closeModal,
  editingUser,
  isLoading,
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      ></div>
      <div className="flex min-h-full items-center justify-center p-4 ">
        <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
          <h3 className="mb-4 text-xl font-semibold text-gray-900">
            {editingUser ? "Edit User" : "Add New User"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="Enter your first name"
                value={formData.first_name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="Enter your last name"
                value={formData.last_name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                required
              />
            </div>
            <div className="mt-5 flex justify-end gap-3">
              <button
                type="submit"
                className="rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin -ml-1 mr-3 h-5 w-5 border-2 border-white rounded-full border-t-transparent"></div>
                    {editingUser ? "Updating..." : "Adding..."}
                  </span>
                ) : editingUser ? (
                  "Update"
                ) : (
                  "Create"
                )}
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddData;
