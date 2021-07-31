$(document).ready(function () {
            
    var key2 = 'AIzaSyA5QLGlYq1IuYkcme4RjtEs94o1uAjpuD8';
    var youtubeUser = 'UCQHLxxBFrbfdrk1jF0moTpw';
    var playlistId = 'PLV8g3qzGNuWh5plSw2UdjKcI2Dfiwy7KU';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';


    var options = {
        part: 'snippet',
        key: key2,
        maxResults: 500,
        playlistId: playlistId

    }

    loadVids();

    function loadVids() {
        $.getJSON(URL, options, function (data) {
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data);
        });
    }

    function mainVid(id) {
        $('#video').html(`
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="Codex Rahul Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    `);
    }


    function resultsLoop(data) {

        $.each(data.items, function (i, item) {

            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100,);
            var vid = item.snippet.resourceId.videoId;
            


            $('.video_list_section').append(`
                <li class="d-flex flex-wrap" data-key="${vid}">
                    <div class="image_back">
                        <img src="${thumb}" alt="">
                    </div>
                    <div class="details">
                        <h2>${title}</h2>
                        <p>${desc}...</p>
                    </div>
                </li>
            `);
        });
    }

    // CLICK EVENT
    $('.video_list_section').on('click', 'li', function () {
        var id = $(this).attr('data-key');
        mainVid(id);
    });

    const subCount = document.getElementById('subCount');

    let getSubscribers = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${key2}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            subCount.innerHTML = data["items"][0].statistics.subscriberCount;
        })

    }

    getSubscribers();


});




    
    