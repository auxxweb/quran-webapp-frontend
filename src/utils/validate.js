function isValidWebsite(website) {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(website);
}

const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
};


export const loginValiDate = (formData, setFormError, formError) => {
    let valid = true;
    let email_err = "";
    let password_err = "";
    let common_err = "";

    if (
        !isValidEmail(formData.email)
    ) {
        email_err = "Please enter a valid email address";
        valid = false;
    }


    if (formData.password?.trim() === "" || formData.password.length < 5) {
        password_err = "Password must be longer than or equal to 5 characters";
        valid = false;
    }

    setFormError({
        ...formError,
        email_err,
        password_err,
        common_err,
    });
    return valid;
};