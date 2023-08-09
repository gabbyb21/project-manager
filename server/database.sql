CREATE DATABASE projects;

CREATE TABLE project(
  project_id SERIAL PRIMARY KEY,
  title VARCHAR,
  status VARCHAR,
  description VARCHAR(255)
);