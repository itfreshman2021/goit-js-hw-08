import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const message = {};

const refsForm = document.querySelector(".feedback-form");

refsForm.addEventListener("input", throttle(onFormInput, 500));
refsForm.addEventListener("submit", onFormSubmit);

populateForm();

function onFormInput(event) {

    const { name, value } = event.target;
    message[name] = value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(message));
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(message);

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function populateForm () {
    const savedDataForm = localStorage.getItem(STORAGE_KEY);
    const parsedDataForm = JSON.parse(savedDataForm);

    if (parsedDataForm) {
        
        refsForm.elements.email.value = parsedDataForm.email;
        refsForm.elements.message.value = parsedDataForm.message;
    }
};