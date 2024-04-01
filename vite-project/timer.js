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
}
