;(function($) {
  'use strict';
  // $ representa o new DOM('...')
  let companyName = $('[data-js="company"]');
  let companyPhone = $('[data-js="phone"]');
  let maker = $('[data-js="maker"]');
  let model = $('[data-js="model"]');
  let year = $('[data-js="year"]');
  let engine = $('[data-js="engine"]');
  let imgUrl = $('[data-js="imgUrl"]');
  let inputs = [maker, model, year, engine];

  function init(){
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

    function handleCadastrar(event){
      // loop para verificar os campos
      let i = 0;
      while( i < inputs.length){
        console.log(inputs[i].get().value);
        let isAllValid = () => {
          return inputs[i].get().value;
        };
        if(!isAllValid()){
          alert('Os campos de FABRICANTE, MODELO, ANO e COR devem ser preenchidos corretamente!');
          event.preventDefault();
          return '';
        }
        i++;
      }
    }

    function startEvents(){
      $('[data-js="button"]').on('click', handleCadastrar);
    }

    // Estas funções são executadas ao carregar todo o document
    startEvents();
    getCompanyData();
  }

  document.addEventListener('DOMContentLoaded', init, false);

})(window.DOM);
