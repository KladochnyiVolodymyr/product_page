
function menuFunction(){
	var menu = document.getElementById("menu");
	var account = document.getElementById("account");
	
	if (menu.className === "header__nav" || account.className === "header__account") {
        menu.className += " responsive";
        account.className += " responsive";
    } else {
        menu.className = "header__nav";
        account.className = "header__account";
    }
}