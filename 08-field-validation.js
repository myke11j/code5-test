/**
 * 
 * @desc For testing try this node 08-field-validation.js  abc abh@h.com 8802142652 11 21:11
 */
const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
};

const validatePhonenumber = (inputtxt) => {
    var phoneno = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {  
        return true;
    } 
    return false;
};

const validateTime = (time) => {
    return /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time);
}

const validateDate = (date) => {
    return isNaN(Date.parse(date));
}; 

const validateFields = (data) => {
    const {
        name, email, phoneno, date, time
    } = data;
    if (typeof name !== 'string') console.log('Invalid name');
    if (!validateEmail(email)) console.log('Invalid email');
    if (!validatePhonenumber(phoneno)) console.log('Invalid phone number');
    if (validateDate(date)) console.log('Invalid date');
    if (!validateTime(time)) console.log('Invalid time');
};

const init = () => {
    const data = {};
    data.name = process.argv[2];
    data.email = process.argv[3];
    data.phoneno = process.argv[4] ;
    data.date = process.argv[5];
    data.time = process.argv[6];
    validateFields(data);
};

init();