const scriptURL = 'https://script.google.com/macros/s/AKfycbxN_vHnvUIVMSFSjxo0Myn-DY-caJa7JcTshsnw9BSN2fHWT6pzLfJ_Qia-emiRmCYy/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})