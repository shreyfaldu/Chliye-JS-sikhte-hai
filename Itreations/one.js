//for

for (let index = 0; index <= 10; index++) {
    const element = index;
    if(index == 5){
        console.log("5 is best number")
    }
    console.log(element)
    
}
//Maths Table

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop: ${i}`)
    for (let j = 1; j <= 10; j++) { 
        console.log(`Inner loop: ${j} and Outer loop: ${i} `)
        console.log(i + '*' + j + '=' + i*j)
        
    }
    
}

//How to print array
let myArray = ["Flash", "Superman", "Saktimaan"]
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}

//Keyword

//Break , Continue

//Break
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5")
        break;
    }
    console.log(`Value of i id: ${index}`)
    
}

//continue
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5")
        continue;
    }
    console.log(`Value of i id: ${index}`)
    
}



