(function($) {
  'use strict';

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

      setTextValue(tdMaker, tdModel, tdYear, tdColor, tdImg, img, url);
      return addElements(fragment, tr, tdMaker, tdModel, tdYear, tdColor, tdImg);

    }

    function setTextValue(tdMaker, tdModel, tdYear, tdColor, tdImg, img, url){
      tdMaker.textContent = $('[data-js="maker"]').get().value;
      tdModel.textContent = $('[data-js="model"]').get().value;
      tdYear.textContent = $('[data-js="year"]').get().value;
      tdColor.textContent = $('[data-js="color"]').get().value;
      img.setAttribute('src', url);
      tdImg.appendChild(img);
    }

    function addElements(fragment, tr, tdMaker, tdModel, tdYear, tdColor, tdImg){
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
