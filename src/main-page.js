export const main = () => {
	const content = document.getElementById('content');
	content.innerHTML = `
    <header id="head">
					<nav id="navbar">
						<span>Home</span>
						<span>Menu</span>
						<span>Contact</span>
					</nav>
					<h1>Last Mirror Tacos</h1>
					<hr/>
				</header>
				<img id="taco" src="taco.png" alt="" />
			<footer>123 Fake Street, Springfield</footer>
    `;
};
