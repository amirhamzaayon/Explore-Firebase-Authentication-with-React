// import { useState } from "react";

// import ProfileDetails from "./ProfileDetails ";
// import UpdateProfile from "./UpdateProfile";

// const ProfilePage = () => {
//   const [isProfileOpen, setProfileOpen] = useState(false);
//   const [isUpdateOpen, setUpdateOpen] = useState(false);

//   return (
//     <div className="p-4">
//       <button
//         onClick={() => setProfileOpen(true)}
//         className="px-4 py-2 mr-2 text-white bg-green-500 rounded hover:bg-green-600"
//       >
//         Show Profile
//       </button>
//       <button
//         onClick={() => setUpdateOpen(true)}
//         className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
//       >
//         Update Profile
//       </button>
//       <ProfileDetails
//         isOpen={isProfileOpen}
//         onClose={() => setProfileOpen(false)}
//       ></ProfileDetails>

//       <UpdateProfile
//         isOpen={isUpdateOpen}
//         onClose={() => setUpdateOpen(false)}
//       ></UpdateProfile>
//     </div>
//   );
// };

// export default ProfilePage;
