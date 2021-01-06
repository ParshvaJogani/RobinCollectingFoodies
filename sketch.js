var db,name,contact,address,email,donorInfo;
var fresh,mealType,mealKind,quantity,time;

var nameElement,contactElement,addressElement,emailElement,donorInfoElement;
var freshElement,mealTypeElement,mealKindElement,quantityElement,timeElement,foodInfoElement,foodInfo;

function setup() {
  createCanvas(displayHeight,displayWidth);
  db = firebase.database();
  db.ref("DonorInfo").on("value", readDonorInfo);
  db.ref("FoodInfo").on("value", readFoodInfo);

donorInfoElement = createElement('h1','Donor Information');
nameElement = createElement('h2');
contactElement = createElement('h2')
addressElement = createElement('h2')
emailElement = createElement('h2');

foodInfoElement = createElement('h1','Food Information');
freshElement = createElement('h2');
mealTypeElement = createElement('h2');
mealKindElement = createElement('h2');
quantityElement = createElement('h2');
timeElement = createElement('h2');

}

function draw() {
  background(255,255,255);  
  donorInfoElement.position(width/2,10);
  nameElement.html("Name: "+name);
  nameElement.position(20,100);
  emailElement.html("Email: "+email);
  emailElement.position(20,150);
  contactElement.html("Contact: "+contact);
  contactElement.position(20,200);
  addressElement.html("Address: "+address);
  addressElement.position(20,250)


  strokeWeight(8);
line(0,320,displayWidth,320)

  foodInfoElement.html("Food Information");
  foodInfoElement.position(width/2,350);
  freshElement.html("Fresh: "+fresh);
  freshElement.position(20,400);
  mealTypeElement.html("Type: "+mealType);
  mealTypeElement.position(20,450);
  mealKindElement.html("Kind: "+mealKind);
  mealKindElement.position(20,500);
  quantityElement.html("Quantity: "+quantity);
  quantityElement.position(20,550);

  drawSprites();
}

function readDonorInfo(data) {
donorInfo = data.val();
name = donorInfo.name
email = donorInfo.email
address = donorInfo.address
contact = donorInfo.contact
console.log(name)
}

function readFoodInfo(data) {
  foodInfo = data.val();
  fresh = foodInfo.fresh;
  mealType = foodInfo.mealType;
  mealKind = foodInfo.mealKind;
  quantity = foodInfo.quantity;
  }