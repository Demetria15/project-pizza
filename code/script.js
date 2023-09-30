// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
let username = prompt("What's your name?");
alert("Hi " + username + "!");
// Step 2 - Food choice
// Your code goes here

// Determine the chosen food type and display a message

let foodChoices = ["Pizza", "Pasta", "Salad"];
let foodChoice = prompt(`Choose a food type:\n1. ${foodChoices[0]}\n2. ${foodChoices[1]}\n3. ${foodChoices[2]}`);
if (foodChoice === "1") {
  alert(`You chose ${foodChoices[0]}`);
} else if (foodChoice === "2") {
  alert(`You chose ${foodChoices[1]}`);
} else if (foodChoice === "3") {
  alert(`You chose ${foodChoices[2]}`);
} else {
  alert("Invalid choice. Please choose a valid option (1, 2, or 3).");
}



// Step 3 - Subtype choice
// Your code goes here

// Subtype choices based on the selected food type
let typeOption = [
  ["Napolitana", "Hawaian", "Pepperoni"],
  ["Spaghetti Carbonara", "Fettuccine Alfredo", "Cheesy Tortellini"],
  ["Caesar", "Caprese", "Greek"],
];
let foodType = prompt(`Select a ${foodChoices[foodChoice - 1]} type.\nEnter a number: \n1 - ${typeOption[foodChoice - 1][0]}\n2 - ${typeOption[foodChoice - 1][1]}\n3 - ${typeOption[foodChoice - 1][2]}`);
if(foodType >= 1 && foodType <= 3){
  alert(`You have chosen ${typeOption[foodChoice -1][foodType -1]} ${foodChoices[foodChoice -1]}!`);
}
else{
  alert(`Invalid ${foodChoices[foodChoice -1]} type choice.`);
}
  

// Step 4 - Age
// Your code goes here
const age = prompt("Is this food for a child or an adult? Type your age:");
let cost;
const yesOption = "Yes";
const noOption = "No";

if (age < 18) {
  cost = 8; // Cost for child
  alert(`One child sized ${typeOption[foodChoice -1][foodType -1]} ${foodChoices[foodChoice -1]} will be prepare for you. That'll be ${cost}€. Are you sure you want to order this? \n Enter a number to confirm: \n 1 - ${yesOption} \n 2 - No`);
} else if (age >= 18) {
  cost = 18; // Cost for adult
  alert(  `One adult ${typeOption[foodChoice -1][foodType -1]} ${foodChoices[foodChoice -1]} size will be prepare for you. That'll be ${cost}€. Are you sure you want to order this? \n Enter a number to confirm: \n 1 - ${yesOption} \n 2 - ${noOption}`);
}



// Step 5 - Order confirmation
// Your code goes here

const confirmation = prompt(`Confirm your order:\n1 - ${yesOption}\n2 - ${noOption}`);

if (confirmation === "1") {
  alert("Thank you for your order! Your meal is in preparation. You can pick it up soon!");
} else if (confirmation === "2") {
  alert("Not hungry right now? Come back and order when you are hungry.");
} else {
  alert(`Make a choice. Select 1 for ${yesOption} or 2 for ${noOption}`);
}