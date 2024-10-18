export const loginValiDate = (formData, setFormError, formError) => {
    let valid = true;
    let name_err = "";
    let password_err = "";
    let common_err = "";

    if (formData.name.length < 3) {
        name_err = "Please enter a valid user name";
        valid = false;
    }

    if (formData.password?.trim() === "" || formData.password.length < 5) {
        password_err = "Password must be longer than or equal to 5 characters";
        valid = false;
    }

    setFormError({
        ...formError,
        name_err,
        password_err,
        common_err,
    });
    return valid;
};