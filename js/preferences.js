/*
 Author: @urel$76;
 Version: 1.0.0;
 Date of creation: August 2013;
 Aim: 
  -> JS file that reacts with 'Options' page events (save by user);
*/

/*
 Event after the user clicked on the button "Enregistrer mes informations"
*/
function clickHandler(e) {
    chrome.extension.sendMessage({directive: "popup-click"}, function(response) {
         var numerolicence = document.forms[0].numerolicence.value;
         var motdepasse = document.forms[0].motdepasse.value;
         console.log(numerolicence);
         console.log(motdepasse);

          if(numerolicence != '' && motdepasse != '') {
      		  // Save using Chrome extension storage API
      		  chrome.storage.sync.set({'numerolicence': numerolicence, 'motdepasse': motdepasse}, function() {
      		    document.write('Informations sauvegardées');
                          
      		  });

      		  // Save using HTML5 storage
            localStorage.setItem("numerolicence", numerolicence);
            localStorage.setItem("motdepasse", motdepasse);
            setInterval(function(){location.reload();},5000);                   
      	  }

      	 /* // Get data with Chrome storage
      	  chrome.storage.local.get('numerolicence', function (result) {
      		alert(Object.size(result.numerolicence));
      	   });*/

          // Close the popup when the background finishes processing request
          //this.close(); 
    });
}

/*
 Bind an event when user clicked on "Enregistrer mes informations" and display the possible pre-saved informations of the user
*/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('click-me').addEventListener('click', clickHandler);
    document.getElementById('numerolicence').value=localStorage.getItem("numerolicence");
    document.getElementById('motdepasse').value=localStorage.getItem("motdepasse");
})
