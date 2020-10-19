function validateForm() {
    var name = document.forms["myForm"]["fname"].value;
    var last = document.forms["myForm"]["lname"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;

   
   
    if (name == "") {
      alert("First Name must be filled out");
      return false;
    
    } else if (last == "") {
        alert("Last Name must be filled out");
        return false;
    
    } else if (email == "") {
        alert("Email must be filled out");
        return false;
    
    } else if (password == "") {
        alert("Password must be filled out");
        return false;
    
    } else{
        alert("Error");  
    }

}


// $("#ajaxForm").submit(function(e){
//     e.preventDefault();
//     var action = $(this).attr("action");
//     var data = {};
//     $(this).serializeArray().map(function(x){data[x.name] = x.value;}); 
//     $.ajax({
//       type: "POST",
//       url: action,
//       data: JSON.stringify(data),
//       contentType: "application/json",
//       headers: {
//         "Accept": "application/json"
//       }
//     }).done(function() {
//        $('.success').addClass('is-active');
//     }).fail(function() {
//        alert('An error occurred please try again later.')
//     });
//   });