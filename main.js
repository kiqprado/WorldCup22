function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg " alt=" Bandeira do ${player1} " />
      <strong> ${hour} </strong>
      <img src="./assets/icon-${player2}.svg " alt=" Bandeira do ${player2} " />
    </li>
  `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class= "card" style= "animation-delay: ${delay}s" >
      <h2> ${date} <span> ${day} </span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "Domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "10:00", "iran") +
    createGame("senegal", "13:00", "netherlands") +
    createGame("united-states", "16:00", "wales")
  ) +
  createCard("28/11", "sexta", createGame("portugal", "16:00", "senegal"))
