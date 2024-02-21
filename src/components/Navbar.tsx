// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>Dashboard</li>
        <li>List Cars</li>
        {/* Tambahkan lebih banyak menu jika diperlukan */}
      </ul>
    </nav>
  );
};

export default Navbar;
