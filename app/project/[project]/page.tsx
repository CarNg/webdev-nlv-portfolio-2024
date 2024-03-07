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
      <h1 className="h1 text-4xl mb-8 font-bold">{project.title}</h1>
      <div className="flex flex-col gap-y-12">
        <Swiper images={content.imagesCollection.items} />
        <div
          className={`"items-start self-center border-black dark:border-light-teal border-2 border-solid rounded-xl py-7 px-7 md:px-10 flex w-fit gap-y-3 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 ${
            project.tech ? "flex-col md:gap-x-14" : "md:gap-x-8 flex-row"
          }"`}
        >
          <div className="flex gap-x-8">
            <div>
              <b className="text-lg">Year</b>
              <br />
              {projectDate.getFullYear()}
            </div>
            <div>
              <b className="text-lg">Role</b>
              <br />
              {project.role}
            </div>
          </div>
          <div className="flex gap-x-8">
            {project.company && (
              <div>
                <b className="text-lg">Company</b>
                <br />
                {project.company}
              </div>
            )}
            <div>
              <b className="text-lg">
                {project.tech ? "Technology" : "Game details"}
              </b>
              <br />
              <ProjectBullets
                tech={project.tech}
                players={project.players}
                playTime={project.playTime}
              />
            </div>
          </div>
        </div>
        <Content content={content} />
        <div className="self-center flex flex-row gap-x-11">
          {content.links !== null &&
            content.links.map((l, i) => {
              return (
                <ArrowedLink key={l} title={content.linkTexts[i]} link={l} />
              );
            })}
        </div>
      </div>
    </div>
  );
}
