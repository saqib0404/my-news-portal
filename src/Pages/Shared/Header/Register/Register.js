import React, { useContext, useState } from 'react';
import './Register.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useTitle } from '../../../../Hooks/useTitle';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUser, emailVerification } = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle("Register");

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        // console.log(email, password, name, photoURL);
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                setError('');
                handleProfileUpdate(name, photoURL);
                handEmailVerification();
                toast.success("Please verify your email");
                form.reset();
                navigate('/');

            })
            .catch(e => {
                console.log(e);
                setError(e.message);
            })
    }
    const handleChecked = e => {
        setAccepted(e.target.checked);
    }

    const handleProfileUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUser(profile)
            .then(() => { })
            .catch(e => console.log(e))
    }
    const handEmailVerification = () => {
        emailVerification()
            .then(() => { })
            .catch(e => console.log(e))
    }

    return (
        <div className='d-flex justify-content-center mb-4'>
            <Form onSubmit={handleSubmit} className='form'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Enter your photoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleChecked} type="checkbox" label={<>Accept out <Link to='/terms'>Terms and Conditions</Link></>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;