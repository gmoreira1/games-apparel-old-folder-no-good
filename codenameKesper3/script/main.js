$(document).foundation();

(function(){
	// images (all of them), the heading, the subheading, the season text, appliedClass
	var content = document.querySelectorAll('.content'),
		theHeader = document.querySelector('.header'),
		subHeader = document.querySelector('.copy h2'),
		theSeasonText = document.querySelector('.copy p'),
		appliedClass;

		function changeElements(){
			//debugger;
			theHeader.classList.remove(appliedClass);
			subHeader.classList.remove(appliedClass);
			
			appliedClass = this.id;
			
			theHeader.classList.add(this.id);
			subHeader.classList.add(this.id);
			
			subHeader.firstChild.nodeValue = dynamicCon[this.id].headline;
			theSeasonText.firstChild.nodeValue = dynamicCon[this.id].text;
		}

		[].forEach.call(content, function(content) {
			content.addEventListener('click', changeElements, true);
		});

			subHeader.firstChild.nodeValue = dynamicCon['home'].headline;
			theSeasonText.firstChild.nodeValue = dynamicCon['home'].text;
			theHeader.classList.add('placehold');

})();