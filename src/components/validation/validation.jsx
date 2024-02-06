function passwordValidation(e) {
    const pass = /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{6,}/g;
    const value = e.target.value
    return pass.test(value)
}

function mailValidation(e) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const value = e.target.value
    return EMAIL_REGEXP.test(value)
}

function nameValidation(e) {
    const value = e.target.value
    return value.length > 0
}

export {passwordValidation, mailValidation, nameValidation}