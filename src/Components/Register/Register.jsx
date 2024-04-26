import React, { useId } from "react";
import { Form, Link } from "react-router-dom";


const Register = () => {
    // Generate unique IDs for form inputs
    const firstNameId = useId();
    const middleNameId = useId();
    const lastNameId = useId();
    const emailId = useId();
    const ageId = useId();
    const phoneId = useId();
    const dobId = useId();
    const passwordId = useId();
    const confirmPasswordId = useId();

    return (
        <Form method="POST" action="" className="">
            <label htmlFor={firstNameId}>First name</label>
            <input type="text" name="fname" id={firstNameId} /><br />

            <label htmlFor={middleNameId}>Middle name</label>
            <input type="text" name="mname" id={middleNameId} /><br />

            <label htmlFor={lastNameId}>Last name</label>
            <input type="text" name="lname" id={lastNameId} /><br />

            <label htmlFor={emailId}>Email</label>
            <input type="email" name="email" id={emailId} /><br />

            <label htmlFor={ageId}>Age</label>
            <input type="number" name="age" id={ageId} /><br />

            <label htmlFor={phoneId}>Phone</label>
            <input type="text" name="phone" id={phoneId} /><br />

            <label htmlFor={dobId}>Date of birth</label>
            <input type="date" name="date" id={dobId} /><br />

            <label htmlFor={passwordId}>Password</label>
            <input type="password" name="password" id={passwordId} /><br />

            <label htmlFor={confirmPasswordId}>Confirm password</label>
            <input type="password" name="confirm" id={confirmPasswordId} /><br />

            <button type="submit">Register</button>

            <p>Already have an account <Link to="login">Login</Link></p>

        </Form>
    )
}

export default Register;
