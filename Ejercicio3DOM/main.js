
function agregarParrafo(){
        // 1. Seleccionar el elemento HTML donde vamos a añadir el párrafo 
        const contenedor = document.querySelector('#contenedor');

        // 2. Crear el elemento HTML p
        const parrafo = document.createElement('p');

        // 3. Añadir el contenido (lorem) al p
        parrafo.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

        // 4. Añadir el p al elemento seleccionado en el paso 1
        contenedor.appendChild(parrafo);
}

function agregarArticulo(){
    const articulo= prompt("Introduce un artículo: ");

    const listaArticulos = document.querySelector('ul');

    let nuevoArticulo = document.createElement('li');

    nuevoArticulo.innerText = articulo;

    listaArticulos.appendChild(nuevoArticulo);
}

function creaConEstilo(){
    const div = document.createElement('div');

    div.innerText = 'Guillermo Ponce Ruiz';

    div.classList.add('estiloPersonalizado');

    document.body.appendChild(div);
}


