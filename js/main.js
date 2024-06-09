// capturamos el contenedor
const proyect_Container = document.getElementById('card_container');
// capturamos el aside
const aside = document.querySelector('.aside');

/* función para obtener las tecnologias */
const getTecnologias = (tecnologias) =>{
    let resultado = '';
    tecnologias.forEach(tecnologia => {
        resultado += `<span class='card_tecnologia'>-${tecnologia} </span>`
    })
    return resultado
}


// Proyectos
proyectos.forEach(proyecto => {
    //nuevo proyecto
    const newProyecto = document.createElement('article');
    newProyecto.classList = 'card_proyecto';
    proyect_Container.appendChild(newProyecto);

    // creamos el resto de elementos en bloque
    newProyecto.innerHTML = `
    <h3 class='card_titulo'>${proyecto.titulo}</h3>
    <img src='${proyecto.imagen}' class='card_img'>
    <p class='card_descripcion'>${proyecto.descripcion}</p>
    <p class='card_tecnologias'>${getTecnologias(proyecto.tecnologias)}</p>
    <a href='${proyecto.link}' class='card_btn' target='_blank'>Ver proyecto</>
    `

})


// INFORMACIÓN GENERAL
const newInfo = document.createElement('div');
newInfo.classList = 'aside_datos';
newInfo.innerHTML = `
<img class='aside_img' src='${infoPersonal.imagen}'>`;

//recorremos lista que contiene info personal
infoPersonal.otros.forEach(elem => {
    newInfo.innerHTML += `
        <div class='info_dato'>
            <span class='dato_bold'>${elem[0]}:</span>
            <span class='dato_normal'>${elem[1]}</span>
        </div>
    `
});


//volcar info al DOM
aside.appendChild(newInfo);

// IDIMAS
const newIdioma = document.createElement('div');
newIdioma.classList = 'aside_idioma';

//recorremos la lista de los idiomas
infoPersonal.idiomas.forEach(elem => {
    newIdioma.innerHTML += `
        <div class='info_idioma'>
            <span class='dato_bold'>${elem[0]}:</span>
            <span class='dato_normal'>${elem[1]}</span>
        </div>
    `
});

//volcar info al DOM
aside.appendChild(newIdioma);


//HABILIDADES
const newTecno = document.createElement('div');
newTecno.classList = 'aside_tecno';

//recorremos la lista de habilidades
infoPersonal.tecnologias.forEach(elem => {
    newTecno.innerHTML += `
    <div class='info_tecno'>
        <span class='dato_bold'>${elem[0]}:</span>
        <span class='dato_normal'>${elem[1]}</span>
    </div>
    <progress value='${elem[1]}' max='10' class='progreso'></progress>
    `
});

//volcar info al DOM
aside.appendChild(newTecno);

//REDES

//función para iterar por las redes y devolver un icono de la red
const getIconoRed = (red)=>{
    switch(red){
      case "instagram":
        return "instagram.svg";
      case "linkedin":
        return "linkedin.svg";
      case "facebook":
        return "facebook.svg";
      case "youtube":
        return "youtube.svg";
      case "github":
        return "github.svg";
    default:
        return "internet.svg";
    }
  }

const newRed = document.createElement('div');
newRed.classList = 'aside_red';

//recoremos la lista de redes
infoPersonal.redes.forEach(elem => {
    if(elem[1] === '') return;
    newRed.innerHTML += `
    <a href='${elem[1]}' target='_blank'>
        <img src='../img/iconos_redes/${getIconoRed(elem[0])}'>
    </a>
    `
});

//volcar la info en el DOM
aside.appendChild(newRed);




