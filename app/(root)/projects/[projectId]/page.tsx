import React from "react";
import ContentDetails from "./Details";
import { getContentDetails } from "@/actions/content.action";

interface IParams {
  params: {
    projectId: string;
  };
}

const Details = async ({ params: { projectId } }: IParams) => {
    const content = await getContentDetails(projectId);
    console.log(["PARAMS"], projectId, content);

  return (
    <div className="mt-4 mb-8">
      <ContentDetails content={content} />
    </div>
  );
};

export default Details;
