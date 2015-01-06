$(function() {
    // Setup header link click animations
    $('header a').click(function(event){
        $target = $(event.target);
        if ($target.attr('href').indexOf('#') > -1) {
            $scrollTarget = $($target.attr('href').replace('/', ''));
            if ($scrollTarget.length > 0) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $scrollTarget.offset().top
                }, 300);
            }
        }
    });

    // Event for showing the 'Your audience has an audience' video
    $('.show-video').click(function(event) {
        event.preventDefault();
        youtubeCode = 'uXoNndQRX5c';
        $(event.target).after("" +
                              "<iframe id='ytplayer' type='text/html'" +
                              "src='http://www.youtube.com/embed/" + youtubeCode +
                              "?autohide=1&autoplay=1' " +
                              "frameborder='0'></iframe>").remove();
        return false;
    });

    // Fetch and render instagram feed
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'everybodyatonce',
        clientId: '31c45f88831a4f4a837b17ac3fdbfee9',
        template: '<a href="{{link}}"><img src="{{image}}" /></a>'
    });
    feed.run();

    // Fetch and render tumblr feed
    function truncate(string, length) {
        if (string.length > length)
            return string.substring(0, length) + '...';
        else
            return string;
    };
    var $posts = $('.site-blog');
    if ($posts.length > 0) {
        request = $.ajax({
            url: 'http://everybodyatonce.tumblr.com/api/read/json?num=8',
            type: "GET",
            dataType: 'jsonp'
        });
        request.done(function(response) {
            var maxPosts = 3;
            var html = "";
            var posts = response.posts.filter(function(post) {
                return post['regular-title'] || post['photo-caption'];
            });
            maxPosts = posts.length < maxPosts ? posts.length : maxPosts;
            for (var i=0; i < maxPosts; i++) {
                post = posts[i];
                var date = moment(post['date-gmt']).format('MMMM Do YYYY');
                titleHtml = $.parseHTML(post['regular-title'] || post['photo-caption']);
                titleText = truncate($(titleHtml).text(), 140);
                html += "<div class='blog-entry'>" +
                    "<div class='blog-entry-name item-heading large-heading'>" +
                    "<a href=\"" + post.url + "\">" + titleText + "</a></div>" +
                    "<div class='blog-entry-year item-supheading'>" + date + "</div>" +
                    "</div>";
            }
            $posts.append(html);
        });
    }
});
