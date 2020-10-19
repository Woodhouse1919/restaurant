import { contact } from './contact-page';
import { main } from './main-page';
import { menu } from './menu-page';


main();

const content = document.querySelector('.content')
const tabs = document.querySelectorAll('.tab')

tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        if (e.target.id === 'home') {
            reset()
            main()
        } else if (e.target.id === 'contact') {
            reset()
            contact()
        } else if (e.target.id === 'menu') {
            reset()
            menu()
        }
    })
});

function reset () {
    content.innerHTML = ''
}



