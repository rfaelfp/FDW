var operacao = parseInt(prompt("Informe o código de operação desejada:  \n" +
                                                "[1] Multiplos de 3.  \n" +
                                                "[2] Multiplos de 5.  \n" +
                                                "[3] Potencia.    \n" +
                                                "[4] Potencia.    \n"))        
        switch (operacao) {
            case 1: {
            let i, n = prompt("Informe um número")
            console.log(("Multiplos de 3 no intervalo [0, " + n + "]:"))
    
            for (i = 0; i <= n; i += 3)
            document.write(i + "<br>") 
        }
            break
            case 2:{
            let i, n = prompt("Informe um número")
            console.log(("Multiplos de 5 no intervalo [0, " + n + "]:"))
            
            for (i = 0; i <= n; i += 5)
            document.write(i + "<br>")
        }
            break
            case 3: {
            var i = parseInt(prompt("Informe o primeiro número"))
            if (i <= 0)
            alert("O número deve ser maior que zero!")
            else
                var n = parseInt(prompt("Informe o segundo número"))
                if (n <= i)
                alert("O número não pode ser menor que o primeiro")
                else {
                console.log(("Potência base 2 no intervalo [" + i + " a " + n + "]:"))
                for (i ; i <= n; i)
                document.write(Math.pow(2, i++) + "<br>")
        }
        }
            break  
            case 4: {
            let i, n = prompt("Informe um número")
            console.log(("Números adicionados mais 3 no intervalo [0, " + n + "]:"))
            
            for (i = 0; i <= n; i = i)
            document.write(i + "<br>")
        }
            break
            default:
            alert("A rotina finalizou.")
        }