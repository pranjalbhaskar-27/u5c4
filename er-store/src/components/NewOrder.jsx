import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const NewOrder = () => {
  let name=localStorage.getItem("name")
  // Get data of only this user. store it in redux
  // GET /orders?owner_name=john will give you all order of user john
  //  on submit click create a new order, new order has status `Not Accepted`
  const [datas,setdata]=useState([])
  useEffect(() => {
    getdata();
     
  
    
  }, [])
  async function getdata() {
   await axios("http://localhost:8080/orders").then(({data})=>{
      setdata(data)
      console.log(data)
    })
  }
  const [form,setform]=useState({
    problem:"",
    owner_name:name,
    brand:"",
    cost:"",
    status:"Not Accepted"



  })
  
  const handlechange=(e)=>{
    const {name,value}=e.target
    setform({
      ...form,
      [name]:value
    })
  }
  const handle=(e)=>{
    e.preventDefault();
     fetch("http://localhost:8080/orders",{
       method:"POST",
       headers:{
"content-type":"application/json"
       },
       body:JSON.stringify(form)
     });
    

  }
  return (
    <div>
      <div className="form">
        <input
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
          onChange={handlechange}
        />
        {/* This input is readonly, it's coming from redux */}
        <input
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder="yourname"
          value={name}
          readOnly
        />
        <input
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
          onChange={handlechange}
        />
        {/* Create new problem, show it in below form immediately */}
        <button className="submit" onClick={handle}>submit</button>
      </div>

      <div className="pastOrders">
        {/* this button filters the data below. */}
        {/* it's just a toggle of redux state something like `showUnfinished`  */}
        <button className="filter">
          {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
          All
        </button>

        {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
        {datas.map((e,i)=>{
          return (<div className="past-orders" key={i}>
          <span className="id">{e.id}</span>. <span className="problem">{e.problem}</span>{" "}
          <span className="cost">
            {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
            {e.cost}
          </span>
          <p className="status">Status:{e.ststus} </p>
          <hr />
        </div>)

        })}
        
      </div>
    </div>
  );
};
