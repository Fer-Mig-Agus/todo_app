

export const validate = (form, errorState) => {


    const error = { ...errorState };

    if (!form.first_name) error.first_name = "Complete the field";
    else if (form.first_name === "") error.first_name = "Complete the field";
    else if (!isNaN(form.first_name)) error.first_name = "It should not be a number";
    else error.first_name = "";

    if (!form.last_name) error.last_name = "Complete the field";
    else if (form.last_name === "") error.last_name = "Complete the field";
    else if (!isNaN(form.last_name)) error.last_name = "It should not be a number";
    else error.last_name = "";

    if (!form.email) error.email = "Complete the field";
    else if (form.email === "") error.email = "Complete the field";
    else if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)) error.email = "Not a valid email";
    else if (form.email.length >= 35) error.email = "Exceeds the allowed characters";
    else error.email = "";

    if (!form.password) error.password = "Complete the field";
    else if (form.password === "") error.password = "Complete the field";
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,}$/;
    if (!passwordRegex.test(form.password)) error.password = 'The password must contain at least one uppercase letter, one lowercase letter and one number.';
    else error.password = "";

    if (!form.repeat_password) error.repeat_password = "Complete the field";
    else if (form.repeat_password === "") error.repeat_password = "Complete the field";
    else if (form.repeat_password !== form.password) error.repeat_password = "Passwords do not match";
    else error.repeat_password = "";

    return error;
}


export const validateFields = ({ first_name, last_name, repeat_password, email, password }) => {
    if (!first_name || first_name === "" || !isNaN(first_name)) return false
    if (!last_name || last_name === "" || !isNaN(last_name)) return false
    if (!email || email === "") return false
    if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(email)) return false
    if (email.length >= 35) return false
    if (!password || password === "") return false
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,}$/;
    if (!passwordRegex.test(password)) return false;
    if (password !== repeat_password) return false

    return true;
}
