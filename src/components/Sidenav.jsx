import axios from "axios";
import React, { useState } from "react";
import IMAGE from "../components/img/1.jpeg";
import Addtask from "./Addtask";
import "./css/todostyle.css";

export default function Sidenav() {
    

   
    

    return (

        <div class="sidenav mt-1 ">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3  shadow-sm bg-body  ">

                        <img src={IMAGE} class="w-25 rounded-circle mt-2" alt="" />
                        <h1 class="fs-5">Jerry Luis</h1>
                        <span class="fs-6">Jerryluis@email.com</span>

                        <div class="mt-5 ">
                            <button type="btn" class="btn w-100 p-3 text-white active" style={{ backgroundColor: "#FF9F29" }}><p className="mr-2"><i class="fa-solid fa-house-chimney p-2"></i>Home</p></button>
                            <button type="btn" class=" btn w-100 p-4 text-dark  shadow"><i class="fa-solid fa-trash p-2"></i>Deleted Tasks</button>
                            
                        </div>
                        <div class="log mt-5">
                            <h4><i class="fa-solid fa-right-from-bracket" style={{ color: "#FF9F29" }}></i> Log out</h4>
                        </div>
                    </div>
                    <div className="col-lg-9">
                    <Addtask/>
                    </div>


               

                </div>

            </div>
            
        </div>

    )

}