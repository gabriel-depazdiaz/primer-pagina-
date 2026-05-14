const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML= "✕";
        menuBtn.setAttribute("aria-expanded", "true")
    } else{
        menuBtn.innerHTML= "☰"
        menuBtn.setAttribute("aria-expanded", "false")

    }
});


const $form = document.querySelector("#formulario")
const $buttonMailto = document.querySelector("#envioCorreo")
$form.addEventListener("submit", handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get("nombre"))
    console.log(form.get("correo"))
    console.log(form.get("tel"))
    console.log(form.get("mensaje"))

    $buttonMailto.setAttribute("href", `mailto:ceduelvalleant@gmail.com?subject=${form.get("nombre")}${form.get("correo")}&body=${form.get("mensaje")}`)
    $buttonMailto.click()
}