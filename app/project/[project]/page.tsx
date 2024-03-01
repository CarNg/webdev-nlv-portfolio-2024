import ArrowedLink from "@/app/_components/ArrrowedLink";
import Content from "@/app/_components/Content";
import Swiper from "@/app/_components/Swiper";
import ProjectBullets from "@/app/projects/[type]/ProjectBullets";
import { getProjectPageData } from "@/lib/api/fetchProjectPage";

export default async function Project({
  params,
}: {
  params: { project: string };
}) {
  const project = await getProjectPageData(false, params.project);
  const { content, year } = project;
  const projectDate = new Date(year);

  return (
    <div className="flex flex-col w-full max-w-4xl m-x-auto fade-in-anin z-10 m-auto">
      <h1 className="h1 text-3xl mb-4">{project.title}</h1>
      <div className="flex flex-col gap-y-12">
        <Swiper images={content.imagesCollection.items} />
        <div className="items-start self-center border-black dark:border-light-teal border-2 border-solid rounded-xl py-7 px-7 md:px-10 flex flex-col md:flex-row w-fit gap-y-3 md:gap-x-14 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <div className="flex flex-col gap-y-5">
            <div>
              <b>Role</b>
              <br />
              {project.role}
            </div>
            <div>
              <b>{project.tech ? "Technology" : "Game details"}</b>
              <br />
              <ProjectBullets
                tech={project.tech}
                players={project.players}
                playTime={project.playTime}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            {project.company && (
              <div>
                <b>Company</b>
                <br />
                {project.company}
              </div>
            )}
            <div>
              <b>Year</b>
              <br />
              {projectDate.getFullYear()}
            </div>
          </div>
        </div>
        <Content content={content} />
        <div className="self-center">
          {content.links.map((l, i) => {
            return (
              <ArrowedLink key={l} title={content.linkTexts[i]} link={l} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
