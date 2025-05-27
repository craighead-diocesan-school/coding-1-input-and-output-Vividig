// ####################################
// ######## ----- MabLibs ----- #######
// ####################################

function madLibs() {

  alert('This program will help you build a basic story.')
  alert("First, you'll be asked a series of questions, then your story will be ready.")

  let exclamation = prompt("give me a exclamation?")
  let adverb = prompt("give me a adverb?")
  let noun = prompt("give me a noun?")
  let adjective = prompt("give me a adjective?")


  alert('Your story:')
  // more outputs here
  alert(exclamation + '! he said ' + adverb + ' as he jumped into his convertible ' + noun + ' and drove off with his ' + adjective + ' wife.')
}