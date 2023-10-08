const formEl = document.querySelector('.orderform');

formEl.addEventListener('orderform', event => {
  event.preventDefault();
  
  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

  console.log(data);
});
