setTimeout(function(){
	var links=document.getElementById('List').children[0].children[1].getElementsByTagName('a');
	var bookinglink;
	for(var i=0;i<links.length;i++){
		if(links[i].className=='rent_startorder'){
			bookinglink=links[i];
			break;
		}
	}
	bookinglink.click();
},5000);
