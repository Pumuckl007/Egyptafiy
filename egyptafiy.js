egyptafiy = {};
egyptafiy.solveButton = function(){
  var numerator = parseInt(document.getElementById("numerator").value);
  var denominator = parseInt(document.getElementById("denominator").value);
  var done = false;
  var fractions = [];
  var devisor = 2;
  while(!done){
    if(numerator/denominator>=1/devisor){
      var remove = denominator/devisor;
      numerator = numerator - remove;
      fractions.push([devisor]);
    }
    done = devisor > 300000000 || numerator <= 0;
    devisor ++;
  }
  var answer = document.getElementById("answer");
  while(answer.firstChild){
    answer.removeChild(answer.firstChild);
  }
  for(var i = 0; i<fractions.length; i++){
    var div = document.createElement("div");
    var numerator = document.createElement("div");
    numerator.innerHTML = "1";
    numerator.className="numeratorAnwser";
    var devisor = document.createElement("div");
    devisor.innerHTML = fractions[i].toString();
    devisor.className="divisorAnswer";
    answer.appendChild(div);
    div.appendChild(numerator);
    div.appendChild(devisor);
  }
}
