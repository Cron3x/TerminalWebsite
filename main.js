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
			document.getElementById("return").innerHTML = `'${command}' is no valid command`;
			document.getElementById("return").className = "text-red"
			break;
		}
	}
	window = window.open(url, '_self');
}