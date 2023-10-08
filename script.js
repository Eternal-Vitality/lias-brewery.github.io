var form = document.getElementById("form")

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  // Addressing form inputs
  var username = document.getElementById('username')
  var order = document.getElementById('order')
  var pickupLocation = document.getElementById('pickupLocation')
  
  fetch('https://discord.com/api/webhooks/1160371888074264606/fGHcjEEyuDLy1khriP89BaZGCpQhAIsSy4KkW0OKkk101znA_F0NUTpJxRkfs5aRga_u', {
    method:'POST',
    body:JSON.stringify({
      title:username,
      body:order,
      id:pickupLocation
    })
    headers:{
      "Content-Type":"application/json; charset=UTF-8"
   }
  })
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data);
  })
  
})
