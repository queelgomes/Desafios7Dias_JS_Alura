function resultado(){
    let nome = document.querySelector('input#txtnome').value
    let txidade = document.querySelector('input#txtidade').value
    let ling = document.querySelector('input#txtling').value
    let res = document.querySelector('#txtres')
    let res2 = document.querySelector('#txtres2')
    let res3 = document.querySelector('#txtres3')

    if(nome == 0 || txidade == 0 || ling ==0){
        res.innerHTML = 'Todos os campos devem estar preenchidos.'
    }else{
        res.innerHTML = `Olá, <strong>${nome}</strong>. Você tem <strong>${txidade}</strong> anos e estuda <strong>${ling}.</strong>`

        res2.innerHTML = '<br>Você está gostando de estudar <strong>' + ling + '</strong>? <br><br>', botoes()

        function botoes(){
            let btnao = document.createElement('input')
            let btsim = document.createElement('input')

            btnao.type = 'button'
            btsim.type = 'button'
            btnao.value = 'NAO'
            btsim.value = 'SIM'
            res2.appendChild(btnao)
            res2.appendChild(btsim)
            
            btnao.onclick = function (){
                res3.innerHTML = `<br>Ahh que pena... Já tentou aprender outras linguagens?`
                let email = document.createElement('input')
                let cxdiv = document.createElement('div')
                let enviar = document.createElement('input')

                email.type = 'text'
                email.placeholder = 'E-mail'
                enviar.type = 'button'
                enviar.value = 'ENVIAR'
                res3.appendChild(cxdiv)
                res3.appendChild(email)
                res3.appendChild(enviar)

                cxdiv.innerHTML = `<br>Digite o seu e-mail abaixo e vamos te enviar outras opções de cursos. Boa sorte! <p>`
            }
            btsim.onclick = function (){
                res3.innerHTML = `<br>Muito bom! Continue estudando e você terá muito sucesso.`
                
            }
        }


    }
}