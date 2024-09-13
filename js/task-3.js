

function checkForSpam(message) {

  
  const low = message.toLowerCase();

  if (low.includs(spam) || low.includs(sale)) {
    return true; 
}
  else {
    return false;
  }
}
console.log(low("Latest technology news")); 
console.log(low("JavaScript weekly newsletter")); 
console.log(low("Get best sale offers now!")); 
console.log(low("Amazing SalE, only tonight!")); 
console.log(low("Trust me, this is not a spam message")); 
console.log(low("Get rid of sPaM emails. Our book in on sale!")); 
console.log(low("[SPAM] How to earn fast money?"));

