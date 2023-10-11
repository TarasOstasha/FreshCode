const myForm = document.querySelector('form');
let dataObj = {};
const nameInput = document.querySelector('.form-input');

function nameInputHandler(e) {
    if(/^[A-z][a-z]{1,19}$/.test(e.target.value)) {
        e.target.classList.add('valid');
        e.target.classList.remove('invalid');
    } else {
        e.target.classList.add('invalid');
        e.target.classList.remove('valid');
    }
}

nameInput.oninput = nameInputHandler;

const INPUTS_REG_EXP = {
    'user-first-name': /^[A-Z][a-z]{2,19}$/,
    'user-last-name': /^[A-Z][a-z]{2,19}$/,
    'user-email': /^.+@.+$/,
    'user-tel': /\d{3}/,
    'user-tel1': /\d{3}/,
    'user-tel2': /\d{4}/,
    'user-message': /^[a-zA-Z\s]{5,100}/
  };

  const inputs = document.querySelectorAll('.form-input');

inputs.forEach(i => i.addEventListener('input', inputHandler));

function inputHandler(e) {
    console.log(e.target.value)
  if (INPUTS_REG_EXP[e.target.name].test(e.target.value)) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
  } else {
    e.target.classList.remove('valid');
    e.target.classList.add('invalid');
  }
}



myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const userFirstName = document.getElementsByName("user-first-name")[0].value;
    const userLastName = document.getElementsByName("user-last-name")[0].value;
    const email = document.getElementsByName("user-email")[0].value;

    let cellPhone = [];
    document.getElementsByName("user-tel").forEach(p => cellPhone.push(p.value));
    const messageSubject = document.getElementsByName("user-message-subject")[0].value;
    const message = document.getElementsByName("user-message")[0].value;
    // тут можливо заповнювати циклом, але чи актуальна така версія?
    dataObj.userFirstName = userFirstName;
    dataObj.userLastName = userLastName;
    dataObj.cellPhone = cellPhone.join('-');
    dataObj.email = email
    dataObj.messageSubject = messageSubject
    dataObj.message = message.replace(/^( +)|( +)$/g, "");
});


