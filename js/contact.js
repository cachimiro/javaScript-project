
  function sendMail(contactForm) {
    emailjs.send("gmail", "johann",  {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
         
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            if (emailjs) {
              alert("Thank you for booking with us, a Staff member will be in toch shortly ");
              
             
                  }
                  
  
        },
        
        
        function(error) {
            console.log("FAILED", error);
             if (emailjs) {
              alert("There was an error please try later");
             }
        }
    );
    return false;  
}
 


$(".eamil-1").click(function(){
    $(".size-1").toggle()
    
});





