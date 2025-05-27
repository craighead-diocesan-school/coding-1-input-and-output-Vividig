// ####################################
// ######## ----- Welcome ----- #######
// ####################################

function welcome() {
  let name = prompt("What's your name?")
  alert('Hello ' + name)

  alert('We want to know if you like programming!')

  let answer = prompt('Do you like programming ' + name + '?')

  alert('Great, you said ' + answer + '!')
  alert("Let's learn some code today.")
}

function questionnaire() {
  let name = prompt("What's your name?")
  alert('Hello ' + name)

  let answer = prompt('What did you have for breakfast ' + name + '?')
  alert( answer + ' is good food!')

  let colour = prompt('What is your favourite colour ' + name + '?')
  alert( colour + ' is a nice colour!')
}

function Birthday() {
  let name = prompt("How old are you?")
  alert('Nice you are ' + name)

  let answer = prompt('How old will u be in your next birthday?')
  alert( answer + ' one year older!')
}

function Fullname() {
  let firstName = 'Virginia'
  alert(firstName)

  let lastName = 'Woolf'
  let FullName = firstName + ' ' + lastName
  alert(FullName)

  alert('Hello ' + firstName + '. Your full name is ' + FullName + '.')
}

