const sections = document.querySelectorAll('.section'); 
const sectBtns = document.querySelectorAll('.controlls'); 
const sectBtn = document.querySelectorAll('.control'); 
const allSections = document.querySelector('.main-content'); 



function PageTransitions(){
    // Button click active class 
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            if (currentBtn.length > 0) {
                currentBtn[0].className = currentBtn[0].className.replace('active-btn',''); 
            }
            this.className += ' active-btn'; 
        })
    }
}



    //sections Active Class , e = event 
    allSections.addEventListener('click',(e) =>{
        //console.log(e.target); 
        const id = e.target.dataset.id; 
        if (id) {
            //remove selected from the other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections 
            sections.forEach((section) => {
                section.classList.remove('active')
            } )

            const element = document.getElementById(id); 
            element.classList.add('active'); 

        }
    } )

     //light mode 
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".theme-btn").addEventListener("click", () => {
            document.body.classList.toggle("light-theme");
            document.body.classList.toggle("light-mode");
        });
    });
    



var nameError = document.getElementById('name-error'); 
var emailError= document.getElementById('email-error'); 
var subjectError = document.getElementById('subject-error'); 
var messageError = document.getElementById('message-error'); 
var submitError = document.getElementById('submit-error'); 


function validateName(){
     var name = document.getElementById('contact-name').value; 

    //if input field is empty 
     if(name.length==0){
        nameError.innerHTML = 'Name is required'; 
        return false; 
    }
         if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false; 

     }
     nameError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #18af75;"></i>'; 
    return true; 
 }




 function validateEmail(){
    var email = document.getElementById('email').value; 

    if(email.length == 0 ) {
        emailError.innerHTML = 'Email is required'
        return false; 
    }
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailError.innerHTML = 'Email Invalid'
        return false; 
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #18af75;"></i>'; 
    return true; 
 }

 


 function validateSubject(){
    var subject = document.getElementById('subject').value;
    
    
    if(subject.length == 0 ) {
        subjectError.innerHTML = 'Subject is required'
        return false; 
    }
    if(!subject.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        subjectError.innerHTML = 'Subject Invalid'
        return false; 
    }

    subjectError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #18af75;"></i>'; 
    return true; 

 }




 function validateMessage() {
    var message = document.getElementById('message').value; 
    var required = 10; 
    var left = required - message.length; 

    if(left>0){
        messageError.innerHTML= left + 'more characters required'; 
        return false; 
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #18af75;"></i>'; 
    return true; 


}

function validateForm() {
    
    if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage()){
        submitError.innerHTML = 'Please fix error to submit '; 
        // forevent.preventDefault();
        return false; 
    }
     
 }









function sendEmail(){
    console.log("sendEmail called");
    let parms ={
        name: document.getElementById("contact-name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_pxrsddz","template_dgcefhc",parms).then(alert("Email Sent!!"))

    }


function someFunc(){
    validateForm(); 
    sendEmail(); 
}




PageTransitions(); 



