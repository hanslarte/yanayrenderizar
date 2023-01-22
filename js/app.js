let content=document.querySelector('.content');



function veri(e){

    if(e.target.classList.contains('tortas')){
        console.log(e.target);
        location.href="/paginas/producto.html?categoria=tortas"
    }
    else if(e.target.classList.contains('cupcakes')){
        console.log(e.target);
        location.href="/paginas/producto.html?categoria=cupcakes"
    }
    else if(e.target.classList.contains('choco')){
        console.log(e.target);
        location.href="/paginas/producto.html?categoria=choco"
    }
    else if(e.target.classList.contains('galleta')){
        console.log(e.target);
        location.href="/paginas/producto.html?categoria=galleta"
    }

    console.log(categoria)
}

content.addEventListener('click',veri);







