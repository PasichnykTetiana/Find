function findLongestWordLength(str) {
    var Newstr=str.split(' ');
    var LongestWord=0;
    for(var i=0; i<Newstr.length; i+=1) {
        if(Newstr[i].length> LongestWord){
            LongestWord=Newstr[i].length;
        }
    }
    return LongestWord;
}

// console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));
//
// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//         if(strSplit[i].length > longestWord){
//             longestWord = strSplit[i].length;
//         }
//     }
//     return longestWord;
// }
//
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));