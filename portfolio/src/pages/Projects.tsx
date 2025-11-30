import ProjectCard from "../components/ProjectCard"

const ProjectsList = [
  {
    title: "Project 1",
    description: "Description for Project 1",
    link: "https://example.com/project1"
  },
  {
    title: "Project 2",
    description: "Description for Project 2",
    link: "https://example.com/project2"
  },
];

const Projects = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-blue-500 pt-24 px-40 flex flex-col">
      <div className="w-full flex justify-center">
        <span className="text-3xl">My Project</span>
      </div>
      <div>
        {ProjectsList.map((project) => (
          <ProjectCard details={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
