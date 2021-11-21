
console.log("Register page");
//Javascript objects

let salon={
    name:"Pet Salon",
    address:{
        street:"University",
        number: "855-k",
        zip: "55555",
        state: "AR",
        city: "Little Rock"

    },
    hours:{
        open: "9:00 am",
        close: "8:00 pm"
    },
    pets:[]
}
//create a Pet constructor
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
}
    // create three pets using the constructor
    let Scooby=new Pet("Scooby", 14, "Male", "German Shepard", "Grooming","Shaggy","870555555");
    let Wayne=new Pet ("Wayne", 1, "Male","Pit Bull", "Nail clipping", "Eric", "870555555" );
    let Zebra=new Pet("Stripes", 32, "Female", "Zebra", "Bath", "Eric", "870555555");
    salon.pets.push(Scooby,Wayne, Zebra);
    console.log(salon.pets);
    displayCards(Scooby);
    displayCards(Wayne);
    displayCards(Zebra);

//get the values from the input
let txtName=document.getElementById("petName");
let txtAge=document.getElementById("petAge");
let txtGender=document.getElementById("petGender");
let txtBreed=document.getElementById("petBreed");
let txtService=document.getElementById("petService");
let txtOwner=document.getElementById("ownerName");
let txtPhone=document.getElementById("ownerPhone");

function register(){
    //create a constructor using the values of the input.
    let newPet = new Pet(txtName.value, txtAge.value, txtGender.value, txtBreed.value, txtService.value, txtOwner.value, txtPhone.value )
    //push it into the array
    salon.pets.push(newPet)
    //display the pet on the console
    console.log(salon.pets);
    displayCards(newPet)
    //clear the inputs
    clear();
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtGender.value="";
    txtBreed.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
}

function simpleDisplay(){
    //Display Scooby on the console
    for(i=0; i<salon.pets.length; i++){
    console.log(salon.pets[i].name);
}
}
//call the function
// simpleDisplay();



