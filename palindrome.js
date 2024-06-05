// User will be asked to enter a palindrome word (we use HTML for that), 
//and JS will check the input whether is right or wrong.

word = word.toLowerCase();//Input word's letters converted into lower case letters

//function does work in string 
function isPalindrome(str) {
    //defining the string
    //first letter must match the last letter and so on.
    let left = 0;
    let right = str.length -1;
    //
    while (left < right) {
        //if letters don't match
        if (str[left] !==str[right]) {
            return false;
        }
        //if letters match
        left ++;
        right --;
    }
    return true;
}
//to check if the word is palindrome.
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");//outputs if word is palindrome
}
else {
    console.log(word + " is not a palindrome.");//outputs if word is not a palindrome
}




