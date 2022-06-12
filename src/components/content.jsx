import React, { useState,useEffect } from "react";


function Content(){
    const [data,getData]=useState([]);
    const url="http://refertest.pythonanywhere.com/job/openings";

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((response)=>{
            getData(response.data);
        })
    }

    return(
        <div>
            <h1><center>Job Opening</center></h1>
            <table className="table table-striped">
            <tbody>
                    <tr>
                        <th>Designation</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Min-experience</th>
                        <th>Skills</th>
                    </tr>
                    {data.map((item,i)=>(
                        <tr key={i}>
                            <td>{item.designation}</td>
                            <td>{item.company}</td>
                            <td>{item.location}</td>
                            <td>{(!item.min_experience)?"fresher":item.min_experience}</td>
                            <td>{item.skills.map((skill,j)=>(
                                <li key={j}>{skill},</li>

                            ))}</td>

                        </tr>

                    ))}
                </tbody>

            </table>
                
        </div>
    )
}
export default Content;

