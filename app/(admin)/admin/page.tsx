import React from "react";

const AdminDashboardPage = () => {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="min-h-screen">
          Admin Dashboard Page {i + 1} - Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed eleifend, nunc eu condimentum venenatis, mauris
          ligula consequat velit, vel fringilla nisi felis vel nunc.
        </div>
      ))}
    </div>
  );
};

export default AdminDashboardPage;
