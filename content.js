onload = function() {
	if (window.location.href.includes("?")) {
		window.location = window.location.href.split("?")[0];
	}
};