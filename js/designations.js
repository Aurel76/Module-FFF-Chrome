/*
 Author: @urel$76;
 Version: 1.0.0;
 Date of creation: August 2013;
 Aim: 
  -> JS file that open a new tab in your 'Google Chrome' browser and show your designations with the possible pre-saved informations;
*/

chrome.tabs.create({'url': "http://debordement.fff.fr/competitions/php/acces/accueil_new.php"}, function(tab) {
     var nl = localStorage.getItem('numerolicence');
     var mdp = localStorage.getItem('motdepasse');
     var execute_js = "document.getElementsByName('numero_individu')[0].defaultValue = "+nl+";document.getElementsByName('mot_passe')[0].defaultValue = "+mdp+";document.getElementsByName('Valid')[0].submit();";
     chrome.tabs.executeScript(null,
                           {code: execute_js, runAt: "document_end"});
  });
