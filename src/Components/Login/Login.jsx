import React, { useId } from "react";
import { Form, Link } from "react-router-dom";

const Login = () => {
    const loginId = useId("label");
    return (
        <Form>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" /><br />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" /><br />
            <button type="submit">Login</button>

            <p>Don't have a account<Link to="Register">Login</Link></p>
        </Form>
    )
}

export default Login;