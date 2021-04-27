import React from 'react';

import bg from '../../assets/bg.jpg'

export default function Login() {
    return (
        <main>
            <section className="img-box">
                <img src={bg} alt="background" />
            </section>

            <section className="form-box">
                <div className="from-content">
                    <h2>Sign In</h2>
                </div>
            </section>
        </main>
    );
}