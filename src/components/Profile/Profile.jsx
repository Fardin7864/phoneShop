import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
    const {user}  = useContext(AuthContext);

    const {photoURL, email, displayName} = user ? user : {};
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3 mx-auto">
      <div className="text-center">
        <img
          src={photoURL} // Replace with your profile image URL
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-bold text-gray-800">{displayName}</h2>
        <p className="text-sm text-gray-600">Web Developer</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">About Me</h3>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur lacus eu
          nisi posuere, in venenatis neque fermentum.
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
        <ul className="mt-2 text-gray-600">
          <li>Email: {email}</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
