
/* Melhorando a biblioteca DOM */
function DOM(element){
  if(!(this instanceof DOM))
    return new DOM(element)
  this.element = document.querySelectorAll(element);
}

DOM.prototype.on = function on(event, callback){
  Array.prototype.forEach.call(this.element, function(element){
    element.addEventListener(event, callback, false);
  })
}

DOM.prototype.off = function off(event, callback){
  Array.prototype.forEach.call(this.element, function(element){
    element.removeEventListener(event, callback, false);
  })
}

DOM.prototype.get = function get(index){
  if(index == undefined)
    index = 0;
  return this.element[index];
}

DOM.prototype.foreach = function foreach(){
  return Array.prototype.forEach.apply(this.element, arguments);
}

DOM.prototype.map = function map(element){
  return Array.prototype.map.apply(this.element, arguments)
}

DOM.prototype.filter = function filter(element){
  return Array.prototype.filter.apply(this.element, arguments)
}

DOM.prototype.reduce = function reduce(element){
  return Array.prototype.reduce.apply(this.element, arguments)
}

DOM.prototype.reduceRight = function reduceRight(element){
  return Array.prototype.reduceRight.apply(this.element, arguments)
}

DOM.prototype.some = function some(element){
  return Array.prototype.some.apply(this.element, arguments)
}

DOM.prototype.every = function every(element){
  return Array.prototype.every.apply(this.element, arguments)
}
