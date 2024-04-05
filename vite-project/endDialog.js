export function endDialog(reason){
    const main = document.querySelector('main');

    main.classList.add('blur-sm');

    document.body.removeChild(document.querySelector('#fixed'));

    let endDialog = document.createElement('div');
    endDialog.classList.add('dialog');

    const text = document.createElement('p');
    text.classList.add('text-center', 'text-black', 'font-bold');

    text.textContent = reason;
    endDialog.append(text);
    
    let restartButton = document.createElement('button');
    restartButton.textContent = "Restart";

    restartButton.classList.add('custom-button');
    restartButton.addEventListener('click', () => {window.location.reload();});

    endDialog.append(restartButton);
    document.body.append(endDialog);
}