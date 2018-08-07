;(function($) {
  'use strict';

  let companyName = $('[data-js="company"]'); // $ representa o new DOM('...')
  let companyPhone = $('[data-js="phone"]');

  function init(){
    let idNumber = 0; // id para o carro cadastrado

    /* - - - JSON PARA O 'NAME' E 'PHONE' DA EMPRESA - - - */
    let ajax = new XMLHttpRequest();
    ajax.open('GET', 'json/company.json', true);
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

    // Esta função adiciona um listener de eventos ao botão
    function startEvents(){
      $('[data-js="button"]').on('click', handleCadastrar);
    }

    // Esta função seleciona o elemento table e adiciona o conteúdo
    function handleCadastrar(event){
      event.preventDefault();
      let table = $('[data-js="cartable"]').get();
      table.appendChild(createTableText());
    }

    // Esta função cria os elementos que serão incluidos no table
    function createTableText(){
      idNumber++;

      let fragment = document.createDocumentFragment();
      let tr = document.createElement('tr');
      let tdRemove = document.createElement('input');
      let tdMaker = document.createElement('td');
      let tdModel = document.createElement('td');
      let tdYear = document.createElement('td');
      let tdColor = document.createElement('td');
      let tdImg = document.createElement('td');
      let img = document.createElement('img');
      let url = $('[data-js="image"]').get().value;

      setTextValue(tdRemove, tdMaker, tdModel, tdYear, tdColor, tdImg, img, url);
      return addElements(fragment, tr, tdRemove,tdMaker, tdModel, tdYear, tdColor, tdImg);
    }

    // Esta função setta os valores de cada coluna(td) da linha(tr)
    function setTextValue(tdRemove, tdMaker, tdModel, tdYear, tdColor, tdImg, img, url){
      tdRemove.setAttribute('type', 'checkbox');
      tdRemove.setAttribute('data-js', idNumber);
      tdMaker.textContent = $('[data-js="maker"]').get().value;
      tdModel.textContent = $('[data-js="model"]').get().value;
      tdYear.textContent = $('[data-js="year"]').get().value;
      tdColor.textContent = $('[data-js="color"]').get().value;
      img.setAttribute('src', url);
      tdImg.appendChild(img);
    }

    // Esta função adiciona os elementos a tr e ao fragment
    function addElements(fragment, tr, tdRemove,tdMaker, tdModel, tdYear, tdColor, tdImg){
      tr.appendChild(tdMaker);
      tr.appendChild(tdModel);
      tr.appendChild(tdYear);
      tr.appendChild(tdColor);
      tr.appendChild(tdImg);
      tr.appendChild(tdRemove);

      fragment.appendChild(tr);
      return fragment;
    }

    // Estas funções são executadas ao carregar o todo o document
    startEvents();
    getCompanyData();
  }

  document.addEventListener('DOMContentLoaded', init, false);

})(window.DOM);
