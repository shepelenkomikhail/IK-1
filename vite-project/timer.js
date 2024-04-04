import { endDialog } from "./endDialog";
const timerElement = document.getElementById('timer');

export class Timer {
    constructor() {
        this.timerInterval = null;
    }

    updateTimerDisplay(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const displayText = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        
        timerElement.classList.add('text-2xl');
        timerElement.textContent = displayText;
    }   
    
    startTimer() {
        this.isTimerStopped = false;
        let secondsElapsed = 0;
        this.updateTimerDisplay(secondsElapsed);
    
        this.timerInterval = setInterval(() => {
            secondsElapsed++;
            this.updateTimerDisplay(secondsElapsed);
        }, 1000);
    }

    setCountdown(min, sec) {    
        if (this.timerInterval) clearInterval(this.timerInterval);

        let totalSeconds = parseInt(min) * 60 + parseInt(sec);
        this.updateTimerDisplay(totalSeconds);
        
        this.timerInterval = setInterval(() => {
        totalSeconds--;

        if (totalSeconds < 0){
            endDialog("Out of time! You lost!");
            clearInterval(this.timerInterval);
        }
        else this.updateTimerDisplay(totalSeconds);

        }, 1000);
    } 
}
