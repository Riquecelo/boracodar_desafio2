let btn = document.querySelector('#btn')

btn.addEventListener('click', function(){
    //alert('Olá')
    let sofaparado = document.querySelector("#img_sofa")
    let sofagif = document.querySelector("#gif")
    if(btn.classList.contains("btn")){
        btn.classList.remove("btn");
        btn.classList.add("btn_fechar");
        sofaparado.classList.add("desativo")
        sofagif.classList.remove("desativo")
    }else{
        btn.classList.remove("btn_fechar")
        btn.classList.add("btn")
        sofaparado.classList.remove("desativo")
        sofagif.classList.add("desativo")
    }
})