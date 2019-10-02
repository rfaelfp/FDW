var operacao = parseInt(prompt("Informe o código de operação desejada:  \n" +
                                                "[1] Multiplos de 3.  \n" +
                                                "[2] Multiplos de 5.  \n" +
                                                "[3] Potencia.    \n" +
                                                "[4] Potencia.    \n"))        
        switch (operacao) {
            case 1:
            var i, n = prompt("Informe um número")
            console.log(("Multiplos de 3 no intervalo [0, " + n + "]:"))
    
            for (i = 0; i <= n; i += 3)
            document.write(i + "<br>") 
            
            break
            case 2:
            var i, n = prompt("Informe um número")
            console.log(("Multiplos de 5 no intervalo [0, " + n + "]:"))
            
            for (i = 0; i <= n; i += 5)
            console.log(i)
            case 3:
            var i, n = prompt("Informe um número")
            console.log(("Números adicionados mais 3 no intervalo [0, " + n + "]:"))
            
            for (i = 0; i <= n; i = (i * i))
            console.log(i)
            break
            case 4:
            var i, n = prompt("Informe um número")
            console.log(("Números adicionados mais 3 no intervalo [0, " + n + "]:"))
            
            for (i = 0; i <= n; i = Math.pow(i))
            console.log(i)
            break
            default:
            alert("A rotina finalizou.")
        }      