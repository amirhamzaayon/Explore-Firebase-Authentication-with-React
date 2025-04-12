import { AuthContext } from "@/Providers/AuthProvider";
import { useContext } from "react";

const ProfileDetails = ({ isOpen, onClose }) => {
  const { user } = useContext(AuthContext);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-6 bg-white rounded-lg shadow-xl w-96">
        <button
          onClick={onClose}
          className="absolute w-8 h-8 text-center text-gray-500 bg-gray-100 rounded-full top-3 right-3 hover:text-gray-700 hover:bg-gray-200"
        >
          &times;
        </button>
        <h2 className="mb-4 text-2xl font-semibold text-center">
          Profile Details
        </h2>
        {user ? (
          <div className="text-center">
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />
            )}
            <p className="mb-2">
              <span className="font-bold">Name:</span>{" "}
              {user.displayName || "N/A"}
            </p>
            <p className="mb-2">
              <span className="font-bold">Email:</span> {user.email}
            </p>
          </div>
        ) : (
          <p className="text-center">No user is logged in.</p>
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
