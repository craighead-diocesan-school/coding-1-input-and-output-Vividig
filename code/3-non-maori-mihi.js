// ####################################
// #### ----- Non-Maori Mihi ----- ####
// ####################################

function nonMaoriMihi() {
  alert('Non-Māori Mihi')
  alert('This program will help you build a basic mihi.')
  alert("First, you'll be asked a series of questions, then your mihi will be ready.")

  let mountain = prompt("What is your mountain?")
  let water = prompt("What is your river/ocean/lake/bay-harbour?")
  let home = prompt("What is your home town")
  let name = prompt("What is your name")
  // more questions and answers here

  alert('Your mihi:')
  // more outputs here
  alert('Tēnā koutou, ')
  alert('Kei te mihi au ki a ' + mountain )
  alert('Kei te mihi au ki a ' + water )
  alert('Ko Te Tiriti o Waitangi te waka,')
  alert('Ko Aotearoa te iwi,')
  alert('Nō ' + home + ' au,')
  alert('Ko ' + name + ' tōku ingoa,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou, katoa.')
}