import Alpine from 'alpinejs';

const players = (config) => {
    return {
        playerName: JSON.parse(window.localStorage.getItem("players")),
        disablePlayers: false,
        getPlayers() {
            if (this.playerName) {
               return this.playerName
            } else {
                window.localStorage.setItem("players", JSON.stringify([]));
                console.log(this.playerName)
            }
        },
        savePlayer(name) {
            let players = JSON.parse(window.localStorage.getItem("players"));
            players.push(name);
            window.localStorage.setItem("players",JSON.stringify(players));
            this.playerName = players;
            return players;
        },
        saveScore(key,score) {
            this.playerName[key]["score"] = this.playerName[key]["score"] + score;
            window.localStorage.setItem("players",JSON.stringify(this.playerName));
            document.querySelector(".btn-next").removeAttribute("disabled")
        }
    }
}
Alpine.data("players", players);