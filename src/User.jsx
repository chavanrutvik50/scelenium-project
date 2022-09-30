import React, { Component, useEffect, useState } from 'react';
import axios from 'axios'
import './Projects.css'

const User = () =>{

    //const projectNames = ["BESTA","ABG","BSAT","BAJAJ","BESTA","ABG","Scelenium - Project","BAJAJ","BESTA","ABG","BSAT","BAJAJ - Finance","BESTA","BSAT","BAJAJ - Electricals"]
    var [projectNames, setProjectNames] = useState([]);

    useEffect(() => {
        // get all project names
        const fetchProjects = async() => {
            const getProjectNames = await axios.get("http://localhost:9000/testing/getAllProjects");
            setProjectNames(getProjectNames.data)
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
    return(
        <>
            <div className="project-background">
            <div className="container py-2 ">
            {projectNames.map((items,index) => (
                    <div
                    className="row border rounded shadow p-3 mb-3 bg-white rounded  p-2"
                    key={index}
                    >
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <div>
                            <h4>{items}</h4>
                            {/* <p>{"Default Description"}</p> */}
                            </div>
                            <button className="btn btn-primary mx-2" onClick={listItemClicked} >
                                RUN
                            </button>
                        </div>
                    </div>
                ))}
            </div>
                
            </div>
        </>
    )
}

export default User;