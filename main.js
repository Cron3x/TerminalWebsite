function autoFocus(){
	inp = document.getElementById("prompt");
	$( document ).on( 'keydown', function ( e ) {
		inp.focus();
	  });
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