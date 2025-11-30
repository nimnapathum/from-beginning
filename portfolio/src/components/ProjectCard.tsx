import React from 'react'

export interface ProjectCardProps {
  details? : any;
}

const ProjectCard = ({
    details
}) => {
  return (
    <div>
      <p>{details.title}</p>
    </div>
  )
}

export default ProjectCard
