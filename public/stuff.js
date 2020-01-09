$.getJSON("/stuff1", function(data) {
    for (var i = 0; i < data.length; i++) {
        $("#stuff").append("<p>" + "<br/>" + data[i].name + "<br/>" + data[i].email + "</p>");
        var name = data[i].name;
    }

    $("#current-user").append(name);
});

$.getJSON("/stuff2", function(data) {
    for(var i = 0; i < data.length; i++) {
        $("#stuff").append("<p>" + "<br>" + data[i].name + "</br>" + "<br>" + data[i].info + "<br/>"+ "<br>" + data[i].age + "</p>");
    }
})

$(document).on("click", "#submitModel1", function() {
    $.ajax({
        method: "POST",
        url: "/model1",
        data: {
            name: $("#name").val(),
            email: $("#email").val()
        }
    }).then(function(data) {
        console.log(data);
    });
});

$(document).on("click", "#submitModel2", function() {
    $.ajax({
        method: "POST",
        url: "/model2",
        data: {
            name: $("#current-user").text(),
            info: $("#info").val(),
            age: $("#age").val()
        }
    }).then(function(data) {
        console.log(data);
        $("#info").val("");
        $("#age").val("");
    });
});