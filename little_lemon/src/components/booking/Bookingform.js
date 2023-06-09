import React from 'react'
import {useState} from "react";
import {validateEmail} from "./utils";


const Bookingform = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [guest, setGuest] = useState("2");
    const [role, setRole] = useState("role");

    const getIsFormValid = () => {
      return (
        firstName &&
        validateEmail(email) &&
        phone &&
        role !== "role"
      );
    };

    const clearForm = () => {
       setFirstName("");
       setLastName("");
       setEmail("");
       setPhone("");
       setRole("role");
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert("Table Reserved");
       clearForm();
     };



  return (
    <div className="form-box">
        <form onSubmit={handleSubmit}>
            <fieldset className="formfield">
                <div className="Field">
                    <label>First Name</label>
                    <input
                        value={firstName}
                        onChange={(e) => {
                        setFirstName(e.target.value);
                        }}
                        placeholder="First name"
                    />
                </div>
                <div className="Field">
                    <label>Last Name</label>
                    <input
                        value={lastName}
                        onChange={(e) => {
                        setLastName(e.target.value);
                        }}
                        placeholder="Last name"
                    />
                </div>
                <div className="Field">
                    <label>Email Address</label>
                    <input
                        value={email}
                        onChange={(e) => {
                        setEmail(e.target.value);
                        }}
                        placeholder="Email address"
                    />
                </div>
                <div className="Field">
                    <label>Phone Number</label>
                    <input
                        value={phone}
                        onChange={(e) => {
                        setPhone(e.target.value);
                        }}
                        placeholder="+00 00 000 000"
                    />
                </div>
                <div className="Field">
                    <label>Guest: {guest}</label>
                    <input type="range" min="0" max="10" value={guest} onChange={e => setGuest(e.target.value)} />
                </div>
                <div className="Field">
                    <label>Occasion</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="role">Occasion</option>
                        <option value="business">Business Lunch</option>
                        <option value="date">Date</option>
                        <option value="family">Family Dinner</option>
                        <option value="engagement">Engagement</option>
                    </select>
                </div>
                <button type="submit"  className='btn' disabled={!getIsFormValid()}>
                    Reserve
                </button>
            </fieldset>
        </form>
    </div>
  )
}

export default Bookingform