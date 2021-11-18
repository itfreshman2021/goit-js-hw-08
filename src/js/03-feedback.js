import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const messageObject = {email: "",message: "",};

const refsForm = document.querySelector(".feedback-form");

refsForm.addEventListener("input", throttle(onFormInput, 500));
refsForm.addEventListener("submit", onFormSubmit);

populateForm();

function onFormInput(event) {
    
    const { name, value } = event.target;
   
    messageObject[name] = value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messageObject));
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(messageObject);

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function populateForm () {
    const parsedDataForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (parsedDataForm) {
        
        refsForm.elements.email.value = parsedDataForm.email;
        refsForm.elements.message.value = parsedDataForm.message;

       messageObject.email = parsedDataForm.email;
       messageObject.message = parsedDataForm.message;
    }
    
};