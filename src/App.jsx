import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handelStartProject() {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: null,
      };
    });
  }
  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handelStartProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectsSidebar onStartAddProject={handelStartProject} />
      {content}
    </main>
  );
}

export default App;
