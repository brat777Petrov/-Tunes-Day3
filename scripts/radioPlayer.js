export const radioPlayerInit = () => {

    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');
    const radioVolume = document.querySelector('.radio-volume');

    const audio = new Audio();
    audio.type = 'audio/aac';

    const changeIcon = () => {

        if (audio.paused) {
            radio.classList.remove('play');
            radioStop.classList.add('fa-play');
            radioStop.classList.remove('fa-stop');
        } else {
            radio.classList.add('play');
            radioStop.classList.remove('fa-play');
            radioStop.classList.add('fa-stop');
            
        }

    };
    
    const selectItem = elem => {
        radioItem.forEach(item => item.classList.remove('select'));
        elem.classList.add('select');

    }

    radioStop.disabled = true;

    radioNavigation.addEventListener('change', event => {

        const target = event.target;
        const parrent = target.closest('.radio-item');
        selectItem(parrent);

        const title = parrent.querySelector('.radio-name').textContent;
        radioHeaderBig.textContent = title;

        const urlImg = parrent.querySelector('.radio-img').src;
        radioCoverImg.src = urlImg;
        
        radioStop.disabled = false;
       audio.src = target.dataset.radioStantion;

       audio.play();
        changeIcon();
    } )


    radioStop.addEventListener('click', () => {

        if (audio.paused) {
                audio.play();
        } else {
                audio.pause();
        }
        changeIcon();
    })

    radioVolume.addEventListener('input', () => {

        audio.volume = radioVolume.value/100;

    })

    radioVolume.value = radio.volume*100;
}