const timerElement = document.getElementById('timer');

export class Timer{
    updateTimerDisplay(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timerElement.classList.add('text-2xl');
        timerElement.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }   
    
    startTimer() {
        let secondsElapsed = 0;
        this.updateTimerDisplay(secondsElapsed);
    
        const timerInterval = setInterval(() => {
            secondsElapsed++;
            this.updateTimerDisplay(secondsElapsed);
        }, 1000);
    }
}