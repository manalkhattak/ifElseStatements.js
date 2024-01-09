// ControlFlow
//    -if else
//    - Multiple if else
//    - Nested if else

// let age = prompt("What is your age?")
// if (age >= 60){
//     alert("You are too old")
// }
// else if (age >= 40){
//     alert("You are old")
// }
// else if (age >= 30){
//     alert("You are young")
// }
// else if (age >=20){
//     alert("You are too young")
// }
// else if (age >= 13 ){
//      alert("You are a teenager")
// }
// else if (age >= 6){
//     alert("you are a kid")
// }
// else if (age <= 5){
//     alert("You are a toddler")
// }
// percentage 
// let percentage = prompt("What is your percentage?")
// let grade = ''
// if (percentage >= 90){
//     grade = "A+"
// }
// else if (percentage >= 80){
//     grade = "A"
// }
// else if (percentage >= 70){
//     grade = "B"
// }
// else if (percentage >= 60){
    //     grade = "C"
// }
// else if (percentage >= 50){
//     grade = "D"
// }
// else if (percentage <= 40){
//     grade = "E"
// }
// alert(`Your grade is ${grade}`)


// if (percentage >= 90){
//     alert("You got an A+ grade!")
// }
// else if (percentage >= 80){
    //     alert("You got an A grade!")
// }
// else if (percentage >= 70){
//     alert("You got B grade!")
// }
// else if (percentage >= 60){
//     alert("You got C grade!")
// }
// else if (percentage >= 50){
//     alert("You got D grade!")
// }
// else if (percentage <= 40){
//     alert("You got an E grade!")
// }

// let purchaseAmount = prompt("Enter Total Amount:")
// let discount = 0
// if (purchaseAmount >= 50000){
//     discount = .20
// }
// else if (purchaseAmount >= 40000){
//     discount = .15
// }
// else if (purchaseAmount >= 30000){
//     discount = .12
// }
// else if (purchaseAmount >= 20000){
//     discount = .10
// }
// else if (purchaseAmount >= 15000){
//     discount = .05
// }
// else if (purchaseAmount >= 10000){
//     discount = .02
// }
// else{
//     discount = 0
// }
// alert(`
//        Your bill before discount = ${purchaseAmount}
//        Your discount is ${discount * 100}%
//        Your bill after discount = ${purchaseAmount - purchaseAmount*discount}
//   `)

// Nested ifs
// election
// voter list
// valid CNIC
// "you can cast vote"
let day = prompt("Is today election?")
if (day=='yes'){
    let voterList = prompt("Is your name in the voter list?")
    if (voterList=="yes"){
        let cnic = prompt("Do you have a valid CNIC?")

        if (cnic=="yes"){
            alert("You can cast the vote.")
    }
    else{
        alert("You can not cast the vote because you don't have your CNIC.")
    }
    
     alert("You can not cast the vote because your name is not in the voter list.")
 }
}
else{
    alert("You can not cast the vote because today is not election.")
}



