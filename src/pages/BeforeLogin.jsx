import { useState } from 'react';

import './BeforeLogin.css'
import axios from 'axios';
const BeforeLogin = ({ onOpenModal }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    });
    const handleChange = (prop) => (event) => {
        setFormValues({ ...formValues, [prop]: event.target.value });
    };

    const ValidateUser = async () => {
        console.log(formValues);
        try {
            const response = await axios.post('http://localhost:8080/login', formValues);
            console.log('Response:', response.data);
            // Handle the response as needed
        } catch (error) {
            console.error('Error:', error);
            // Handle the error as needed
        }

    }
    const auth = () =>{
        // setAuth(true);
        console.log("entering");
      }

    return (
        <>
            {/* <ResponsiveAppBar onOpenModal={handleOpenModal} /> */}
            {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
            <div className="beforeLogin" >
                <h1>Welcome to our website!</h1>
            </div>
        </> 
    )
}

export default BeforeLogin;  //exporting the component so that it can be used in other files