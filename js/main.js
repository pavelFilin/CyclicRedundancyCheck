function getCodding(s) {
    var a = s.charCodeAt(0);
    return a.toString(2);
}

$("#my-input").keyup(function () {
    var text = $("#my-input").val();
    if (text.length == 0) {
        return;
    }

    var code = "";

    for (var i = 0; i < text.length; i++) {
        code += getCodding(text[i]);
    }
    console.log(code);
});


