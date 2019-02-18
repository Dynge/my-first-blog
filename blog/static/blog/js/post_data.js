//$.post("url", data,
//    function(data, textStatus, jqXHR) {
//
//    },
//    "dataType"
//);
$(document).ready(function() {
    $('#js_var').click(function() {
        $(this).html("You just changed this via JQ");
    });
});

$(document).ready(function() {
    $('#submit-author').click(function(e) {
        var urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams);
        var input_text = $('#new-author').text();
        $('#js_var').html("You clicked via Jq");
        console.log("I am here")
    });
});


$(document).ready(function() {
    $('#js_var').click(function(e) {
        e.preventDefault(); 
        new_id = Math.floor(Math.random() * 100);
        $.post('', { id: 2}, function() {
            //alert(data);
            //$("#js_var").html(data);
        });
    });
});