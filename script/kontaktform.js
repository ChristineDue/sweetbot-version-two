// JavaScript Document

	function klik(){

		//linjen nedenunder gør at når man skriver msg er det = det der kommer efter (msg kan være hvad som helst)
		var msg = $('#resultat');
		//! betyder NOT - altså i dette tilfælde hvis der ikke er en value skal den gøre noget andet
		if(!$('#tekstfelt').val()){
			//alert('Fill in your name!');
		   $('#resultat').html('please fill in your name');
		  } else{
			var brugerensNavn = $('#tekstfelt').val();
			msg.html('Hej ' + brugerensNavn);}
		 }	
				
	