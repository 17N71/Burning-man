import "../index.html"
import "../scss/main.scss"
const logoImage = require("./../asset/logo.svg")
const headerLogo = document.getElementsByClassName("header-logo")[0]
const logo: HTMLImageElement = new Image()
const currentYear: HTMLSpanElement = document.getElementById("currentYear")
const header: HTMLElement = document.querySelector(".header")
const headerMenu: HTMLUListElement = document.querySelector(".header-menu")
const headerMediaBtn: HTMLButtonElement = document.querySelector(".header-media-btn")
const headerMediaBtnInto: HTMLButtonElement = document.querySelector(".header-media-btn-into")
logo.src = logoImage
let mediaMenuFlag = false
headerLogo.appendChild(logo)
const headerLinks = header.querySelectorAll("a:not(.header-logo)")
headerLinks.forEach((a) =>
	a.addEventListener("click", function name(e: MouseEvent) {
		e.preventDefault()
	})
)
const getCurrentYear = (): string => {
	const currentYear = new Date()
	return currentYear.getFullYear().toString()
}
currentYear.textContent = getCurrentYear()
window.addEventListener("scroll", scrollHandleByHeader)
function scrollHandleByHeader() {
	if (window.scrollY > 130) {
		header.classList.add("scrolled")
		headerMediaBtn.style.top = "2rem"
		mediaMenuFlag = true
	} else {
		header.classList.remove("scrolled")
		mediaMenuFlag = false
		headerMediaBtn.style.top = "2rem"
	}
}
window.addEventListener("resize", windowResizeHandleByMediaMenu)
function windowResizeHandleByMediaMenu() {
	if (window.innerWidth <= 640 && mediaMenuFlag) {
		header.style.top = "0"
		header.style.paddingTop = "0"
		header.style.marginTop = "0"
		headerMediaBtnInto.style.display = "flex !important"
	}
	console.log(mediaMenuFlag)
}
headerMediaBtn.addEventListener("click", mediaMenuHandle)
function mediaMenuHandle(e: MouseEvent) {
	headerMenu.classList.toggle("open-menu")
	document.body.classList.toggle("overflow-hidden")
}
function mediaMenuClose(e: MouseEvent) {
	headerMenu.classList.remove("open-menu")
	document.body.classList.remove("overflow-hidden")
}
headerMediaBtnInto.addEventListener("click", mediaMenuClose)
