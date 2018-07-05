(function($) {
  'use strict';
  /* HÁ UM OUTRO JS DESTE PROJETO FEITO SEM O USO DA BIBLIOTECA 'DOM'.
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, que deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"
  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.
  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.
  Essas informações devem ser adicionadas no HTML via Ajax.
  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.
  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  let companyName = $('[data-js="company"]'); // $ representa o new DOM('...')
  let companyPhone = $('[data-js="phone"]');

  function init(){
    /* - - - JSON PARA O 'NAME' E 'PHONE' DA EMPRESA - - - */
    let ajax = new XMLHttpRequest();
    ajax.open('GET', 'company.json', true);
    ajax.send();

    function getCompanyData(){
      ajax.addEventListener('readystatechange', getJson, false);
    }

    function getJson(){
      let request = ajax.responseText;
      if(request)
        setJson();
      else
        companyName.get(0).value = '404 not found company name';
    }

    function setJson(){
      let json = JSON.parse(ajax.responseText);
      companyName.get(0).value = json.name;
      companyPhone.get(0).value = json.phone;
      console.log(json.name, json.phone);
    }
    /* - - -           FIM JSON                    - - - */

    function startEvents(){
      $('[data-js="button"]').on('click', handleCadastrar);
    }

    function handleCadastrar(event){
      event.preventDefault();
      let table = $('[data-js="cartable"]').get();
      table.appendChild(createTableText());

    }

    function createTableText(){
      let fragment = document.createDocumentFragment();
      let tr = document.createElement('tr');
      let tdMaker = document.createElement('td');
      let tdModel = document.createElement('td');
      let tdYear = document.createElement('td');
      let tdColor = document.createElement('td');
      let tdImg = document.createElement('td');
      let img = document.createElement('img');
      let url = $('[data-js="image"]').get().value;
      img.setAttribute('src', url);
      tdImg.appendChild(img);

      tdMaker.textContent = $('[data-js="maker"]').get().value;
      tdModel.textContent = $('[data-js="model"]').get().value;
      tdYear.textContent = $('[data-js="year"]').get().value;
      tdColor.textContent = $('[data-js="color"]').get().value;

      tr.appendChild(tdMaker);
      tr.appendChild(tdModel);
      tr.appendChild(tdYear);
      tr.appendChild(tdColor);
      tr.appendChild(tdImg);

      fragment.appendChild(tr);
      return fragment;
    }

    startEvents();
    getCompanyData();
  }

  document.addEventListener('DOMContentLoaded', init, false);

})(window.DOM);
