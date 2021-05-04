import React from 'react';
import { Link } from 'react-router-dom';

import bg2 from '../../assets/bg2.jpg'

import './register.css'

export default function Register() {
    return (
        <section>
        <div className="img-box">
            <img src={bg2} alt="Imagem background" draggable="false" />
        </div>

        <div className="form-box">
        <div className="formm">
            <h2>Register</h2>

            <form>
                <div className="Box">
                    <label for="name">Name</label>
                    <input type="text" name="name" />
                </div>

                <div className="Box">
                    <label for="username">Username</label>
                    <input type="text" name="username"  />
                </div>

                <div className="Box">
                    <label for="email">Email</label>
                    <input type="email" name="email" />
                </div>

                <div className="Box">
                    <label for="password">Password</label>
                    <input type="password" name="password" />
                </div>

                <button className="btn">Register</button>

                <div className="register">
                    <p>Do you want to come back to main page? <span><Link to="/">Click here</Link></span></p>
                </div>
            </form>
        </div>
    </div>
    </section>
    );
}