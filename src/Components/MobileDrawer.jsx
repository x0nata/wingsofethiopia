import React from "react";

const MobileDrawer = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <>
      <div
        className="fixed inset-0 z-[9998] bg-black/40"
        onClick={onClose}
      ></div>
      <div
        className="fixed top-0 right-0 h-full w-1/2 z-[9999] bg-Black flex flex-col mobile-drawer"
      >
        {children}
      </div>
    </>
  );
};

export default MobileDrawer; 