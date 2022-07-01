import React, { useEffect, useState } from "react";
import IMAGE1 from '../components/img/14.jpg';
import axios from "axios";

function Addtask() {

    const [data, setdata] = useState([]);

    const addData = () => {
        axios.get("http://139.59.47.49:4004/api/tasks?limit=10&start=1&status=1")
         .then((rsp)=>{
            setdata(rsp.data);
         })
         .catch(err => console.log(err));
    }
    useEffect(()=>{
        addData()
    },[])



    return (
        <div class="">
            <div className="container mt-5">
                <h1 class="text-start fs-3 w-25">Tasks</h1>
                <button type="btn" class="btn  float-end text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: "#FF9F29" }}><i class="fa-solid fa-plus"></i> Add new task</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog ">
                        <div class="modal-content">
                            <div class="modal-header text-center">
                                <h5 class="modal-tittle" style={{ color: "#FF9F29" }}><i class="fa-solid fa-calendar-lines-pen"></i>Add new Task</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p class="text-start">Task Name</p>
                                <input type="text" placeholder="Enter  task here" class="w-100" />
                                <p class="text-start">Date</p>
                                <input type="date" class="w-100" />
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn- w-100 text-white" style={{ backgroundColor: "#FF9F29" }} onClick={() => addData()} data-bs-dismiss="modal">Add Task</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-6  " >
                        <button class=" w-100 p-2 rounded text-white" style={{ background: "#FF9F29" }}>IN-Progress</button>
                    </div>
                    <div className="col-6">

                        <button type="btn" class="btn w-100 p-2 shadow rounded text-dark">COMPLETED</button>

                    </div>
                </div>


            </div>
            <div className="container mt-5">
                <h1 class="text-start fs-4">Today's Tasks</h1>

            </div>
            {data.map((resp) => {
                return (
                    <div className="conatiner">
                        <div className="row ">
                            <div className="col p-2 shadow m-2 rounded">
                                <h5 class="fs-6  p-2 text-start">{resp.task_name}</h5>
                                <h5 class="text-start">{resp.date}</h5>
                                <button class="mt-5 float-start btn btn-success">Mark Done</button>
                                <img src={IMAGE1} class="we-251 float-end" style={{ cursor: "pointer" }} alt="" />
                                <i class="fa-solid fa-circle-trash"></i>
                            </div>
                            <div className="col p-2 shadow m-2 rounded">
                                <h5 class="fs-6 p-2 text-start ">{resp.task_name}</h5>
                                <h5 class="text-start">{resp.date}</h5>
                                <button class="mt-5 float-start btn btn-success">Mark Done</button>
                                <img src={IMAGE1} class="we-251 float-end" style={{ cursor: "pointer" }} alt="" />
                            </div>
                            <div className="col p-2 shadow m-2 rounded">
                                <h5 class="fs-6 p-2 text-start">{resp.task_name}</h5>
                                <h5 class="text-start">{resp.date}</h5>
                                <button class="mt-5 float-start btn btn-success">Mark Done</button>
                                <img src={IMAGE1} class="we-251 float-end" style={{ cursor: "pointer" }} alt="" />
                            </div>
                        </div>
                    </div>
                );
            })}


        </div>

    )

}
export default Addtask;

