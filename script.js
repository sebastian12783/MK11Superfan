function scorpion_audio() {
  stopsong();
  document.getElementById("scorpionvoiceline").play();
  document.getElementById("video_holder").src =
    "https://www.youtube.com/embed/H6fQyP-Tj7Q?si=KSXUSvWfNBDVmqed";
}
function stopsong() {
  //change the blue stuff
  document.getElementById("scorpionvoiceline").pause();
  document.getElementById("scorpionvoiceline").currentTime = 0;
  document.getElementById("subzerovoiceline").pause();
  document.getElementById("subzerovoiceline").currentTime = 0;
  document.getElementById("dragonfightclub").pause();
  document.getElementById("dragonfightclub").currentTime = 0;
}

function subzero_audio() {
  stopsong();
  document.getElementById("subzerovoiceline").play();
  document.getElementById("video_holder").src =
    "https://www.youtube.com/embed/zZN622GA-Rc?si=Rm-C4p12DowiVFC8";
}

function fightclub_audio() {
  stopsong();
  document.getElementById("dragonfightclub").play();
}
function mkstopsound() {
  stopsong();
  document.getElementById("video_holder").src =
    "https://www.youtube.com/embed/JACjbPdpnDw?si=7zLprzoBjYHIwdwC";
}
