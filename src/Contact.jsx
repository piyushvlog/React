import React, { useState } from "react";


const Contact = () => {
   const[ndata, setNdata] = useState({
       fullname: "",
       phone: "",
       email:"",
   })
   const inputEvent = (event)=>{
      const {name, value} = event.target;
      setNdata((preVal) => {
          return{
              ...preVal,
              [name]:value
          }
      })
   }

   const handleChange = (e) => {
       e.preventDefault()
       alert(`My name is${ndata.fullname}. My Contact number is ${ndata.phone}. and my email is ${ndata.email} `)
   }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">FullName</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={ndata.fullname} onChange={inputEvent}  placeholder="Enter Your Name" autoComplete="off" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Contact Number</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={ndata.phone} onChange={inputEvent}   placeholder="Enter Your Number" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={ndata.email} onChange={inputEvent}  placeholder="name@example.com" autoComplete="off" />
                            </div>
                            <div className="col-12">
                            <button class="btn btn-outline-primary my-1" type="submit" onClick={handleChange}>Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Contact;