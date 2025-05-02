function getMoodMessage(name, mood) {
  let message = "Hey " + userName + "! ";

  if (mood === "happy") {
    message += "That’s awesome. Keep it going!";
  } else if (mood === "tired") {
    message += "Don’t forget to rest. You’ve earned it.";
  } else if (mood === "stressed") {
    message += "Take a breath. Better days are ahead.";
  } else {
    message += "You're doing your best. That matters.";
  }

  return message;
}

let finalMessage = getMoodMessage("Kailan", "stressed");
console.log(finalMessage);

for (let i = 0; i < 3; i++) {
  console.log("You've got this, " + userName + "!");
}
