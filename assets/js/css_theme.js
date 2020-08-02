const userPrefers = getComputedStyle(document.documentElement).getPropertyValue("content");

if  (userPrefers === "dark") {
	document.documentElement.setAttribute("data-theme", "default");
	window.localStorage.setItem("theme", "default");
}

function changeTheme(theme){
  document.documentElement.getAttribute("data-theme", theme);
  window.localStorage.setItem("theme", theme);
}

$(function() {
    $('#theme-update').on('click', function() {
        var select_value = $('#css-theme').val();
        changeTheme(select_value);
        location.reload();
    });
});
