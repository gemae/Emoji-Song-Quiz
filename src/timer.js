import Alpine from 'alpinejs';

const timerClock = () => {
    return {
        timeLeft: 10,
        startHere() {
            if (this.timeLeft > 0) {
                setInterval(this.setTime(), 1000);
            }else {
                clearInterval()
            }
        },
        setTime() {
            this.timeLeft--;
            document.getElementById("seconds").innerHTML = String( this.timeLeft );
            
            setInterval(this.startHere(), 1000);
        }
    }
}
Alpine.data("timerClock", timerClock);

