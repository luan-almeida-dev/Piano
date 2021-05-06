// get all keys
const keys = document.querySelectorAll(".key")

function playNote(event) {
 
  let AudioKeyCode = getkeyCode(event);

  // typed or pressed key
  const key = document.querySelector(`.key[data-key="${AudioKeyCode}"]`) 

  // if key exists
  const cantFoundAnyKey = !key

  if (cantFoundAnyKey) {
     return;
  }

 addPlayingClass(key)
 playAudio(AudioKeyCode)
}

function addPlayingClass(key) {
    key.classList.add('playing')
  }

function getkeyCode (event) {
    let keyCode;

    const iskeyBoard = event.type === "keydown";
if(iskeyBoard){
    keyCode = event.keyCode;
} else {
    keyCode = event.target.dataset.key;
}
return keyCode;
}

function playAudio(AudioKeyCode){
    const audio = document.querySelector(`audio[data-key="${AudioKeyCode}"]`);
audio.currentTime=0;
audio.play();
}
function removePlayingClass(event){
    event.target.classList.remove("playing")
}
// click with mouse
 keys.forEach(function(key){
     key.addEventListener("click", playNote)
     key.addEventListener("transitionend", removePlayingClass)
 })
// keyboard type
window.addEventListener("keydown", playNote);