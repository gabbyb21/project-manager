import React,{ useState } from "react";

export default function EditProject({ project }) {
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState(project.status);

  const updateProject = async() => {
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
     <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${project.project_id}`}>
      Edit
    </button>

      <div className="modal fade" id={`id${project.project_id}`} onClick={() => setDescription(project.description)} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit {project.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setDescription(project.description)}></button>
            </div>
        
            <div className="modal-body">
              <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
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