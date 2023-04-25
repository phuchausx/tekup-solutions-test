import React from "react";
import ProjectCard, { ProjectCardProps } from "components/ProjectCard";

interface ProjectListProps {
  dataList?: ProjectCardProps[];
}

const ProjectList: React.FC<ProjectListProps> = ({ dataList }) => {
  if (!dataList)
    return (
      <p style={{ textAlign: "center", fontSize: "20px" }}>Không có dữ liệu</p>
    );

  return (
    <div className="projectList">
      {dataList.map((item, index) => (
        <div
          className="projectList_item"
          key={`projectList-${index.toString()}`}
        >
          <ProjectCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
