$(function () {
    var bar = '';
        bar += '<footer id="footer" class="footer">';

            bar += '<div class="footer-content">';
                bar += '<div class="container">';
                    bar += '<div class="row">';

                        bar += '<div class="col-lg-3 col-md-6">';
                            bar += '<div class="footer-info">';
                                bar += '<h3>Zetachat</h3>';
                                bar += '<p>';
                                    bar += '<strong>Email:</strong> zetachatid@gmail.com<br>';
                                bar += '<p>';
                            bar += '</div>';
                        bar += '</div>';

                        bar += '<div class="col-lg-2 col-md-6 footer-links">';
                            bar += '<h4>policy</h4>';
                            bar += '<ul>';
                                bar += '<li><i class="bi bi-chevron-right"></i> <a href="/">Home</a></li>';
                                bar += '<li><i class="bi bi-chevron-right"></i> <a href="#">About us</a></li>';
                                bar += '<li><i class="bi bi-chevron-right"></i> <a href="#">Services</a></li>';
                                bar += '<li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>';
                                bar += '<li><i class="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>';
                            bar += '</ul>';
                        bar += '</div>';

                        bar += '<div class="col-lg-3 col-md-6 footer-links">';
                            bar += '<h4>Our Services</h4>';
                            bar += '<ul>';
                                bar += '<li><i class="bi bi-chevron-right"></i> <a href="#">Android</a></li>';
                                bar += '<li><i class="bi bi-chevron-right"></i> <a href="#">Zetachat Business</a></li>';
                            bar += '</ul>';
                        bar += '</div>';

                        bar += '<div class="col-lg-4 col-md-6 footer-newsletter">';
                            bar += '<h4>Our Newsletter</h4>';
                            bar += '<p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>';
                            bar += '<form action="" method="post">';
                                bar += '<input type="email" name="email"><input type="submit" value="Subscribe">';
                            bar += '</form>';

                        bar += '</div>';

                    bar += '</div>';
                bar += '</div>';
            bar += '</div>';

            bar += '<div class="footer-legal text-center">';
                bar += '<div class="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">';
                    
                    bar += '<div class="d-flex flex-column align-items-center align-items-lg-start">';
                        bar += '<div class="copyright">';
                            bar += '&copy; 2022 <strong><span>Zetachat</span></strong>';
                        bar += '</div>';
                    bar += '</div>';

                    bar += '<div class="social-links order-first order-lg-last mb-3 mb-lg-0">';
                        bar += '<a onclick="InstagramLink()" class="instagram"><i class="bi bi-instagram"></i></a>';
                        bar += '<a onclick="TiktokLink()" class="tiktok"><i class="bi bi-tiktok"></i></a>';
                    bar += '</div>';

                bar += '</div>';
            bar += '</div>';

        bar += '</footer>';

            $("#footer").html(bar);
        });
        
        function getValueByName(name) {
            var url = document.getElementById('links').getAttribute('src');
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