/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
 
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { config } from "@/app/config";

export default function Page() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [taxCode, setTaxCode] = useState('');

    const handleSave = async () => {
        try {
            const payload = {
                name: name,
                address: address,
                phone: phone,
                email: email,
                taxCode: taxCode
            }

            await axios.post(`${config.apiUrl}/company/create`, payload);
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Company information saved successfully!',
                timer: 2000,
            });

        } catch (error) {
            console.error("Error saving company information:", error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    }

    return (
        <div>
            <h1 className="content-header">Company infomation</h1>
            <div>
                <div>Company name</div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

                <div className="mt-4">Address</div>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>

                <div className="mt-4">Phone number</div>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>

                <div className="mt-4">Email</div>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <div className="mt-4">Tax code</div>
                <input type="text" value={taxCode} onChange={(e) => setTaxCode(e.target.value)}/>

                <button className="mt-4 btn" onClick={handleSave}>
                    <i className="fa fa-save mr-2"></i>
                    Save
                </button>
            </div>
        </div>
    );
}