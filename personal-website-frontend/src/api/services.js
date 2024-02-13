import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; 

export const fetchProfiles = () => {
  return axios.get(`${API_URL}/profiles/`);
};

export const fetchProjects = () => {
  return axios.get(`${API_URL}/projects/`);
};

export const fetchExperiences = () => {
  return axios.get(`${API_URL}/experiences/`);
};

export const fetchEducation = () => {
  return axios.get(`${API_URL}/education/`);
};

export const fetchSkills = () => {
  return axios.get(`${API_URL}/skills/`);
};
