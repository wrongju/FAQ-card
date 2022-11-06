let lists = document.querySelectorAll(".faq-lists__block")
let spanblock = document.querySelectorAll(".span-block")
let paragraph = document.querySelectorAll(".lists-paragraph")
let sel = document.querySelector(".selected")

lists.forEach((el) => {
	console.log(el)
	el.addEventListener("click", () => {
		lists.forEach((el) => {
			el.classList.remove("selected")
			el.childNodes[3].classList.remove("selected")
		})
		el.classList.add("selected")
		el.childNodes[3].classList.add("selected")

		// lists.addEventListener('click', () => {
		// 	paragraph.style.display = 'block';
		// 
		// })
	})
})


// arrows.forEach(el => {
// 	el.addEventListener('click', () => {
// 		arrows.forEach(el => {
// 			el.classList.remove('active');
// 		})
// 		el.classList.add('active');
// 	})
// })
