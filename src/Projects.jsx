import React, { useEffect, useState } from 'react';
import './Projects.css'
import {useNavigate, useParams} from 'react-router-dom'
import User from './User'
import Admin from './Admin'

const Projects = () => {

    const navigate = useNavigate();
    const {authority} = useParams();

    return(
        <>
            {console.log(authority)}
            <nav className="navbar sticky-top navbar-dark bg-primary">
                <div className="container-fluid">
                <a className="navbar-brand mb-0 ps-3 fs-3 fw-bold">Project Management</a>
                <button className='btn btn-danger btn-sm' onClick={() => {
                    navigate("/");
                }}>Logout</button>
                </div>
            </nav>
            {authority === 'admin' ? <Admin /> : <User />}
            {/* <User /> */}
        </>
    );
}

export default Projects;
