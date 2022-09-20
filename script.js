let validation = {
    email:false,
    country:false,
    zipcode:false,
    password:false,
    confirmation:false,
    count: function(){
        return validation.email + validation.country + validation.zipcode + validation.password +validation.confirmation ==5
    }
}


//email

// refer https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


const emailInput = document.querySelector('#email');
emailInput.addEventListener('change',(e)=>
{
const emailLabel = document.querySelector('label[for="email"]');
if (e.target.value==''){
    e.target.classList.add('error');
    e.target.classList.remove('validated');
    emailLabel.innerHTML = "Email: <span class='message'> Email cannot be empty</span>"
    validation.email=false;
}
else if (!validateEmail(e.target.value)){
    e.target.classList.add('error');
    e.target.classList.remove('validated')
    emailLabel.innerHTML = "Email: <span class='message'> Email invalid</span>"
    validation.email=false;

}
else {
    e.target.classList.remove('error');
    e.target.classList.add('validated')
    emailLabel.innerText='Email:'
    validation.email=true;
}


})


// country 
const countryInput = document.querySelector('#country');
countryInput.addEventListener('change',(e)=>
{
    const countryLabel = document.querySelector('label[for="country"]');
    if (e.target.value==''){
        e.target.classList.add('error');
        e.target.classList.remove('validated')
        countryLabel.innerHTML = "Email: <span class='message'> Country cannot be empty</span>"
        validation.country=false;
    }
    else {
        e.target.classList.remove('error');
        e.target.classList.add('validated')
        countryLabel.innerText='Country:'
        validation.country=true;

    }
})

// zipcode 

const validateZip = (zip) => {
    return String(zip)
      .toLowerCase()
      .match(
        /^\d{3}-\d{4}$/
      );
  };

const zipInput = document.querySelector('#zipcode');
zipInput.addEventListener('change',(e)=>
{
    const zipLabel=document.querySelector('label[for="zipcode"]');
    if (e.target.value==''){
        e.target.classList.add('error');
        e.target.classList.remove('validated')
        zipLabel.innerHTML = "Email: <span class='message'> Zipcode cannot be empty</span>"
        validation.zipcode=false;
    }
    else if(!validateZip(e.target.value)){
        e.target.classList.add('error');
        e.target.classList.remove('validated')
        zipLabel.innerHTML = "Country: <span class='message'> Zip Code invalid</span>"
        validation.zipcode=false;
    }
    else {
        e.target.classList.remove('error');
        e.target.classList.add('validated')
        zipLabel.innerText='Zip Code:'
        validation.zipcode=true; 
    }
})


// password 

const validatePass = (pass) => {
    return pass.length> 7;
  };

const passInput = document.querySelector('#pass');
passInput.addEventListener('change',(e)=>
{   
    // empty confirmation 
    const confirmInput = document.querySelector('#confirm');
    confirmInput.value=''
    confirmInput.classList.remove('validated')
    validation.confirmation =false;

    const passLabel=document.querySelector('label[for="pass"]');
    if (e.target.value==''){
        e.target.classList.add('error');
        e.target.classList.remove('validated')
        passLabel.innerHTML = "Password: <span class='message'> Password cannot be empty</span>"
        validation.password=false;
    }
    else if(!validatePass(e.target.value)){
        e.target.classList.add('error');
        e.target.classList.remove('validated')
        passLabel.innerHTML = "Password: <span class='message'> Password length need to be at least 8</span>"
        validation.password=false;
    }
    else {
        e.target.classList.remove('error');
        e.target.classList.add('validated')
        passLabel.innerText='Password:'
        validation.password=true; 
    }
})


//confirmation 

const confirmInput = document.querySelector('#confirm');
confirmInput.addEventListener('change',(e)=>
{   const pass = document.querySelector('#pass').value;
    const confirmLabel=document.querySelector('label[for="confirm"]');
    if (e.target.value!=pass){
        e.target.classList.add('error');
        e.target.classList.remove('validated')
        confirmLabel.innerHTML = "Password Confirmation: <span class='message'> Password doesn't match</span>"
        validation.confirmation=false;
    }
    else {
        e.target.classList.remove('error');
        e.target.classList.add('validated')
        confirmLabel.innerText='Password Confirmation:'
        validation.confirmation=true; 
    }
})

function showSuccess(){
   const form = document.querySelector('form')
   form.innerHTML = '<h3 class="success">Registration Suceeded</h3>'
}

// add trigger to submit 


const submit = document.querySelector('input[type="submit"]')
submit.addEventListener('click',()=>{
    if (validation.count()){
        console.log('hello')
        showSuccess()
    }
})