

// audio.addEventListener('click',function(){
//     soundcontainer.classList.remove('activated');
// })
//state -> localSTorage
// if (state == sound.off) {
//     textCOlor = red;
//     soundShouldSTop;
// } else if(state == spound.on) {
//     textCOlor = green;
//     soundShouldContinue;
// }

const logo = document.querySelector('.logo-name');
const body = document.querySelector('body');

logo.addEventListener('reload',function(){
    body.classList.add('activated');
})

