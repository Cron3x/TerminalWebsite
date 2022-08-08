function autoFocus(){
	inp = document.getElementById("prompt");
	$( document ).on( 'keydown', function ( e ) {
		inp.focus();
	});
	mouse_hover();
}

function parse() {
	command = document.getElementById("prompt").value;
	console.log(command);
	document.getElementById("prompt").value = "";
	url = "";
	text = "";
	color = "";
	switch (command){
		case 'github' || 'gh': {
			url = "https://github.com/cron3x";
			
			break;
		}
		case 'plugins' || 'pl' : {
			url = "https://www.spigotmc.org/search/member?user_id=1309133"
			break;
		}
		case 'modrinth' ||'mr': {
			url = "https://modrinth.com/user/Cron3x";
			break;
		}
		case 'curseforge' || 'cf': {
			url = "https://www.curseforge.com/members/cron3x/projects";
			break;
		}
		default: {
			text = `'${command}' is no valid command`;
			color = "text-red";
			break;
		}
	}
	document.getElementById("return").innerHTML = text;
	document.getElementById("return").className = color;
	window = window.open(url, '_self');
}

function mouse_hover() {
	var cursor = document.getElementById("cursor");
	document.body.addEventListener("mousemove", function(e) {
		// cursor.style.setProperty('--x', e.clientX+"px");
		// cursor.style.setProperty('--y', e.clientY+"px");

		document.body.style.backgroundColor = `#1c1c1c`;
		document.body.style.backgroundImage = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, #45523b 0%, rgba(28, 28, 28, 1) calc(6%))`;

		//cursor.style.setProperty('--bg', bg);
		console.log(document.body.style.backgroundImage);
	});
}