function destroy() {
	let texture = this.texture.textureCacheIds[0];
	
	if(texture == DOG_SRC) {
		app.stage.removeChild(this);

		COUNTER.text = parseInt(COUNTER.text) - 1;

		if(parseInt(COUNTER.text) == 0) {
			alert("Du hast gewonnen!!!")

		}
	} 	
	
}

