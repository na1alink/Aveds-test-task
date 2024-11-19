import React from "react";
// import styles from "./MainSection.module.css";

interface MainSectionProps {
  children: React.ReactNode;
}

const MainSection: React.FC<MainSectionProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default MainSection;
