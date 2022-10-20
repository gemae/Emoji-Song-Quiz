function init() {
    getItems();
}

function getItems() {
    const songs = [
        {
            title: "A Horse With No Name",
            emojis: ["🐴","❎","🏷️"],
            singer: "America",
            song: "horse.mp3"
        },
        {
            title: "Shut Down",
            emojis: ["🙊","👇"],
            singer: "BlackPink",
            song: "shutdown.mp3"
        },
        {
            title: "Ocean Eyes",
            emojis: ["🌊","👀"],
            singer: "Billie Eilish",
            song: "oceanseyes.mp3"
        } ,
        {
            title: "Snap",
            emojis: ["🫰"],
            singer: "Rosa Linn",
            song: "snap.mp3"
        },
        {
            title: "Dear Future Husband",
            emojis: ["🦌","🗓️","🤵"],
            singer: "Meghan Trainor",
            song: "dear future husband.mp3"
        },
        {
            title: "Talking to the moon",
            emojis: ["🗣️","👉","🌚"],
            singer: "Bruno Mars",
            song: "Talking to the Moon - Bruno Mars (Lyrics) _ Talking to the moon.mp3"
        },
        {
            title: "Water under the bridge",
            emojis: ["💧","👇","🌉"],
            singer: "Adelle",
            song: "WATER UNDER THE BRIDGE - ADELE (Lyrics).mp3"
        },
        {
            title: "Ill never go",
            emojis: ["🙋‍♀️","🙅‍♀️","🏃‍"],
            singer: "Erik Santos",
            song: "Erik Santos - I'll Never Go (Lyrics) _ Erik Santos Collection.mp3"
        },
        {
            title: "liwanag sa dilim",
            emojis: ["💡","🌃"],
            singer: "Rivermaya",
            song: "Liwanag Sa Dilim (Acoustic) - Rivermaya.mp3"
        },
        {
            title: "Back at one",
            emojis: ["👈","☝️"],
            singer: "Brian McKnight",
            song: "Brian McKnight - Back At One (Lyrics).mp3"
        },
        {
            title: "Hey Soul Sister",
            emojis: ["🗣️","👻","🧑‍🤝‍🧑"],
            singer: "Train",
            song: "Train - Hey, Soul Sister (Official Video).mp3"
        },
        {
            title: "I aint worried",
            emojis: ["🙋‍♀️","🙅‍♀️","😟‍"],
            singer: "OneRepublic",
            song: "OneRepublic - I Ain’t Worried (From “Top Gun_ Maverick”) [Official Music Video].mp3"
        },
        {
            title: "Airplanes",
            emojis: ["🛩️","🛫"],
            singer: "B.o.B",
            song: "B.o.B - Airplanes (feat. Hayley Williams of Paramore) [Official Video].mp3"
        },
        {
            title: "Rain over me",
            emojis: ["🌧️","👆","🙋‍♀️"],
            singer: "Pitbull",
            song: "Pitbull - Rain Over Me (Lyrics) ft. Marc Anthony.mp3"
        }, 
        {
            title: "Lonely is the night",
            emojis: ["🙍‍♀️","🐟","🌃"],
            singer: "Air Supply",
            song: "LONELY IS THE NIGHT -  AIR SUPPLY lyrics.mp3"
        },
        {
            title: "I started a joke",
            emojis: ["🙋‍♀️","🏁","🃏"],
            singer: "Bee Gees",
            song: "Y2Mate.is - I Started A Joke  Bee Gees  Lyrics-1NBSk4mH_GE-64k-1654530924002.mp3"
        },
        {
            title: "Blue Sky",
            emojis: ["🫐","🌌"],
            singer: "Hale",
            song: "Y2Mate.is - BLUE SKY - Hale-izvqMZZysO0-64k-1654530248939.mp3"
        }, 
        {
            title: "No tears left to cry",
            emojis: ["🙅‍♀️","😢","👈","😭"],
            singer: "Ariana Grande",
            song: "Y2Mate.is - Ariana Grande - No Tears Left To Cry (Audio)-Gc9BwDR1KSo-64k-1654531390014.mp3"
        },
        {
            title: "This city",
            emojis: ["👉","🏙️"],
            singer: "Sam Fischer",
            song: "Y2Mate.is - Sam Fischer - This City (Official Video)-s3IAHXP1dfs-64k-1654531152457.mp3"
        }, 
        {
            title: "Cotton Candy",
            emojis: ["☁️","🍭"],
            singer: "Arthur Nery",
            song: "Y2Mate.is - Arthur Nery - Cotton Candy (Official Lyric Video)-R5BhhhgNbn0-64k-1654533720284.mp3"
        }, 
    ]
    window.localStorage.setItem('songs', JSON.stringify(songs));
    let count = window.localStorage.getItem('count');
    if (!count) {
        window.localStorage.setItem('count', 1);
    }
}


export default {init};
