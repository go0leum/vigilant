import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProjectContext = createContext();

const ProjectProvider = ({ children, userID }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchUserProjects = async (userID) => {
      try {
        const response = await axios.get(`http://localhost:8000/api/user/projects?userID=${userID}`);
        setProjects(response.data.projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    if (userID) {
      fetchUserProjects(userID);
    }
  }, [userID]);

  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
