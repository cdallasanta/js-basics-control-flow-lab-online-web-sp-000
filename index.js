// Write your code in this file!
scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 2000 && distance < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do";
  }
}

ternaryCheckCity(destination) {
  return destination === 'NYC' ? "Okay, sounds good." : "No go.";
}

switchOnCharmFromTip(tip) {
  let response;
  switch(tip) {
    case "generous":
      response = "Thank you so much."
      break;
    case "not as generous":
      response = "Thank you.";
    default:
      response = "Bye.";
  }

  return response;
}
