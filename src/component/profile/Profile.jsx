import React, { useEffect, useState } from "react";
import { AuthService } from "../login/AuthServices";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await AuthService.fetchUser();
      setProfileData(response.data);
      console.log(response.data, "profile");

    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(profileData, "po");


  return (
    <div className="w-full h-full p-5 mx-auto text-center bg-white border rounded-lg shadow-md">
      <img
        src={profileData?.data?.avatar}
        alt={`${profileData?.data?.first_name} ${profileData?.data?.last_name}`}
        className="w-24 h-24 mx-auto border-4 border-gray-300 rounded-full"
      />
      <h2 className="mt-3 text-xl font-semibold">{`${profileData?.data?.first_name} ${profileData?.data?.last_name}`}</h2>
      <p className="text-gray-500">{profileData?.data?.email}</p>

      {profileData?.support && (
        <div className="p-3 mt-4 bg-gray-100 rounded-md">
          <p className="text-sm text-gray-600">{profileData?.support?.text}</p>
          <a
            href={profileData?.support?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline"
          >
            Learn More
          </a>
        </div>
      )}
    </div>
  );
};

export default Profile;
