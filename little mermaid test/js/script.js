document.getElementById("boat-buttons").style.visibility = "hidden";

var myNameIs = (function() {
  var mermaidName = document.getElementById('mermaid-name').value;
  return mermaidName;
})();

function saveName() {
  var mermaidName = document.getElementById('mermaid-name').value;
  document.getElementById('say-hi').innerHTML = "Hello " + myNameIs() + ". You see a boat.";
  document.getElementById("boat-buttons").style.visibility = "visible";
}
