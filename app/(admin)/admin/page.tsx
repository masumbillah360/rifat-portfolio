import React from "react";

import getCurrentUser from "@/actions/getUser.action";
import { getAllContent } from "@/actions/content.action";
import { getAllCategory } from "@/actions/category.action";
import AdminClient from "./admin-client";

const AdminDashboardPage = async () => {
  const user = await getCurrentUser();
  const contents = await getAllContent();
  const categories = await getAllCategory();

  return (
    <AdminClient categories={categories} contents={contents} user={user} />
  );
};

export default AdminDashboardPage;
