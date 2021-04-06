const button = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

button.addEventListener('click', openModal)
function openModal(){
    modalWrapper.classList.toggle('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'
    
    if(isEscKey){
        modalWrapper.classList.toggle('invisible')
    }
}) 
