export const main = () => {
    const content = document.querySelector('.content');
    content.id = 'main'
	content.innerHTML = `
        <h1>"Tacos so good they'll make your Abuela cry!"</h1>
		<hr>
        <img id="taco" src="taco.png" alt="Taco Platter" />
        <p>Last Mirror Tacos are inspired by the 
        street side taco stands of Mexico City and include many family recipes.   
        A mosaic of regions and flavours are represented on our taco board, as they are represented in the City.
        </p>   
        
        
    `;
};
