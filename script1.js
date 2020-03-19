alert("Answer the questions, please");
let profArray = ["Miner", "Programmer", "Teacher", "Actor", "Drawer", "Manager"]
let country = prompt("Enter the country where you'd like to live");
let finishQuestinoning = false;
let chosenProffesion = false;
let childrenCount = -1;
let isMan = confirm("Are you man?");
let isGay = confirm("Are you gay?");
let partner;
let proffesion = "Jobless";
for(let i = 0; i < profArray.length; i++){
  chosenProffesion = confirm(`Do you want to work as ${profArray[i]}`);
  if(chosenProffesion){
    proffesion = profArray[i];
    break;
  }
}
if(isMan){
  if(isGay){
    partner = "husband Anthony";
  }
  else{
    partner = "wife Mary";
  }
}
else{
  if(isGay){
    partner = "wife Mary"
  }
  else{
    partner = "husband Anthony"
  }
}
while(!finishQuestinoning){
  childrenCount += 1;
  finishQuestinoning = confirm(`Do you want ${childrenCount} children`);
}

alert(`You will live in ${country} with ${childrenCount} children. Your partner will be ${partner}. You will work as ${proffesion}`);
