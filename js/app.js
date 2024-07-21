const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

removeBorder();
removeShow();

// Select tab content
function selectItem() {
  removeBorder()
  removeShow();
  //Add border to current tab
  this.classList.add('tab-border')
  //Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //Add show class
  tabContentItem.classList.add('show')
}

function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow(){
  tabContentItems.forEach(item => item.classList.remove('show'))
}

//Listen for tab Click
tabItems.forEach(item => item.addEventListener('click', selectItem));


// Default to first tab
document.addEventListener('DOMContentLoaded', () => {
  if (tabItems.length > 0) {
    tabItems[0].classList.add('tab-border');
    const firstTabContentItem = document.querySelector(`#${tabItems[0].id}-content`);
    firstTabContentItem.classList.add('show');
  }
});


document.addEventListener('DOMContentLoaded', function() {
  let currentYear = new Date().getFullYear();
  document.getElementById('currentYear').textContent = currentYear;
});

