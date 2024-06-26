import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { handWave } from "../assets/Images";
import axios from "axios";
import { SERVER } from "../Config";
import { MyContext } from "./AppBarResponsive";


const style = {
    position: 'absolute',
    borderRadius: '8px',
    // borderRadius: '8px 8px 0 0',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    // p: 4 ,
    padding: '0px 0px 40px 0px',
};


export const LoginModal = () => {

    const [open, setOpen] = useContext(MyContext);
    const handleClose = () => setOpen(false);

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
            const response = await axios.post(`${SERVER}login`, formValues);
            console.log('Response:', response.data.res);
            if (response.data.res.token) {
                localStorage.setItem('LoginKey', response.data.res);
                handleClose();
            }
        } catch (error) {
            console.error('Error:', error);
        }

    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="loginHeader">
                    <div className="CFname">CodeFlink Product</div>
                    <Button className="modal-close" color="error"
                        onClick={handleClose}
                    >X</Button>
                </div>
                <div className="child" style={{ padding: '3rem' }}>
                    <img src={handWave} alt="" height={24} width={24} />
                    <h2>Welcome Back !</h2>
                    <p>Please login to access your account.</p>
                    <div className="inputFields" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                        {['Username', 'Password'].map((field) => (
                            <div className="inputs" style={{ display: 'flex', flexDirection: 'column' }}>
                                <TextField
                                    key={field.toLowerCase()}
                                    label={field}
                                    id={`outlined-size-small-${field.toLowerCase()}`}
                                    size="small"
                                    value={formValues[field.toLowerCase()]}
                                    onChange={handleChange(field.toLowerCase())}
                                // sx={{width:'250px'}}
                                />
                                {
                                    field === 'Password' && (
                                        <div className="forgetPassword" style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                                            <Link to='/#' style={{ textDecoration: 'none', fontSize: '12px' }}>
                                                <span className="SignUpLink">Forgot Password?</span>
                                            </Link>
                                        </div>


                                    )
                                }
                            </div>

                        ))}
                        <Button variant="outlined" onClick={ValidateUser}>Sign In</Button>
                    </div>


                    <Typography sx={{ justifyContent: 'center', display: 'flex', fontSize: '12px' }}>
                        Don't have an account? <Link to='/#' style={{ textDecoration: 'none' }}><span className="SignUpLink">Sign Up</span></Link>
                    </Typography>
                </div>
            </Box>
        </Modal>
    )
}