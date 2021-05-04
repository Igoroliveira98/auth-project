import React from 'react';
import { Link } from 'react-router-dom'

import bg from '../../assets/bg.jpg'
import './styles.css';

export default function Login() {
    return (
        <section>
            <div className="img-box">
                <img src={bg} alt="Imagem background" draggable="false" />
            </div>

            <div className="form-box">
            <div className="formm">
                <h2>Sign in</h2>

                <form>
                    <div className="Box">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div className="Box">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="passsword" />
                    </div>

                    <button className="btn">Sign in</button>

                    <div className="register">
                    <p>You don't have a account? <span><Link to="/register">Click here</Link></span></p>
                    </div>
                </form>
            </div>
        </div>
        </section>
    );
}