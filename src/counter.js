import Alpine from 'alpinejs';

const count = () => {
    let songList = JSON.parse(window.localStorage.getItem('songs'));
    let listLength = songList.length;

    return {
        getCount: window.localStorage.getItem('count'),
        totalScore: window.localStorage.getItem('score'),
        listLength: listLength,
        finalResult : false,
        addCount() {
            document.querySelector(".btn-next").setAttribute("disabled","disabled")
            this.removeHints();
            if (this.getCount < listLength) {
                let getLastCount = window.localStorage.getItem('count');
                if(getLastCount > 0){
                getLastCount++;
                window.localStorage.setItem('count', getLastCount);
                this.getCount = getLastCount;
                } else {
                    window.localStorage.setItem('count', 1);
                    let getLastCount = window.localStorage.getItem('count');
                    this.getCount = getLastCount;
                }
                this.totalScore = null;
                this.score();
            }else {
                document.querySelector('.final-results').style.display="flex";
                let players = JSON.parse(window.localStorage.getItem("players"));
                let scores = [];
                players.forEach(el => {
                    var obj = [];
                    obj.push(el.key);
                    obj.push(el.score);
                    scores.push(obj)
                });
                scores.sort(function(a,b){
                    return b[1] - a[1]
                });
                let winner = document.querySelector(".winner-name");
                let runnerup = document.querySelector(".runnerup-name");
                let winnerPoint = document.querySelector(".winner-point");
                let runnerupPoint = document.querySelector(".runnerup-point");
                let score1 = parseInt(scores[0]);
                let score2 = parseInt(scores[1]);
                console.log(score1)
                console.log(score2)
                winner.textContent = players[score1]["name"];
                runnerup.textContent = players[score2]["name"];
                winnerPoint.textContent = players[score1]["score"];
                runnerupPoint.textContent = players[score2]["score"];
            }
        },
        start() {
            let songList = JSON.parse(window.localStorage.getItem('songs'));
            if (this.getCount) {
                var currentSong = songList[this.getCount-1];
            }
            return currentSong;
        },
        getEmojis(){
            let currSong = this.start();
            return currSong["emojis"];
        },
        getSong(){
            let currSong = this.start();
            return `./src/songs/${currSong['song']}`;
        },
        getFullTitle() {
            let currSong = this.start();
            let title = currSong["title"];
            let titleArr = title.split(" ");
            return titleArr;
        },
        getTitle() {
            let title = this.getFullTitle();
            let titleJoin = [];
            title.forEach(el => {
                titleJoin.push(el.split(""));
            })
            return titleJoin;
        },
        hints() {
            let existing = window.localStorage.getItem('hintsList');
            if (existing) {
                existing = JSON.parse(existing);
            } else {
                existing = {"hintCount":"0","hints":{}};
            }
            let hintCount = parseInt(existing["hintCount"]);

            if (hintCount < 3) {
                hintCount++;
                existing["hints"][`Hint${hintCount}`] = this.randomNum();
                window.localStorage.setItem('hintsList', JSON.stringify(existing));
                existing["hintCount"] = hintCount;
                window.localStorage.setItem('hintsList', JSON.stringify(existing));
                this.showHint();
                this.score(5)
            }else{
                alert("No Hints Left!");
            }
        },
        // randomNum() {
        //     var existing = window.localStorage.getItem('hintsList');
        //     var numHints = [];
            
        //     this.getTitle().forEach(arr => {
        //         if (existing) {
        //             existing = JSON.parse(existing);
        //             let title_container = document.querySelectorAll(".song_wrap");
        //             let getRand = existing["hints"];
        //             for (let i = 0; i < existing["hintCount"]; i++) {
        //                 var currNum = Math.floor(Math.random() * arr.length);
        //                 Hint1[1]
        //                 for(let k = 0; k < getRand[`Hint${i+1}`].length; k++) {
                            
        //                     if(currNum != getRand[`Hint${i+1}`][k]){

        //                     }
        //                     numHints.push(Math.floor(Math.random() * arr.length));
        //                 }
        //             }
        //             console.log(getRand);
        //         } else {
        //             numHints.push(Math.floor(Math.random() * arr.length));
        //         }
        //     })
        //     return numHints;
        // },
        randomNum() {
            var numHints = [];
            this.getTitle().forEach(arr => {
                numHints.push(Math.floor(Math.random() * arr.length));
            })
            return numHints;
        },
        removeHints() {
            window.localStorage.removeItem('hintsList');
            let letter = document.querySelectorAll(".song_letter li");
            letter.forEach(el => el.getAttribute("style") ? el.style.visibility = "hidden" : '');
            
        },
        showAnswer(){
            let letter = document.querySelectorAll(".song_letter li");
            letter.forEach(el => el.style.visibility = "visible");
            let myAudio = document.querySelector(".audio");
            myAudio.play();
        },
        showHint() {
            var existing = window.localStorage.getItem('hintsList');
            if (existing) {
                existing = JSON.parse(existing);
                let title_container = document.querySelectorAll(".song_wrap");
                let getRand = existing["hints"];
                for (let i = 1; i <= existing["hintCount"]; i++) {
                    let j = 0;
                    title_container.forEach(list => {
                        let letter = list.querySelectorAll(".song_letter li");
                        letter[getRand[`Hint${i}`][j]].style.visibility = "visible";
                        j++;
                    });
                }
            }   
        },
        score(num=0) {
            if (this.totalScore) {
                this.totalScore = this.totalScore - num;
                window.localStorage.setItem('score', JSON.stringify(this.totalScore));
            } else {
                this.totalScore = 20;
                window.localStorage.setItem('score', JSON.stringify(this.totalScore));
            }
            return this.totalScore;
        }
    }
}

Alpine.data("count", count);
