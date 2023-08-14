import React,{ useState } from "react";

export default function EditProject({ project }) {
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState(project.status);
  const [github_link, setGithub_link] = useState(project.github_link);
  const [app_link, setApp_link] = useState(project.app_link);

  const updateProject = async() => {
    try{ 
      const body = { description, status, github_link, app_link };
      const response = await fetch(`http://localhost:4000/projects/${project.project_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })

      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
     <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${project.project_id}`}>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
      </svg>
    </button>

      <div className="modal fade" id={`id${project.project_id}`} onClick={() => setDescription(project.description)} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit {project.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setDescription(project.description)} ></button>
            </div>
        
            <div className="modal-body">
              <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
              <input type="text" className="form-control" placeholder="GitHub" value={github_link} onChange={e => setGithub_link(e.target.value)} />
              <input type="text" className="form-control" placeholder="App Link" value={app_link} onChange={e => setApp_link(e.target.value)} />
              <select className="form-select" onChange={e => setStatus(e.target.value)}>
                <option>{project.status}</option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick = {updateProject}>Save changes</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setDescription(project.description)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}