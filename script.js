let toggle_button=document.getElementById('toggle-button')
let toggle_button_2=document.getElementById('navbarSupportedContent')

let form_data=document.getElementById('frm')

function navivateLocation(loc){
    location = loc;
    collapsData=document.querySelectorAll('.nav-item')
    for(let local=0;local<collapsData.length;local++){
        collapsData[local].setAttribute("data-bs-toggle", "collapsed")
    }
   
}
function collapsMode(){
    collapsData=document.querySelectorAll('.nav-item')
    for(let local=0;local<collapsData.length;local++){
        collapsData[local].setAttribute("data-bs-toggle", "collapse")
    }
    
}

form_data.addEventListener("submit",(e)=>{
    e.preventDefault()
    let Name=document.getElementById('f-name').value
    let Email=document.getElementById('email').value
    let Address=document.getElementById('address').value
    let Phone=document.getElementById('phone').value
    let Text=document.getElementById('your-text').value
    var params={
        name:Name,
        email:Email,
        address:Address,
        phone:Phone,
        message:Text,
        reply_to:"scicopath01@gmail.com"

    }
    console.log(Name)
    console.log(Email)
    console.log(Address)
    console.log(Phone)
    console.log(Text)
    const serviceID='adhknklanlslalmamflnab'
    const templateID='template_xsu4f5o'
    emailjs.send(serviceID,templateID,params)
    .then(
        res=>{
            document.getElementById('f-name').value=""
            document.getElementById('email').value=""
            document.getElementById('address').value=""
            document.getElementById('phone').value=""
            document.getElementById('your-text').value=""
            console.log(res)
        }
    )
    .catch((err)=>console.log(err))
    
})
