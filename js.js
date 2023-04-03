let conver = document.getElementById("conver");
let personaA = document.getElementById("person");


function botonConver() {
    let text = document.getElementById("text").value;
    pepe = `<div class="row"><div class="col-2"><h5>Persona</h5><img class="imgUser"src="https://thumbs.dreamstime.com/b/icono-de-la-muestra-del-usuario-s%C3%ADmbolo-de-la-persona-avatar-humano-84531334.jpg"alt=""></div><div class="col-10">
    <p>
       ${text}
    </p>
</div></div>`;
    //conver.outerHTML = pepe;

    console.log(document.getElementById("text").value);

    conver.insertAdjacentHTML("beforeend", pepe);

}

function fallo(dato) {

    if (dato == "Reunion") {

        document.getElementById("reunion").style.display = "block";
        document.getElementById("cumpleaños").style.display = "none";
        document.getElementById("otro").style.display = "none";
        document.getElementById("motivoTitulo").style.display = "none";

    } else if (dato == "cumpleaños") {

        document.getElementById("cumpleaños").style.display = "block";
        document.getElementById("reunion").style.display = "none";
        document.getElementById("otro").style.display = "none";
        document.getElementById("motivoTitulo").style.display = "none";

    } else if (dato == "otro") {

        document.getElementById("otro").style.display = "block";
        document.getElementById("reunion").style.display = "none";
        document.getElementById("cumpleaños").style.display = "none";
        document.getElementById("motivoTitulo").style.display = "none";

    }

}

let lista = [];

function sumarIntegrnte() {
    lista.push(document.getElementById("personaI").value);
    text = `<li>${document.getElementById("personaI").value}</li>`;
    person.insertAdjacentHTML("beforeend", text);
    const personaI = document.getElementById("personaI");
    personaI.value = "";

}

function publicacion() {
    alert("se publico correctamente");
    console.log(document.getElementById("person").value);
    const listaBorrar = [];
    for (let n = 0; n < 5; n++) {
        document.getSelection(input)
        
    }
    const personaI = document.getElementById("personaI");
    personaI.value = "";
    location.reload();
}



