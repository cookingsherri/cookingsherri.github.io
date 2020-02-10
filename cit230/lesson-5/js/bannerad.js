function displayBanner(){
	let date = new Date();
	let day = date.getDay();
	if(day==5){
		document.getElementById("banner").style.display="block";
    }
  
    