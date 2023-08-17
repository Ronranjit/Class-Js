// class Car{
//     constructor(color,speed){
//         this.color=color,
//         this.speed=speed
//     }
//     printing(){
//         console.log(`my car color is ${this.color} and my car speed is ${this.speed}`)
//     }

//     calc_veliocity(time){
//          let velocity
//          velocity = ` velocity of the car is ${this.speed/time}`
//          return velocity
//     }
// }


// let lambo = new Car('red',130)
// console.log(lambo)
// console.log(lambo.calc_veliocity(2))

class Car{
     static brandName = 'BMW'
    constructor(color,seats,year){
         this.color=color,
         this.seats=seats,
         this.year=year
    }
}

class Bike extends Car{
    constructor(color,seats,year,wheels){
        super(color,seats,year);
        this.wheels=wheels
    }
}

let myCar = new Car('red',4,2023)
myCar.brandName = "Audi"
console.log(myCar)

let myBike = new Bike('Black',2,2020,2)

console.log(myBike)

// reversing a string using prop

// let str = "hello world";
// let newString = "";
// let splitHello = str.slice(0,5).split("").reverse().join("");
// let splitWorld = str.slice(6,11).split("").reverse().join("");
// let reverseWord = `${splitHello} ${splitWorld}`;
// newString += reverseWord;
// console.log(newString);

// reversing a string using loop

// function reverseString(str){
//     let newString = "";

//     for(i=str.length-1;i>=0;i--){
//         newString += str[i]
//         console.log(newString)
//     }

// }

// reverseString("hello world")

// reversing a string using array 


   




function reverseString(str){
    
    
    let split =str.split(' ')
    
    
    const result = split.map(item=>item.split('').reverse().join(''))
    return result.join(' ')


    
}
console.log(reverseString('hello world'))


// q3

// function  union(arr1,arr2){
    
//     return  arr1.filter((item)=>arr2.includes(item))
// }
// console.log(union([1,2,3,4],[3,4,5,6]))
//q4

// function targetSum(num,sum){
    
//     for(i=0;i<=num.length;i++){
        
//         for(j=0;j<=num.length;j++){
            
//             if(num[i]+num[j]===sum){
                
//                 return [i,j]
//             }
//         }
//     }
// }

// console.log(targetSum([2,7,11,15],13))

