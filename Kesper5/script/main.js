$(document).foundation();

(function(){
	
	var content = document.querySelectorAll('.content'),
		theHeader = document.querySelector('.header'),
		subHeader = document.querySelector('.copy h2'),
		text = document.querySelector('.copy p'),
		appliedClass;
		
	var click1 = document.querySelector("#home"),
		click2 = document.querySelector("#team"),
		click3 = document.querySelector("#merch"),
		click4 = document.querySelector("#home1"),
		click5 = document.querySelector("#team2"),
		click6 = document.querySelector("#merch3");
		
		function clicked1() {
			document.querySelector("#image").src="images/hoodie1.jpg";
		}
		
		function clicked2() {
			document.querySelector("#image").src="images/hat1.jpg";
		}
		
		function clicked3() {
			document.querySelector("#image").src="images/hoodie3.jpg";
		}
		

		function changeElements(){
			//debugger;
			theHeader.classList.remove(appliedClass);
			subHeader.classList.remove(appliedClass);
			
			appliedClass = this.id;
			
			theHeader.classList.add(this.id);
			subHeader.classList.add(this.id);
			
			subHeader.firstChild.nodeValue = dynamicCon[this.id].headline;
			text.firstChild.nodeValue = dynamicCon[this.id].text;
		}
		
		[].forEach.call(content, function(content) {
			content.addEventListener('click', changeElements, true);
		});
		
		click1.addEventListener("click",clicked1, false);
		click4.addEventListener("click",clicked1, false);
		click2.addEventListener("click",clicked2, false);
		click5.addEventListener("click",clicked2, false);
		click3.addEventListener("click",clicked3, false);
		click6.addEventListener("click",clicked3, false);

			subHeader.firstChild.nodeValue = dynamicCon['home'].headline;
			text.firstChild.nodeValue = dynamicCon['home'].text;
			theHeader.classList.add('placehold');

		
})();