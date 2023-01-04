function Emailvalidator(string) {
    if (string === null || string.length === 0) {
        return null
    } else {
        if (!string.match(/^[A-Za-z0-9_][a-zA-Z]+[A-Za-z0-9_\-\.]*@?[a-zA-Z]{2,10}\.[a-z]{2,10}$/)) {
            return true
        }
    }
}
function NameValidator(string) {
    if (string === null || string.length === 0) {
        return null
    } else {
        if (string.length < 3) {
            return true
        }
    }
}

function isEmpty(string) {
    if (string === null || string.length === 0) {
        return null
    }
}

function formatCompany(value) {
    if (value === null || value.length === 0 || value === '') {
        return 'By an Individual'
    } else {
        return value
    }
}

export {Emailvalidator, NameValidator, isEmpty, formatCompany}