let conver = document.getElementById("conver");


function botonConver() {
    let text = document.getElementById("text").value;
    pepe = `<div class="row"><div class="col-2"><h5>Persona</h5><img class="imgUser"src="https://thumbs.dreamstime.com/b/icono-de-la-muestra-del-usuario-s%C3%ADmbolo-de-la-persona-avatar-humano-84531334.jpg"alt=""></div><div class="col-10">
    <p>
       "${text}"
    </p>
</div></div>`;
    //conver.outerHTML = pepe;

    console.log(document.getElementById("text").value);

    conver.insertAdjacentHTML("beforeend", pepe);

}

function fallo() {

    if (document.getElementById("motivo").value="reunion") {
        document.getElementById("reunion").visiblity="visible";
        console.log("aassassas");
    }
    
}