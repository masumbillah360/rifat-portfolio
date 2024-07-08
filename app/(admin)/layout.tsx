import React from "react";
import Sidebar from "@/components/shared/sidebar/Sidebar";
import getCurrentUser from "@/actions/getUser.action";


const AdminLayout = async({ children }: { children: React.ReactNode }) => {
  const user = await getCurrentUser();
  console.log(user)
  return (
    <div className="flex gap-6">
      <div className="min-w-[272px] hidden lg:block">
        <Sidebar user={user} />
      </div>
      <div className="flex-1 min-h-screen">{children}</div>
    </div>
  );
};

export default AdminLayout;
