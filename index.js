const prompt = require('prompt-sync')();
var array_bolsas = [];

do {
  console.log("Sistema de Cadastro de Bolsas");
  console.log("1 - Inserir Bolsa");
  console.log("2 - Excluir Bolsa");
  console.log("3 - Listar Bolsas");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Bolsa...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let marca = prompt("Digite a marca: ");
    let cor = prompt("Digite a cor: ");
    let material = prompt("Digite o material(tecido/couro): ");
    let estado = prompt("Digite o estado(novo/usado): ");

    // Neste trecho estamos declarando um objeto
    const bolsa = {
      codigo: codigo,
      marca: marca,
      cor: cor,
      material: material,
      estado: estado
    }
    inserir_bolsa(bolsa);
  } else if (opcao == 2) {
    console.log("\n\nExcluindo Bolsa...\n");
    let codigo = prompt("Digite o código da bolsa: ");
    excluir_bolsa(codigo);
  } else if (opcao == 3) {
    console.log("\n\nListando Bolsas...\n");
    listar_bolsas();
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_bolsa(bolsa) {
  array_bolsas.push(bolsa);
}

function excluir_bolsa(codigo) {
  for (var i = 0; i <= array_bolsas.length; i++) {
    if (codigo == array_bolsas[i].codigo) {
      array_bolsas.splice(i, 1);
      break;
    }
  }
}

function listar_bolsas() {
  for (var i = 0; i < array_bolsas.length; i++) {
    let b = array_bolsas[i];
    console.log(b.codigo, ":", b.marca, "-", b.cor, "-", b.material, "-", b.estado);
  }
}