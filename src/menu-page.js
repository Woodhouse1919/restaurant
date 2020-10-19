export const menu = () => {
    const content = document.querySelector('.content')
    content.id = 'menu';

    content.innerHTML = `
    <div class ='table'>

    <div>   
        <p>Appetizers</p>
        <div class="menu-item">Chips & Salsa <p>$10</p></div>
        <div class="menu-item">Chips & Guac <p>12$</p></div>
        <div class="menu-item">Nachos <p>$10</p></div>
        <div class="menu-item">Jalapeno Poppers <p>$8</p></div>
    </div>
    
    <div>
        <p>Mains</p>
        <div class="menu-item">Tacos <p>$10</p></div>
        <div class="menu-item">Enchiladas <p>$12</p></div>
        <div class="menu-item">Chimichangas <p>$14</p></div>
        <div class="menu-item">Burrito <p>$12</p></div>
    </div>

    <div>
        <p>Sides</p>
        <div class="menu-item">Rice <p>$2</p></div>
        <div class="menu-item">Beans <p>$2</p></div>
        <div class="menu-item">Salad <p>$2</p></div>
        <div class="menu-item">Corn <p>$4</p></div>
    </div>


    <div>
        <p>Drinks</p>
        <div class="menu-item">Margarita <p>$8</p></div>
        <div class="menu-item">Jarrito <p>$4</p></div>
        <div class="menu-item">Coke <p>$4</p></div>
        <div class="menu-item">Water <p>$10</p></div>
    </div>
    </div>

    </div>
    `
}