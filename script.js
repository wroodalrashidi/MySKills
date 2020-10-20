// Navbar , sroll smoothly

 document.addEventListener("DOMContentLoaded", () => {
    //  little hack to detect if the user is on ie 11
    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    // get all the links with an ID that starts with 'sectionLink'
    const listOfLinks = document.querySelectorAll("a[href^='#sectionLink");
      
// loop over all the links
listOfLinks.forEach(function (link) {
        
// listen for a click
link.addEventListener('click',  () => {
          
// toggle highlight on and off when we click a link
    listOfLinks.forEach( (link) => {
            if (link.classList.contains('highlighted')) {
              link.classList.remove('highlighted');
            }
          });

        link.classList.add('highlighted');
        // get the element where to scroll
        let ref = link.href.split('#sectionLink');
        ref = "#section" + ref[1];
          
        // ie 11 does not support smooth scroll, so we will simply scroll
        if (isIE11) {
        window.scrollTo(0, document.querySelector(ref).offsetTop);
        } else {
        window.scroll({
        behavior: 'smooth',
        left: 0,
            // top gets the distance from the top of the page of our target element
            top: document.querySelector(ref).offsetTop
            });
          }
        })
      })
    })

//    search bar
$("#searchInput").on('keyup', function() {
    var searchValue = $(this).val();
    searchAndFilter(searchValue)
  });
  
  function searchAndFilter(searchTerm) {
    if (searchTerm == '') {
      $("#categories li").hide()
    } else {
      $("#categories li").each(function() {
        var currentText = $(this).text();
        currentText = currentText.toUpperCase();
        searchTerm = searchTerm.toUpperCase();
        if (currentText.indexOf(searchTerm) >= 0) {
          $(this).show();
        }
      });
    }
  }
  
  $(document).ready(function() {
    $("#categories li").hide();
  });


  // Add to array
  var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("suggestion").value;
//  alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("uggestion").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Suggestion " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}