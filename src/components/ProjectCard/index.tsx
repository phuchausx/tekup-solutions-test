import React from "react";

export interface ProjectCardProps {
  srcImage: string;
  altImage?: string;
  title: string;
  categoryId?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  srcImage,
  altImage,
  title,
}) => (
  <div className="projectCard">
    <div className="projectCard_image">
      <img src={srcImage} alt={altImage || "Image of project"} />
    </div>
    <div className="projectCard_information">
      <h6 className="projectCard_information_title">{title}</h6>
      <i className="projectCard_information_icon" />
    </div>
  </div>
);

export default ProjectCard;
