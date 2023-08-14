import React, { useState } from "react";

export default function InputProject() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('');
  const [github_link, setGithub_link] = useState('');
  const [app_link, setApp_link] = useState('');

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { title, description, status, github_link, app_link };
      const response = await fetch('http://localhost:4000/projects', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
  <>
    <h1 className="text-center mt-5">Projects</h1>
    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
      <input type="text" className="form-control" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" className="form-control" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="text" className="form-control" placeholder="GitHub" value={github_link} onChange={e => setGithub_link(e.target.value)} />
      <input type="text" className="form-control" placeholder="App" value={app_link} onChange={e => setApp_link(e.target.value)} />
      <select className="form-select" value={status} onChange={e => setStatus(e.target.value)}>
        <option>Status</option>
        <option>Not Started</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button className="btn btn-success">Add</button>
    </form>
  </>
    
  )
}

