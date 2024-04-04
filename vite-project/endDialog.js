export function endDialog(reason){
    const main = document.querySelector('main');

    main.classList.add('blur-sm');

    document.body.removeChild(document.querySelector('#fixed'));

    let endDialog = document.createElement('div');
    endDialog.classList.add('w-1/2', 'h-1/4', 'bg-amber-300', 'text-white', 
    'text-2xl', 'flex', 'justify-center', 'items-center', 'rounded-lg', 
    'fixed', 'left-1/4', 'top-1/4' , 'transform', 'absolute', 
    'z-10', 'flex-col');

    const text = document.createElement('p');
    text.classList.add('text-center', 'text-black', 'font-bold');

    text.textContent = reason;
    endDialog.append(text);
    
    let restartButton = document.createElement('button');
    restartButton.textContent = "Restart";

    restartButton.classList.add('bg-green-600', 'text-white', 'p-2', 'm-2', 'rounded-md', 'hover:scale-110');
    restartButton.addEventListener('click', () => {window.location.reload();});

    endDialog.append(restartButton);
    document.body.append(endDialog);
}