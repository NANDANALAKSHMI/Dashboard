import React, { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import iconMap from "./SidebarIconsMap";
import dummyMenuItems from "./SidebarData";

const Sidebar = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAccordionChange = useCallback((panel) => {
    setExpandedAccordion((prev) => (prev === panel ? null : panel));
  }, []);

  const handleItemClick = (data) => {
    if (data.name === "logout") {
      navigate("/login");
    } else {
      navigate(data.route);
    }
  };

  const renderMenuItem = useCallback(
    (item, index) => {
      const isSelected = location.pathname === item.route;
      const isHovered = hoveredItem === index;

      const itemClasses = `flex items-center p-3 my-2 rounded-lg cursor-pointer transition-colors justify-start ${
        isSelected ? "bg-[#FFEDFB] text-[#551932]" : "text-[#363535] hover:bg-[#FFEDFB] hover:text-[#551932]"
      }`;

      const IconComponent = iconMap[item.icon];

      if (item.subItems) {
        return (
          <div key={index} className="mb-2">
            <div
              className={itemClasses}
              onClick={() => handleAccordionChange(`panel${index}`)}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {IconComponent && <IconComponent className="w-6 h-6 mr-3" />}
              <span className="flex-grow">{item.displayName}</span>
              <span className="text-xs">
                {expandedAccordion === `panel${index}` ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </span>
            </div>
            <div className={`overflow-hidden transition-all duration-500 ${expandedAccordion === `panel${index}` ? "max-h-80" : "max-h-0"}`}>
              <div className="pl-8">
                {item.subItems.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className={`p-2 my-1 rounded-md cursor-pointer ${
                      location.pathname === subItem.route ? "text-[#551932]" : "text-[#737791] hover:text-[#363535]"
                    }`}
                    onClick={() => handleItemClick(subItem)}
                  >
                    {subItem.displayName}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }

      return (
        <div key={index} className={itemClasses} onMouseEnter={() => setHoveredItem(index)} onMouseLeave={() => setHoveredItem(null)} onClick={() => handleItemClick(item)}>
          {IconComponent && <IconComponent className="w-6 h-6 mr-3" />}
          <span>{item.displayName}</span>
        </div>
      );
    },
    [expandedAccordion, hoveredItem, location.pathname, navigate]
  );

  return (
    <div className="h-screen bg-white w-[270px] transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-center h-[80px]" onClick={() => navigate("/")}>
        {/* <img src={logo} alt="Logo" className="w-[50%] transition-transform duration-300 ease-in-out" /> */}
        <h1>Dashboard</h1>
      </div>
      <div className="h-[calc(100vh-80px)] overflow-y-auto w-[270px] shadow-lg" style={{ scrollbarWidth: "thin", scrollbarColor: "#ccc #FFEDFB" }}>
        {dummyMenuItems.map(renderMenuItem)}
      </div>
    </div>
  );
};

export default Sidebar;
