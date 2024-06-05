//This is the code where we swap the digits of a number.
//We use HTML to get an input(user enters a number)
//Then we convert the number into string, to swap the digits
    let numString = number.toString();

//if number is less than 3 digits , user will get a following message. 
    if (numString.length < 3){
        alert( "Invalid number.The number should have at least 3 digits.")
      }
//if number has 3 or more digits , following will be executed.      
      else {
        //We define how to swap digits
          let swappedNumber = "";
          for ( let num =0; num < numString.length; num++){
            // swapping second digit with the last digit
            if (num === 1){
               swappedNumber += numString[numString.length -1 ];
         
            }
            else if ( num=== numString.length-1){
             //swapping the last digit with the second digit  
                swappedNumber += numString[1];
            }
            else {
              //getting swapped number
                swappedNumber += numString[num];
            }
        }
       
        console.log("Original number:" + number); //outputs entered by the user number
        console.log("Swapped Number:" + swappedNumber);//outputs swapped number
      }
    
   
    

 



