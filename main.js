$("#in").keyup(function() {
    var input = $("#in").val();
    if (input === "") {
        $("#out").text("The output will be generated in real time...");
    } else {
        $("#out").text(Rot13(input));
    }
});

function Rot13(str) {
    str = str.toUpperCase();
    var letters = "";
    for (var i = 0; i < str.length; i++) {
        if (65 <= str.charCodeAt(i) || str.charCodeAt(i) >= 90) {
            if (str.charCodeAt(i) + 13 > 90)
                letters += String.fromCharCode(str.charCodeAt(i) - 13);
            else letters += String.fromCharCode(str.charCodeAt(i) + 13);
        } else letters += str[i];
    }
    return letters;
}

$(function() {
    $("#in").keyup();
});
