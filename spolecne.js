const menuButton = document.querySelector('#menu-tlacitko');

const menuItems = document.querySelector('#menu-polozky');

menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('show'); //nebude .show, protože classList, který ví, že pracuju s třídou 

    if (menuItems.classList.contains('show')) {
        menuButton.textContent = '✖';
  } else {
        menuButton.textContent = '☰';
  }
});  





