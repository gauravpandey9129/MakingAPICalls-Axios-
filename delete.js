const form=document.querySelector('form');
form.addEventListener("submit",function(event){
      event.preventDefault() ;
      let name=document.getElementById("name").value;
      let email=document.getElementById("emailid").value;
       axios.delete("https://crudcrud.com/api/84d8e0fbe4de49afbf894b9326e452af/appointment/65gug2354356645234")
       .then((respone)=>{
        console.log(respone)
        })
        .catch((err)=>{
        console.log(err)
        
    })
    console.log(name,email)
    
})