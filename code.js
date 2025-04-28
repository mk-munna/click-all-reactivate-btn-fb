// when all page deactivated , click all reactivate button in one page
const elements = document.querySelectorAll('*');

elements.forEach(el => {
  if (el.innerText && el.innerText.trim() === 'Reactivate') {
    let clickable = el.closest('button, div, span');
    if (clickable) {
      clickable.click();
      console.log('Clicked:', el.innerText);
    }
  }
});
