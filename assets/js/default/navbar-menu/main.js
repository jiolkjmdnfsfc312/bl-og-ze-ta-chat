$(function () {
    var bar = '';
    bar += '<nav id="navbar" class="navbar">';
        bar += '<ul>';
            bar += '<li><a href="/">Home</a></li>';
            bar += '<li><a href="/m/about/">About</a></li>';
            bar += '<li><a href="/m/features/">Features</a></li>';
            bar += '<li><a href="/m/gallery/">Gallery</a></li>';
            bar += '<li><a href="/m/blog/">Blog</a></li>';

            bar += '<li class="dropdown megamenu"><a href="javascript:void(0)"><span>Menu</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>';
                bar += '<ul>';
                    bar += '<li>';
                        bar += '<a href="/m/pricing/">Pricing</a>';
                    bar += '</li>';
                    bar += '<li>';
                        bar += '<a href="/m/services/">Services</a>';
                    bar += '</li>';
                    bar += '<li>';
                        bar += '<a href="/m/keamanan/">Keamanan</a>';
                    bar += '</li>';
                bar += '</ul>';
            bar += '</li>';
            bar += '<li><a href="/m/contact/">Contact</a></li>';
         bar += '</ul>';
    bar += '</nav>';

    $("#navbar").html(bar);
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}