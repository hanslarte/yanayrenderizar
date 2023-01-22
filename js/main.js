function getParameter(p){
    let parametro= new URLSearchParams(window.location.search);
    return parametro.get(p);
}

const header=document.querySelector('.header');
const productList = document.querySelector('.product-list');




eventListeners();


function eventListeners(){
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();
        loadHeader()
    });
}

function loadHeader(){
    if(getParameter("categoria")=="tortas"){
        fetch('/js/categorias.json')
        .then(response => response.json())
        .then(data =>{
            let html = '';

            data.forEach(product => {
                if(product.categoria=="tortas"){

                    html = `
                    <div class="content-header"  style=" background-image: url(${product.img});">
                        <div class="barra-nav">
                            <img src="/imagenes/nav/menu.png" alt="">
                            <a href="">
                                <img src="/imagenes/nav/LOGO YANAY BLANCO.png" alt="">
                            </a>
                            <img src="/imagenes/nav/carrito.png" alt="">
                        </div>
        
                        <div class="main-banner">
                            <h1 class="h1">${product.titulo}</h1>
                        </div>
                    </div>
                    `;
                }
            });
            header.innerHTML = html;
        })
    }
    else if(getParameter("categoria")=="cupcakes"){
        fetch('/js/categorias.json')
        .then(response => response.json())
        .then(data =>{
            let html = '';

            data.forEach(product => {
                if(product.categoria=="cupcakes"){

                    html = `
                    <div class="content-header" style=" background-image: url(${product.img});">
                        <div class="barra-nav">
                            <img src="/imagenes/nav/menu.png" alt="">
                            <a href="">
                                <img src="/imagenes/nav/LOGO YANAY BLANCO.png" alt="">
                            </a>
                            <img src="/imagenes/nav/carrito.png" alt="">
                        </div>
        
                        <div class="main-banner">
                            <h1 class="h1">${product.titulo}</h1>
                        </div>
                    </div>
                    `;
                }
            });
            header.innerHTML = html;
        })
    }

    else if(getParameter("categoria")=="choco"){
        fetch('/js/categorias.json')
        .then(response => response.json())
        .then(data =>{
            let html = '';

            data.forEach(product => {
                if(product.categoria=="choco"){

                    html = `
                    <div class="content-header" style=" background-image: url(${product.img});">
                        <div class="barra-nav">
                            <img src="/imagenes/nav/menu.png" alt="">
                            <a href="">
                                <img src="/imagenes/nav/LOGO YANAY BLANCO.png" alt="">
                            </a>
                            <img src="/imagenes/nav/carrito.png" alt="">
                        </div>
        
                        <div class="main-banner">
                            <h1 class="h1">${product.titulo}</h1>
                        </div>
                    </div>
                    `;
                }
            });
            header.innerHTML = html;
        })
    }

    else if(getParameter("categoria")=="galleta"){
        fetch('/js/categorias.json')
        .then(response => response.json())
        .then(data =>{
            let html = '';

            data.forEach(product => {
                if(product.categoria=="galleta"){

                    html = `
                    <div class="content-header" style=" background-image: url(${product.img});">
                        <div class="barra-nav">
                            <img src="/imagenes/nav/menu.png" alt="">
                            <a href="">
                                <img src="/imagenes/nav/LOGO YANAY BLANCO.png" alt="">
                            </a>
                            <img src="/imagenes/nav/carrito.png" alt="">
                        </div>
        
                        <div class="main-banner">
                            <h1 class="h1">${product.titulo}</h1>
                        </div>
                    </div>
                    `;
                }
            });
            header.innerHTML = html;
        })
    }
    
}


function loadJSON(){
    if(getParameter("categoria")=="tortas"){
        fetch('/js/tortas.json')
        .then(response => response.json())
        .then(data =>{
            let html = '';
            data.forEach(product => {
                html += `
                    <div class = "product-item">
                        <div class = "product-img">
                            <img src = "${product.imgSrc}" alt = "product image">
                            <button type = "button" class = "add-to-cart-btn">
                                <i class = "fas fa-shopping-cart"></i>Add To Cart
                            </button>
                        </div>
                        <div class = "product-content">
                            <h3 class = "product-name">${product.name}</h3>
                            <span class = "product-category">${product.category}</span>
                            <p class = "product-price">$${product.price}</p>
                        </div>
                    </div>
                `;
            });
            productList.innerHTML = html;
        })
        .catch(error => {
            alert(`User live server or local server`);
            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
        })
    }
    else{
        fetch('/js/cupcakes.json')
        .then(response => response.json())
        .then(data =>{
            let html = '';
            data.forEach(product => {
                html += `
                    <div class = "product-item">
                        <div class = "product-img">
                            <img src = "${product.imgSrc}" alt = "product image">
                            <button type = "button" class = "add-to-cart-btn">
                                <i class = "fas fa-shopping-cart"></i>Add To Cart
                            </button>
                        </div>
                        <div class = "product-content">
                            <h3 class = "product-name">${product.name}</h3>
                            <span class = "product-category">${product.category}</span>
                            <p class = "product-price">$${product.price}</p>
                        </div>
                    </div>
                `;
            });
            productList.innerHTML = html;
        })
        .catch(error => {
            alert(`User live server or local server`);
            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
        })
    }

        
}