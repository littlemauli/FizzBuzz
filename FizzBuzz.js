let greeting = function(){
    console.log('Hello World')
};

greeting();


// my total rubbish start
/*let num =0;
for (let i=1; i<101; i++){
    num = i
    
    if (i%3 === 0 && i%5 === 0){
         console.log( 'FizzBuzz')
        } else if (i%5 === 0){
            console.log('Fizz')
        } else if (i%3 === 0){
            console.log('Buzz')
        } else {
            console.log(i)
        }
}*/


// this code works unless you hit rule 4 with%17
let fizz = 'Fizz'
let buzz = 'Buzz'
let bang ='Bang'
let bong ='Bong'
let fezz = 'Fezz'
let num =0;


let three = function(number){
    if(number%3===0){
        return fizz;
    }else{
        return number;
    }
}
let five = function(number){
    if(number%5===0){
        return buzz;
    }else{
        return number;
    }
}


let seven = function(number){
    if(number%7 ===0){
        return bang
    }else{
        return number;
    }
}

let eleven = function(number){
    if(number%11 ===0){
        return bong;
    } else{
        return number;
    }
}

let thirteen = function (number){
    if(number%13 === 0){
        return fezz;
    } else{
        return number;
    }
}

let seventeen = function(number){
    if(number%17 === 0){
        result
    }
}



// for (let i=1; i<285; i++){
//     let result =''
//     let worked3 = three(i);
//     let worked5 = five(i)
//     let worked7 = seven(i)
//     let worked11 = eleven(i)
//     let worked13 = thirteen(i)
//     if(worked3 !==i ){ result= worked3  }
//     if(worked13 !==i){ result = result + worked13}
//     if(worked5 !==i){ result = result + worked5}
//     if(worked7 !==i){ result = result + worked7}
//     if(worked11 !==i){
//         if ( worked13 === i) {result = worked11}
//         else{
//             result = worked13 + worked11
//         }
    
//     }
//     if(result=== ''){ result = i}
    
//    console.log(result)
// }



// This code works for all 4 rules

let threeBis = function(array, number){
    if(number%3===0){
        array.push('Fizz');
    }
    return array
}

let fiveBis = function(array, number){
    if(number%5===0){
        array.push('Buzz');
    }
    return array
}

let sevenBis = function(array, number){
    if(number%7===0){
        array.push('Bang');
    }
    return array
}

let elevenBis = function(array,number){
    if(number%11===0){
        array.length=0
        array.push('Bong');
    } 
    return array
}

// I needed help to implement this rule
let thirteenBis = function(array,number){
    if(number%13===0){
     
        let position = -1
        for ( let i=0; i<array.length; i++){
            if(array[i].startsWith('B')){
                position = i
                break
            }
        }
        if (position !== -1){
         array.splice(position,0,'Fezz')  
        }else {
            array.push('Fezz')
        }
    } 

    return array
}

let seventeenBis = function(array,number){
    if(number%17 ===0){
       array.reverse()
    }
    return array
}

for (let i=1; i<300; i++){
    let array =[]
    threeBis(array,i)
    fiveBis(array,i)
    sevenBis(array,i)
    elevenBis(array,i)
    thirteenBis(array,i)
    seventeenBis(array,i)
    if (array.length === 0) {
        console.log(i)
    } else {
        console.log(array.join(''))};
    
}