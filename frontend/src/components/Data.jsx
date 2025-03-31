import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../utils/Loader";
import Error from "../utils/Error";
import AddData from "./AddData";
import DataTable from "./DataTable";
import { IoIosAddCircle } from "react-icons/io";
import ConfirmationBox from "../utils/ConfirmationBox";
import useDebounce from "../hooks/useDebounce";
import { FaDatabase } from "react-icons/fa";

const URL = import.meta.env.VITE_URL;

const Data = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery] = useDebounce(searchInput, 500);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(URL);
      setUsers(response.data.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching users: " + err.message);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (editingUser) {
        await axios.put(`${URL}/${editingUser.id}`, formData);
        setUsers(
          users.map((user) =>
            user.id === editingUser.id ? { ...user, ...formData } : user
          )
        );
        toast.success("User updated successfully");
      } else {
        const response = await axios.post(URL, formData);
        setUsers([...users, { ...response.data, id: users.length + 1 }]);
        toast.success("User added successfully");
      }
      setShowForm(false);
      setEditingUser(null);
      setFormData({ first_name: "", last_name: "", email: "" });
    } catch (err) {
      setError("Error saving user: " + err.message);
      toast.error("Error saving user: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    });
    setShowForm(true);
  };

  const handleDelete = async (userId) => {
    setUserToDelete(userId);
    setShowConfirmation(true);
  };

  const confirmDelete = async () => {
    setIsLoading(true);
    try {
      await axios.delete(`${URL}/${userToDelete}`);
      setUsers(users.filter((user) => user.id !== userToDelete));

      toast.success("User deleted successfully");
      setShowConfirmation(false);
      setUserToDelete(null);
    } catch (err) {
      setError("Error deleting user: " + err.message);
      toast.error("Error deleting user: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
    setUserToDelete(null);
  };

  const closeModal = () => {
    setShowForm(false);
    setEditingUser(null);
    setFormData({ first_name: "", last_name: "", email: "" });
  };

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl text-gray-800 font-sans-serif">
          <div className="flex items-center gap-2">
            <FaDatabase />
            User Data
          </div>
        </h1>
        <button
          onClick={() => {
            setEditingUser(null);
            setFormData({ first_name: "", last_name: "", email: "" });
            setShowForm(true);
          }}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            Add New User <IoIosAddCircle size={20} />
          </div>
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by first name..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>

      {showForm && (
        <AddData
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          formData={formData}
          closeModal={closeModal}
          editingUser={editingUser}
          isLoading={isLoading}
        />
      )}

      {showConfirmation && (
        <ConfirmationBox
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
          isLoading={isLoading}
        />
      )}

      <DataTable
        users={filteredUsers}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Data;
