function showSidebar() {
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'flex'
}

function hideSidebar() {
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'none'
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

