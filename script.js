	

	function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	if(!audio) return; //stop function from running

	audio.currentTime = 0; // rewind to start of sound

	audio.play();
	key.classList.add('playing');
	// key.classList.remove('playing');
	// key.classList.toggle('playing');
	}

	function removeTransition(e) {
		if(e.propertyName !== 'transform') return;
		this.classList.remove('playing')
	}

	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));

		window.addEventListener('keydown', playSound)

