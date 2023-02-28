function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValue = parseInt(inputField.value);
  inputField.value = "";
  return inputFieldValue;
}
