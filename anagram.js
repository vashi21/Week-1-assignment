/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    if(str1.length === str2.length){
        let len1 = str1.split('').sort().join('');
        let len2 = str2.split('').sort().join('');
        if(len1 === len2){
            console.log("true");
        }
        else{
            console.log("false");
        }
    }
    else{
        console.log("false");
    }
    
}

module.exports = isAnagram;