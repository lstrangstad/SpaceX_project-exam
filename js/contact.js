const formOutput = document.querySelector(".contact-form");
const formError = document.querySelector(".error-msg");

formOutput.addEventListener("submit", formValidator);
function formValidator(event) {
  event.preventDefault();

  const fullName = document.querySelector("#fullname");
  const nameError = document.querySelector("#fullname-error");
  const fullnameValue = fullName.value;

  if (nameValidator(fullnameValue) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  const mail = document.querySelector("#email");
  const mailError = document.querySelector("#email-error");
  const mailValue = mail.value;

  if (nameValidator(mailValue) === true) {
    mailError.style.display = "none";
  } else {
    mailError.style.display = "block";
  }

  const validMailError = document.querySelector("#valid-email-error");

  if (mailValidator(mailValue) === true) {
    validMailError.style.display = "none";
  } else {
    validMailError.style.display = "block";
  }

  const subject = document.querySelector("#subject");
  const subjectError = document.querySelector("#subject-error");
  const subjectValue = subject.value;

  if (nameValidator(subjectValue) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  const messageInput = document.querySelector("#msg");
  const messageError = document.querySelector("#message-error");
  const messageValue = messageInput.value;

  if (messageValidator(messageValue) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

function nameValidator(string) {
  const inputValue = string.trim();
  if (inputValue.length > 0) {
    return true;
  } else {
    return false;
  }
}

function mailValidator(mail) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(mail);
}

function messageValidator(message) {
  const trimmedMessage = message.trim();
  if (trimmedMessage.length >= 10) {
    return true;
  } else {
    return false;
  }
}
