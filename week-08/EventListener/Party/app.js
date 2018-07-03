document.addEventListener('DOMContentLoaded', () => {
    const partyButton = document.querySelector('button');
    partyButton.addEventListener('click', partyOn);

    function partyOn (e) {
        document.body.classList.add('party');
    }
});