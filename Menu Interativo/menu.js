let opção = "5"

do {
  opção = prompt(
    "Seja bem-vindo(a)\n" + 
    "\nEscolha uma das opções abaixo:" +
    "\n1. Opção Um" +
    "\n2. Opção Dois" +
    "\n3. Opção Três" +
    "\n4. Opção Quatro" +
    "\n5. Encerrar" 
    )

    switch (opção) {
        case "1":
            alert("Você escolheu a opção 1")
        break
        case "2":
            alert("Você escolheu a opção 2")
        break
        case "3":
            alert("Você escolheu a opção 3")
        break
        case "4":
            alert("Você escolheu a opção 4")
        break
        case "5":
            alert("Você escolheu escolheu encerrar.")
            alert("Encerrar...")
        break
        default:
            alert("Opção inválida.")
    }

} while (opção !== "5")