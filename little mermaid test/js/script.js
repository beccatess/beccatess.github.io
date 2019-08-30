document.getElementById("boat-buttons").style.visibility = "hidden";

function saveName() {
  var mermaidName = document.getElementById('mermaid-name').value;
  document.getElementById('say-hi').innerHTML = "Hello " + mermaidName + ". You see a boat.";
  document.getElementById("boat-buttons").style.visibility = "visible";
}
