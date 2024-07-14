import { getAllContent } from "@/actions/content.action";
import ProjectClient from "./ProjectClient";

interface HomeProps {
  searchParams: {
    category: string | undefined;
    page: string;
    sort: string;
    search: string | undefined;
  };
}

const ProjectPage = async ({ searchParams }: HomeProps) => {
  console.log(["Search Params"],searchParams)
  const contents = await getAllContent();
  console.log(contents)
  return (
    <div>
      <ProjectClient contents = {contents} />
    </div>
  );
};

export default ProjectPage;
