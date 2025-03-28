function sym(...args) {
  let symmDiff = args[0];
  for(let i =1; i < args.length; i++) {
    const leftDiff = symmDiff.filter(num => !args[i].includes(num));
    const rightDiff = args[i].filter(num => !symmDiff.includes(num));
    symmDiff = [...leftDiff, ...rightDiff];
  }
  return [...new Set(symmDiff)];
}

sym([1, 2, 3], [5, 2, 1, 4]);