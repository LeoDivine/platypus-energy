import ProjectInfo from "@/components/projectInfo";
import React from "react";

export default function Projects() {
  return (
    <div className="h-screen py-[90px] px-[100px]">
      <h1 className="text-[30px]">Our Projects</h1>
      <p>
        We have been involved in different projects in different parts of
        Nigeria
      </p>
      <div className="mt-[30px]">
        <ProjectInfo image="/homebg.jpeg" />
      </div>
    </div>
  );
}
