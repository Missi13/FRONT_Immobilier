function isEmailValid(email: string): string { 
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/; 
    return email == "" 
    ? "" 
    : emailRegex.test(email) 
    ? "" 
    : "is-invalid"; 
} 

function isPhoneNumberValid(number: string): string { 
    const numeroRegex = /^((0+([0-9]{9}))|(\+([0-9]{2,3} )+([1-9] )+[0-9]{8}))$/; 
    return (number.length === 0) 
    ? "" 
    : numeroRegex.test(number) 
    ? "" 
    : "is-invalid"; 
} 

function isPasswordValid(password: string): string { 
    const passwordRegex = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/; 
    return (password.length === 0) 
    ? "" 
    : (password.length > 8) && passwordRegex.test(password) 
    ? "" 
    : "is-invalid"; 
} 

function isNameValid(name: string): string { 
    const nameRegex = /^(([a-zA-Z]*))$/; 
    return (name.length === 0) 
    ? "" 
    : nameRegex.test(name) 
    ? "" 
    : "is-invalid"; 
} 

function isYearValid(year: string): string { 
    const yearRegex = /^(19+[0-9]+[0-9]|20+[0-1]+[0-9]|202+[0-2])$/; 
    return (year.length === 0) 
    ? "" 
    : year.length === 4 && yearRegex.test(year) 
    ? "is-valid" 
    : "is-invalid"; 
} 

function isDayValid(day: string): string { 
    const dayRegex = /^([1-9]|[1-2]+[0-9]|3+[0-1]|0+[1-9])$/; 
    return (day === "") 
    ? "" 
    : day.length <= 2 && dayRegex.test(day) 
    ? "is-valid" 
    : "is-invalid"; 
} 

function isMonthValid(month: string): string { 
    return (month === "") 
    ? "" 
    : "is-valid" 
}

export const utils ={
    isYearValid,
    isEmailValid,
    isDayValid,
    isMonthValid,
    isNameValid,
    isPasswordValid,
    isPhoneNumberValid
}