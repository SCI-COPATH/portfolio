let toggle_button=document.getElementById('toggle-button')
let toggle_button_2=document.getElementById('navbarSupportedContent')

function navToggle(){
    console.log("clicked")
    toggle_button.classList.add('collapsed')
    toggle_button.ariaExpanded=true
    toggle_button_2.classList.remove('show')
}
