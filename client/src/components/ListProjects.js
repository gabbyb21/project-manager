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
    <div className="row mt-5">
      {projects.map(project => (
        <div className="col-sm-6" key={project.project_id}>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{project.status}</h6>
              <p className="card-text">{project.description}</p>
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
              <p><EditProject project={project} /></p>
              <button className="btn btn-danger" onClick={() => deleteProject(project.project_id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

  {/* <div class="row">
  <div class="col-sm-6">
    <div className="card">
      <div className="card-body">
        {projects.map(project => (
          <>
            <h5 className="card-title" key={project.project_id}>{project.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{project.status}</h6>
            <p className="card-text">{project.description}</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
            <p><EditProject project = {project} /></p>
            <button className="btn btn-danger" onClick={() => deleteProject(project.project_id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/></svg>
              </button> */}
            </>
//     ))}
//       </div>
//     </div>
//   </div>
// </div>
    /* <table className="table mt-5 text-center">
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
      </table> */
  )
}