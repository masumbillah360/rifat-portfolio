import React from "react";
import Sidebar from "@/components/shared/sidebar/Sidebar"; 

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex gap-6">
        <div className="min-w-[272px] hidden lg:block">
          <h3 className="text-center text-green-400 dark:text-slate-400">
            Admin Dashboard
          </h3>
          <Sidebar />
        </div>
        <div className="flex-1 min-h-screen">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
