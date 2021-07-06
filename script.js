
// Add event listener to generate button



var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");







    /* Function to generate combination of password */ 

    function writePassword() { 

     

        var pwd = ''; 
  
        var uCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  

                'abcdefghijklmnopqrstuvwxyz0123456789@#$!'; 

          

        for ( var i = 1; i <= 8; i++) { 


          
            var char = Math.floor(Math.random() 

                         * uCase.length + 1); 

              

            pwd += uCase.charAt(char) 

        } 

          

        return pwd; 
      }


      //Function to Generate password
        function genPwd() { 

          var length = Number(prompt("How many characters would you like your password to be?"));

          while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Choose a length of at least 8 characters and no more than 128 characters."));
        
          var uppers = confirm("Would you like to use uppercase letters?");
          var lowers = confirm("Would you like to use lowercase letters?");
          var numbers = confirm("Would you like to use numbers?");
          var symbols = confirm("Would you like to use special characters?");
          
          

          passwordText.innerHTML= writePassword(); 
        
        } 
        
        // Add event listener to generate button


          generateBtn.addEventListener("click", genPwd);


  

  

  

  