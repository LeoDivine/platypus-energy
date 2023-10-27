import ProjectInfo from "@/components/projectInfo";
import React from "react";

export default function Projects() {
  return (
    <div className="pt-[140px] px-[20px] lg:px-[100px]">
      <h1 className="text-[30px]">Our Projects</h1>
      <p>
        We have been involved in different projects in different parts of
        Nigeria
      </p>
      <div className="max-w-[1480px] mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <ProjectInfo image="/image1.jpg" />
        <ProjectInfo image="/image1.jpg" />
        <ProjectInfo image="/image1.jpg" />
        <ProjectInfo image="/image1.jpg" />
      </div>
    </div>
  );
}
