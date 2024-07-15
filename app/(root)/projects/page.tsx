import { getAllContentWithPagination } from "@/actions/content.action";
import ProjectClient from "./ProjectClient";
import { getAllCategory } from "@/actions/category.action";

interface HomeProps {
  searchParams: {
    category: string | undefined;
    page: string;
    sort: string;
    search: string | undefined;
  };
}

const ProjectPage = async ({ searchParams }: HomeProps) => {
  const {data, currentPage, limit, total, totalPage} = await getAllContentWithPagination(searchParams);
  console.log(["Search Params"], searchParams, {data, currentPage, limit, total, totalPage});
  const categories = await getAllCategory();
  return (
    <div>
      <ProjectClient
        contents={data}
        categories={categories}
        totalPage={totalPage}
        currentPage={currentPage}
        total={total}
      />
    </div>
  );
};

export default ProjectPage;
