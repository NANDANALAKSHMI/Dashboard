import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-full h-[80px] bg-white border-b shadow-sm">
      <nav className="flex items-center justify-between px-6 py-4">

        <div className="flex items-center gap-5">
          {location?.pathname !== "/" && (
            <ArrowBackIcon
              className="cursor-pointer"
              onClick={() => navigate(-1)}
            />
          )}
          <h1 className="text-xl font-normal text-gray-700">User List</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 transition-colors rounded-full cursor-pointer hover:text-gray-900 hover:bg-gray-100" title="Switch Language">
            <LanguageIcon fontSize="medium" />
          </button>

          <button className="p-2 text-gray-600 transition-colors rounded-full hover:text-gray-900 hover:bg-gray-100" title="Notifications">
            <NotificationsIcon fontSize="medium" />
          </button>

          <div className="cursor-pointer" title="My Account">
            <AccountCircleIcon fontSize="large" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
