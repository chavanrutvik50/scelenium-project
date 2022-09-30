import React, { Component, useEffect, useState } from 'react';
import './Projects.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import {Modal, Button, FloatingLabel, Form, InputGroup} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Admin = () =>{

    var [projectNames, setProjectNames] = useState([]);
    var [selectedName, setSelectedName] = useState();
    var [inputProjectName, setinputProjectName] = useState("");
    var [fixedArray, setFixedArray] = useState([]);
    var [showAddMenu, setShowAddMenu] = useState(true);
    var [showAddUserForm, setShowAddUserForm] = useState(false);
    var [showAddProjectForm, setShowAddProjectForm] = useState(false);
    var [newUserName, setNewUserName] = useState("");
    var [newProjectName, setNewProjectName] = useState("");

    //Static
    var [users, setUsers] = useState(["Sampada Pokale", "Priyanka Shukla"]);
    var [sProjects, setSProjects] = useState(['besta-retrainer', 'BSAT_aribha_V1', 'counter', 'login', 'react-app', 'retrainer', 'SceleniumApp', 'select_project', 'simple-select-app', 'task_manager', 'test','besta-retrainer', 'BSAT_aribha_V1', 'counter', 'login', 'react-app', 'retrainer', 'SceleniumApp', 'select_project', 'simple-select-app', 'task_manager', 'test']);

    useEffect(() => {
        // get all project names
        const fetchProjects = async() => {
            const getProjectNames = await axios.get("http://localhost:9000/testing/getAllProjects");
            console.log(getProjectNames.data)
            // setProjectNames(getProjectNames.data)
            // setFixedArray(getProjectNames.data)

            //static
            setProjectNames(sProjects)
            setFixedArray(sProjects)
        }
        fetchProjects();
    },[])

    const listItemClicked = async(event) => {
        console.log(event.target.innerText)
        const trainer = await axios.get("http://localhost:9000/test/runBat");
        console.log(trainer);
        const showAlert = await alert(event.target.innerText);
    }

    function chunkArray(arr, size) {
        var groupedArray = [];
        for(var i = 0; i < arr.length; i += size) {
          groupedArray.push(arr.slice(i, i+size));
        }
        return groupedArray ;
    }

    const changeInputProjectName = (event) =>{
        var name = event.target.value;
        var nameArr = [];
        setinputProjectName(name);
        if(name != ""){
            projectNames.map(match => (match.includes(name)?nameArr.push(match):""))
            console.log(nameArr)
            setProjectNames(nameArr)
        } else{
            setProjectNames(fixedArray)
        }
    }

    const addNewUser = () =>{
        setUsers((preVal) => [...preVal, newUserName])
        setProjectNames((preVal) => [...preVal, newProjectName])
        setFixedArray((preVal) => [...preVal, newProjectName])
        setNewUserName("")
        setNewProjectName("")
        setShowAddUserForm(false)
    }

    const addNewProject = () => {
        setProjectNames((preVal) => [...preVal, newProjectName])
        setFixedArray((preVal) => [...preVal, newProjectName])
        setNewProjectName("")
        setShowAddProjectForm(false)
        console.log("closed")
    }

    const changeSelectValue = (event) =>{
        setSelectedName(event.target.value)
        console.log("name : "+event.target.value);
    }

    return(
        <>
            <div className='container py-2'>
                <h2 className='mt-3 mb-3'>Projects</h2>
                {showAddMenu?
                    <div className ="row mb-4">
                        <div className="input-group w-25">
                            <select className='form-select -25' onChange={changeSelectValue} value={selectedName}>
                                {users.map((userName, index) => (<option key={index} value={userName}>{userName}</option>))}
                            </select>
                            <button type="button" className="btn btn-primary" onClick={() => {setShowAddUserForm(true)}}>+</button>
                        </div>
                        <div className="input-group w-25">
                            <input type="text" className='form-control w-25 ms-4' placeholder='Project name' onChange={changeInputProjectName} value ={inputProjectName}></input>
                            <button type="button" className="btn btn-primary" onClick={() => {setShowAddProjectForm (true)}}>+</button>
                        </div>
                    </div>
                :""}

                <Modal show={showAddUserForm} onHide={() => {setShowAddUserForm(false)}} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FloatingLabel controlId="floatingInput" label="Full Name" className="mb-3">
                            <Form.Control type="text" placeholder="Rutvik Chavan" value={newUserName} onChange={(e) => {setNewUserName(e.target.value)}} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Project Name" className="mb-3">
                            <Form.Control type="text" placeholder="BESTA" value={newProjectName} onChange={(e) => {setNewProjectName(e.target.value)}} />
                        </FloatingLabel>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {setShowAddUserForm(false)}}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={addNewUser}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={showAddProjectForm} onHide={() => {setShowAddProjectForm(false)}} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FloatingLabel controlId="floatingInput" label="User Name" className="mb-3">
                            <select className='form-select 2-25' onChange={changeSelectValue} value={selectedName}>
                                {users.map((userName, index) => (<option key={index} value={userName}>{userName}</option>))}
                            </select>
                        </FloatingLabel>
                        
                            <InputGroup className="mb-3">
                                <Form.Control type="text" placeholder="Project Name" value={newProjectName} onChange={(e)=>{setNewProjectName(e.target.value)}} />
                                <DropdownButton variant="outline-secondary" title="" id="input-group-dropdown-2" align="end" >
                                    {projectNames.map((items, index) => (<Dropdown.Item key={index} onClick={(e) => {setNewProjectName(e.target.innerText)}}>{items}</Dropdown.Item>))}
                                </DropdownButton>
                            </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {setShowAddProjectForm(false)}}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={addNewProject}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
                

                {projectNames.map((items,index) => (
                    <div
                    className="row border rounded shadow p-3 mb-3 bg-white rounded  p-2"
                    key={index}
                    >
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <div>
                            <h4>{items}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div> 
        </>
    )
}

export default Admin;