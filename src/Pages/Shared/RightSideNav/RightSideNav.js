import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitch, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    const { providerGoogle, providerGithub } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubhProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerGoogle(googleProvider)
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleGithubSignIn = () => {
        providerGithub(githubhProvider)
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <ButtonGroup className='d-flex' vertical>
                <Button onClick={handleGoogleSignIn} className='px-5 mb-2 rounded' variant="outline-primary"><FaGoogle></FaGoogle> Login via Google</Button>
                <Button onClick={handleGithubSignIn} className='mb-4 rounded' variant="outline-dark"><FaGithub></FaGithub> Login via Github</Button>
            </ButtonGroup>
            <h5>Find us on</h5>
            <ListGroup className='mb-4'>
                <ListGroup.Item className='mb-2 rounded'><FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2 rounded'><FaYoutube /> Youtube</ListGroup.Item>
                <ListGroup.Item className='mb-2 rounded'><FaTwitch /> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2 rounded'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                <ListGroup.Item className='mb-2 rounded'><FaDiscord /> Discord</ListGroup.Item>
            </ListGroup>
            <h5>Brand Partners</h5>
            <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;