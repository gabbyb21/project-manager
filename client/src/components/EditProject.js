import React,{ useState } from "react";

export default function EditProject({ project }) {
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState(project.status);

  const updateProject = async e => {
    e.preventDefault();
    try{ 
      const body = { description, status };
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
     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${project.project_id}`}>
      Edit
    </button>

      <div class="modal fade" id={`id${project.project_id}`} onClick={() => setDescription(project.description)} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit {project.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setDescription(project.description)}></button>
            </div>
        
            <div class="modal-body">
              <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
              <select className="form-select" value={status} onChange={e => setStatus(e.target.value)}>
                <option>{project.status}</option>
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-primary" onClick = {e => updateProject(e)}>Save changes</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setDescription(project.description)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}