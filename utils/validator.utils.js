function Emailvalidator(string) {
    if (string === null || string.length === 0) {
        return null
    } else {
        if (!string.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
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