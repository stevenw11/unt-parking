// Functions to operate navigation bar
function openNav() {
  document.getElementById("side-bar").style.width = "200px";
  document.getElementById("main-bar").style.marginLeft = "200px";
  document.getElementById("sidebar-toggle").innerHTML = '<a href="javascript:void(0)" onclick="closeNav()"><i class="glyphicon glyphicon-remove"></i></a>';
}

function closeNav() {
  document.getElementById("side-bar").style.width = "0px";
  document.getElementById("main-bar").style.marginLeft = "0px";
  document.getElementById("sidebar-toggle").innerHTML = '<a href="javascript:void(0)" onclick="openNav()"><i class="glyphicon glyphicon-menu-hamburger"></i></a>';
}
