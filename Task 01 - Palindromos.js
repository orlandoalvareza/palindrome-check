function palindrome(str) {
    let arr1 = str.toLowerCase().split(/(?=[A-Z])|\W+|_/).join('').split('');
    let arr2 = [];

    for(let i = 0; i < arr1.length; i++) {
        arr2.unshift(arr1[i]);
    }

    let str1 = arr1.join('');
    let str2 = arr2.join('');

    return str1 === str2;
 }
  
  palindrome("My age is 0, 0 si ega ym.");


  