var generatedPolynomial = 0b1011;
var a = 0b1100001;

function getCodding(s) {
    var a = s.charCodeAt(0);
    return a.toString(2);
}

$("#my-input").keyup(function () {
    table = $("#resultTable");
    table.empty();
    var text = $("#my-input").val();
    if (text.length == 0) {
        return;
    }

    var code = "";

    for (var i = 0; i < text.length; i++) {
        code += getCodding(text[i]);
    }

    for (var i = 0; i < text.length; i++) {
        var crc = dividePolynomial(multiplyPolynomial(text.charCodeAt(i), generatedPolynomial), generatedPolynomial);
        fillTable(table, text[i], crc)
    }


});

function multiplyPolynomial(polynomial1, generatedPolynomial) {
    polynomial2Lenght = (generatedPolynomial.toString(2)).length - 1;
    var x = polynomial1 << polynomial2Lenght;
    return x;
}

function dividePolynomial(polynomial, generatedPolynomial) {
    while (polynomial > generatedPolynomial) {
        if (polynomial.toString(2)[0] == 0) {
            continue;
        } else {
            var xor = (generatedPolynomial << (polynomial.toString(2).length - generatedPolynomial.toString(2).length));
            console.log("p= " + polynomial.toString(2));
            console.log("gp= " + xor.toString(2));
            console.log("-");
            polynomial = polynomial ^ xor;
        }

    }
    return polynomial;
}

function fillTable(table, symbol, crc) {
    var tr = "<tr>";
    tr += "<td>" + symbol + "</td>";
    tr += "<td>" + symbol.charCodeAt(0).toString(2) + "</td>";
    tr += "<td>" + crc.toString(2) + "</td>";

    crc = crc.toString(2);
    while (crc.length< generatedPolynomial.toString(2).length) {
        crc = "0" + crc;
    }

    tr += "<td>" + symbol.charCodeAt(0).toString(2) + crc + "</td>";
    tr += "</tr>";
    table.append(tr);
}