function introduction(name) {
    return `Hi, my name is ${name}.`;
}

console.log(introduction("amina"));

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguage("John", "Ember.js"));

function introductionWithLanguageOptional(name, language) {
    language = language || "JavaScript"; // Use default value if language is not provided
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguageOptional("John", "JavaScript"));
// Output: Hi, my name is John and I am learning to program in JavaScript.

console.log(introductionWithLanguageOptional("Gracie"));
// Output: Hi, my name is Gracie and I am learning to program in JavaScript.

console.log(introductionWithLanguageOptional("Gracie", "javascript"));
// Output: Hi, my name is Gracie and I am learning to program in javascript.
