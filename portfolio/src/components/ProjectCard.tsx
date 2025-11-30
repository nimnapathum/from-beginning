type Project = {
  title: string;
  description: string;
  link: string;
};

interface ProjectCardProps {
  details: Project;
}

const ProjectCard = ({ details }: ProjectCardProps) => {
  return (
    <div>
      <p>{details.title}</p>
    </div>
  );
};

export default ProjectCard;
