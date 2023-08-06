// Search-------------------


// const lyrics = "Tumi amar Valobasha";

// /* const lyricsConvert = lyrics.toLowerCase(); */

// const serach ="valo";

// /* const serachConvert = serach.toLowerCase();

// const doesExits = lyricsConvert.includes(serachConvert); */

// /* console.log(doesExits); */
// const doesExits = lyrics.toLowerCase().includes(serach.toLowerCase())

// console.log(doesExits);


// console.log(lyrics.indexOf("Valobasha"));

// if(lyrics.indexOf("uo") !== -1){

//     console.log("exits your value");
// }

// else{
//     console.log("cannot find your value");
// }

// Search-----------------------------

/* 
const result = Math.pow(3,7);
console.log(result); */


/* const num1 = 30;
const num2 = 50;
const gap = num1-num2;

if(gap<5){
    console.log("guys you can friends");
}
else{
    console.log("Otherwise you can not a friends");
}
 */


/* const num1 = 30;
const num2 = 50;
const gap = Math.abs(num1-num2);

if(gap<5){
    console.log("guys you can friends");
}
else{
    console.log("Otherwise you can not a friends");
}
 */



/* let first = 5;
let second = 7;

console.log(first,second);

first =second;
second = first;

console.log(first,second); */

/* const marks =( 1,3,2,345,6778);

const result = Math.max(marks)

console.log(result); */

// Get the largest number in three input start------------

/* 
function inputMarks(numbers){
    let largest = numbers[0];

for(let i = 0; i< numbers.length; i++){
    const element = numbers[i];
   if(element>largest){
    largest = element;
   }
   
}

return largest;

}

const marks = [23,34,45,1356,567,34,234,2344];
const heights = inputMarks(marks)
console.log(heights);  */

// Get the largest number in three input end================



// Get the lowest number in three input start------------


/*  function inputMarks(numbers){
    let lowest = numbers[0];

for(let i = 0; i< numbers.length; i++){
    const element = numbers[i];
   if(element<lowest){
    lowest = element;
   }
   
}

return lowest;

}

const marks = [23,34,45,1356,567,34,234,2344];
const heights = inputMarks(marks)
console.log(heights);  */



/* function inputMarks(mark) {
    let result = Math.max(...mark);
    return result;
}

let marks = [23, 64, 45];
let highestMark = inputMarks(marks);
console.log(highestMark);
 */


// Get the lowest number in three input End====================

/* function str(arr) {
    let reversed = '';
    
    for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i];

        reversed = reversed + element;
        
        console.log(element, reversed);
    }
    
    return reversed;
}

const string = "I am good boy";
const reversedString = str(string);

console.log(reversedString); */

/* function str(arr) {
    let word = arr.split(' ');
    let reversedWord=[];
    for(let i = word.length-1; i>=0; i--){
        let element =word[i];

        reversedWord.push(element);

    }

    const concet = reversedWord.join(' ');
    return concet;

}

const string = 'I am good boy';
const reversedString = str(string);
console.log(reversedString); // Print the reversed string */

/* 
 const fibo =[0, 1];
for(let i = 2; i<15; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}

console.log(fibo); */


// ekta Array theke sum ber korar programme -start----------

/* function sumOdd(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
         if(i%2===1){
            
         }
         sum = sum+arr[i];
     }

     return sum;
}


const numbers =[1,2,3,4,5,6,7,8,9];

const number =sumOdd(numbers);
console.log(number); */


// ekta Array theke sum ber korar programme -End----------


// Ekta array er moddhe theke shudhu bijor songkhar jogfol er ber koprar programme--------------
/* function sumOdd(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){

         if(arr[i]%2===1){
            sum = sum+arr[i]; 
         }
       
     }

     return sum;
}


const numbers =[1,2,3,4,5,6,7,8,9];

const number =sumOdd(numbers);
console.log(number); */


// Ekta array er moddhe theke shudhu bijor songkhar jogfol er ber koprar programme==============

/* function information(info){
const sentence="amar name" +info.name+", amar boyosh "+info.age+", amar basha "+info.village;
return sentence;
}


const myInfo ={
    name:'khokon',
    age: 24,
    village: 'pabna'

}
 */
/* console.log(information(myInfo)); */




