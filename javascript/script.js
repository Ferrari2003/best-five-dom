// document.getElementById("playerBtn1").addEventListener("click",function(){
//   const player =document.getElementById("best_player");
//   const li =document.createElement("li");
//   li.innerText ="King Of pele";
//   player.appendChild(li)
// })

// document.getElementById("playerBtn2").addEventListener("click",function(){
//   const player1= document.getElementById("best_player");
//   const li=document.createElement("li")
//   li.innerText ="Prince Ronaldinho";
//   player1.appendChild(li)
// })

// document.getElementById("playerBtn3").addEventListener("click",function(){
//   const player2= document.getElementById("best_player");
//   const li=document.createElement("li")
//   li.innerText ="KakA";
//   player2.appendChild(li)
// })

// document.getElementById("playerBtn4").addEventListener("click",function(){
//   const player3= document.getElementById("best_player");
//   const li=document.createElement("li")
//   li.innerText ="Neymar.jr";
//   player3.appendChild(li)
// })

// document.getElementById("playerBtn5").addEventListener("click",function(){
//   const player4= document.getElementById("best_player");
//   const li=document.createElement("li")
//   li.innerText ="Lionel Messi";
//   player4.appendChild(li)
// })


document.getElementById('select_btn2').addEventListener('click', function () {
  const selectedPlayersList = setName('selected_players_list', 'Paulo Dybala')
})

document.getElementById('select_btn3').addEventListener('click', function () {
  const selectedPlayersList = setName(
    'selected_players_list',
    'Ka kA'
  )
})
document.getElementById('select_btn4').addEventListener('click', function () {
  const selectedPlayersList = setName('selected_players_list', 'Neymar.js')
})
document.getElementById('select_btn5').addEventListener('click', function () {
  const selectedPlayersList = setName('selected_players_list', 'Lieonel Messi')
})
document.getElementById('select_btn6').addEventListener('click', function () {
  const selectedPlayersList = setName('selected_players_list', 'CR_7')
})

document
  .getElementById('calculate_btn')
  .addEventListener('click', calculatePlayerExpense)

document
  .getElementById('calculate_total_btn')
  .addEventListener('click', calculateTotal)

function addListener(id) {
  document.getElementById(id).addEventListener('click', setName)
}

function setName(ulId, liName) {
  const selectedPlayersList = document.getElementById(ulId)
  const newElement = document.createElement('li')
  newElement.innerText = liName
  newElement.className = 'list_item'
  selectedPlayersList.appendChild(newElement)
}

// Calculate Section

function calculatePlayerExpense() {
  const perPlayerInput = document.getElementById('per_player_input')
  const perPlayerCost = +perPlayerInput.value
  const li = document.querySelectorAll('.list_item')
  const totalCost = perPlayerCost * li.length
  const playerExpense = document.getElementById('player_expense')
  playerExpense.innerText = totalCost
}

function calculateTotal() {
  const managerInput = document.getElementById('manager_cost')
  const mangerCost = +managerInput.value
  managerInput.value = ''
  const coachInput = document.getElementById('coach_cost')
  const coachCost = +coachInput.value
  coachInput.value = ''
  const perPlayerInput = document.getElementById('per_player_input')
  const perPlayerCost = +perPlayerInput.value
  perPlayerInput.value = ''
  const li = document.querySelectorAll('.list_item')
  const totalCost = perPlayerCost * li.length

  const total = document.getElementById('total_cost')
  total.innerText = mangerCost + coachCost + totalCost
}

