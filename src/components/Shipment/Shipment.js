import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Shipment.css'

const Shipment = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const [user] = useAuthState(auth);


    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleAddress = (event) => {
        setAddress(event.target.value)
    }
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const info = { name, address, phoneNumber }
        console.log(info);
    }

    return (
        <div className='form-container'>
            <div className='form-body shipment'>
                <div>
                    <h1 className='form-title'>Shipping Informatin</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input value={user?.email} readOnly type="email" name={"Email"} id="0" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="name">Name</label>
                            <input onBlur={handleName} type="text" name="Name" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="address">Address</label>
                            <input onBlur={handleAddress} type="text" name="Address" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="phonenumber">Phone Number</label>
                            <input onBlur={handlePhoneNumber} type="number" name="Phone Number" id="" required />
                            <p style={{ color: 'red' }}>{error}</p>
                        </div>
                        <input className='form-submit' type="submit" value="Add Shipping" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Shipment;