import React from "react";
import { getAllCategory } from "@/actions/category.action";
import { getContentDetails } from "@/actions/content.action";
import EditContentForm from "@/components/ui/edit-content-form ";
import SectionHeading from "@/components/ui/sectionHeading";
import getCurrentUser from "@/actions/getUser.action";

interface IParams {
  params: {
    contentId: string;
  };
}
const EditContentPage = async ({params: { contentId}}:IParams) => {
    const categories = await getAllCategory();
    const content = await getContentDetails(contentId)
    const user = await getCurrentUser();
    
  return (
    <div className="mt-4 mb-8 px-4">
      <SectionHeading
        title="Edit your content"
        subTitle="To visible your best works and services to people add your best content"
      />
      <div>
        <EditContentForm categories={categories} content={content} user={user}  />
      </div>
    </div>
  );
};

export default EditContentPage;
