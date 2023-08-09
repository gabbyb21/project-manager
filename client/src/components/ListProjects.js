import React,{ Fragment, useEffect, useState } from 'react';
import EditProject from './EditProject';


export default function ListProjects() {
  const [projects, setProjects] = useState([]);

  const deleteProject = async(id) => {
    try {
      const deleteProject = await fetch(`http://localhost:4000/projects/${id}`, {
        method: 'DELETE'
      });

      setProjects(projects.filter(project => project.project_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }

  const getProjects = async() => {
    try {
      const response = await fetch('http://localhost:4000/projects')
      const jsonData = await response.json()

      setProjects(jsonData);
    } catch (err) {
      console.error(err.message)
    }
  }
  useEffect(() => {
    getProjects();
  }, []);

  

  return (
    <>
    <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.project_id}>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>{project.status}</td>
              <td>
                <EditProject project = {project} />
                </td>
              <td><button className="btn btn-danger" onClick={() => deleteProject(project.project_id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}