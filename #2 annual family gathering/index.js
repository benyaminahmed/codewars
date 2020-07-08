const differenceInAges = ages => {
  
    let youngest = Math.min(...ages);
    let oldest = Math.max(...ages);
    
    return [youngest,oldest,oldest-youngest];
  }

console.log(differenceInAges([1,2,3]));