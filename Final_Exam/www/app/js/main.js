$(document).ready(function() {
    searchPhoto('holiday', 'any', render);

    function searchPhoto(query, orientation, callback) {
        var q = "";
        if (!query) {
            q = 'holiday';
        } else {
            q = query;
        }
        if (orientation == 'any') {
            orientation = (window.innerWidth <= 768) ? 'horizontal' : 'vertical';
        }
        var reqString = 'https://pixabay.com/api/?q=' + q + '&orientation=' + orientation + '&image_type=photo&key=2717787-691d61cdcb6847f3180471c5d&per_page=50';


        var xhr = new XMLHttpRequest();
        xhr.open('GET', reqString, true); //key=2717787-691d61cdcb6847f3180471c5d
        xhr.send();
        var parsed;
        xhr.onreadystatechange = function() { // (3)
            if (xhr.readyState != 4) return;


            if (xhr.status != 200) {
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                parsed = JSON.parse(xhr.responseText);
                // console.log(parsed);
                callback(parsed);
            }
        };
    }

    function render(data) {
        console.log('data.hits', data.hits);
        var html = $('#template').html();
        var tmpl = _.template(html);
        var arr = [];
        for (var i = 0; i < data.hits.length; i++) {
            if (window.innerWidth > 768) {
                if (data.hits[i].webformatHeight / data.hits[i].webformatWidth > 1) {
                    arr.push(data.hits[i]);
                }
            } else {
                arr.push(data.hits[i]);
            }
        }
        console.log('arr', arr);
        $('.jcarousel-wrapper1').append(tmpl({
            start: 0,
            count: 5,
            img: arr
        }));
        $('.jcarousel-wrapper2').append(tmpl({
            start: 5,
            count: 5,
            img: arr
        }));
        $('.jcarousel-wrapper3').append(tmpl({
            start: 10,
            count: 5,
            img: arr
        }));
        var carousels = $('.jcarousel');

        carousels.each(function() {
            $(this).jcarousel({});
        });
    }

    searchPhoto('building', 'all', renderMasonry);

    function renderMasonry(data) {
        var html = $('#masonry-template').html();
        var tmpl = _.template(html);
        $('.masonry-wrapper').append(tmpl({
            start: 0,
            count: 10,
            img: data.hits
        }));


        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.grid-img',
                gutter: 20
            }
            // masonryHorizontal: {
            //     rowHeight: 312
            // }
            // fitRows: {
            //     gutter: 20
            // }
        });
        // console.log('$grid', $grid);
        // layout Isotope after each image loads
        $grid.imagesLoaded().done(function() {
            $grid.isotope('layout');
        });
    }


    $(window).resize(function name(params) {
        var carousels = $('.jcarousel');

        carousels.each(function() {
            $(this).jcarousel({});
        });
        console.log('window.innerWidth', window.innerWidth);
        console.log('window.Width', $(document).width());
    });
});