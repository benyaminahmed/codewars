const greet = (language) => {

  const greetings = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }
  
  if(greetings[language] !== undefined) { 
    return greetings[language];
  }
  
  return greetings['english'];
}

console.log('Examples:')

console.log(`english: ${greet('english')}`)

console.log(`finnish: ${greet('finnish')}`)

console.log(`irish: ${greet('irish')}`)

console.log(`polish: ${greet('polish')}`)