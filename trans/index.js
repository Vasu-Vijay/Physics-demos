var e = '',
e2 = '',
e3 = '',
inte,
inte2,
a1 = 15,
a2 = 15,
lmda1 = 75,
lmda2 = 75,
w1 = Math.PI,
w2 = Math.PI, dif = 150, sign = 1, anim, showRed = true, showBlue = true, showBlack = true, factor = 0.5, incr = 1, topY;

$(async function () {
    function GetURLParameter(sParam, oldVal) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        console.log(sURLVariables);
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];

            }
        }
        return oldVal;
    }
    a1 = GetURLParameter('amp1', 15);
    a2 = GetURLParameter('amp2', 15);
    lmda1 = GetURLParameter('lmd1', 75);
    lmda2 = GetURLParameter('lmd2', 75);
    w1 = Math.PI / GetURLParameter('t1', 1);
    w2 = Math.PI / GetURLParameter('t2', 1);
    dif = GetURLParameter('l', 150);
    $("#lmd1").val(lmda1);
    $("#lmd2").val(lmda2);
    $("#amp1").val(a1);
    $("#amp2").val(a2);
    $("#t1").val(Math.PI / w1);
    $("#t2").val(Math.PI / w2);
    $("#l").val(dif)
    topY = parseInt($("#c").attr("height")) / 2;
    var ctx = document.getElementById("c").getContext("2d");
    setup();
    var t = 0,
    then;
    $("#start").on('click', async function () {
        if (!anim) {
            then = Date.now();
            t = 0;
            anim = window.requestAnimationFrame(animate);
        }
    })
    async function animate(time) {
        anim = window.requestAnimationFrame(animate);
        if (Date.now() - then > 20) {
            setup();
            if (showRed) {
                ctx.beginPath();
                ctx.moveTo(10, topY - a1 * Math.sin(w1 * t) / factor);
                ctx.strokeStyle = "rgb(255,0,0)";
                for (let x = 0; x < dif; x += incr) {
                    var y1 =  - a1 * Math.sin(w1 * t - 2 * Math.PI / lmda1 * x);
                    ctx.lineTo(10 + x / factor, topY + (y1) / factor);
                    ctx.stroke();

                }
            }
            if (showBlue) {
                ctx.beginPath();
                ctx.moveTo(10, topY - a2 * Math.sin(w2 * t) / factor);
                ctx.strokeStyle = "rgb(0,0,255)";
                for (let x = 0; x < dif; x += incr) {
                    var y2 =  - a2 * Math.sin(w2 * t + sign * 2 * Math.PI / lmda2 * x);

                    ctx.lineTo(10 + x / factor, topY + (y2) / factor);
                    ctx.stroke();

                }
            }
            if (showBlack) {
                ctx.beginPath();
                ctx.moveTo(10, topY - a1 * Math.sin(w1 * t) / factor - a2 * Math.sin(w2 * t) / factor);
                ctx.strokeStyle = "rgb(0,0,0)";
                for (let x = 0; x < dif; x += incr) {
                    var yres =  - a1 * Math.sin(w1 * t - 2 * Math.PI / lmda1 * x) - a2 * Math.sin(w2 * t + sign * 2 * Math.PI / lmda2 * x);
                    ctx.lineTo(10 + x / factor, topY + (yres) / factor);
                    ctx.stroke();

                }
            }
            t += 0.04;

            then = Date.now() - (Date.now() - then) % 20;
        }
    }
    $("#stop").on('click', async function () {
        if (anim) {
            window.cancelAnimationFrame(anim);
            anim = 0;
        }

    });
    $("#red").on('click', async function () {
        if ($("#red").html() == "Hide red wave") {
            $("#red").html("Show red wave")
            showRed = false;
        } else {
            $("#red").html("Hide red wave")
            showRed = true;
        }
    });
    $("#black").on('click', async function () {
        if ($("#black").html() == "Hide black wave") {
            $("#black").html("Show black wave")
            showBlack = false;
        } else {
            $("#black").html("Hide black wave")
            showBlack = true;
        }
    });
    $("#blue").on('click', async function () {
        if ($("#blue").html() == "Hide blue wave") {
            $("#blue").html("Show blue wave")
            showBlue = false;
        } else {
            $("#blue").html("Hide blue wave")
            showBlue = true;
        }
    });
    document.onkeydown = function (e) {
        var k = e.key;
        if (k == 's') {
            $("#start").click();
        }
        if (k == 'p') {
            $("#stop").click();
        }
        if (k == 'r') {
            for (let i = 0; i < dif; i++) {
                $(".red").attr("y", "0");
                $(".blue").attr("y", "0");
                $(".black").attr("y", "0");
                clearInterval(inte);
                a1 = 15;
                a2 = 15;
                lmda1 = 75;
                lmda2 = 75;
                w1 = Math.PI;
                w2 = Math.PI;
                t = 0;
                sign = 1;
                $("#lmd1").val(75);
                $("#lmd2").val(75);
                $("#amp1").val(15);
                $("#amp2").val(15);
                $("#t1").val(1);
                $("#t2").val(1);
                $("#stop").click();
                setup();
            }
        }
        if (k == 't') {
            $("#sign").click();
        }
    }
    $("#sign").on('click', async function () {
        sign = -sign;
    });
    function setup() {
        ctx.clearRect(0, 0, 1000, 500);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "rgb(0,0,0)";
        ctx.beginPath();
        ctx.moveTo(10, 20);
        ctx.lineTo(10, parseInt($("#c").attr("height")) - 20);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(10 + dif * 750 / 375, 20);
        ctx.lineTo(10 + dif * 750 / 375, parseInt($("#c").attr("height")) - 20);
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(10, topY);
        ctx.lineTo(10 + dif * 750 / 375, topY);
        ctx.stroke();
    }
});
function lmd() {
    let val1 = $("#lmd1").val();
    let val2 = $("#lmd2").val();
    if (val1 < 0) {
        val1 = -val1
    }
    if (val2 < 0) {
        val2 = -val2
    }
    if (val2 == undefined) {
        val2 = 1;
    }
    if (val1 == undefined) {
        val1 = 1;
    }
    lmda1 = val1;
    $("#k1").attr("value", 2 * Math.PI / lmda1);
    lmda2 = val2;
    $("#k2").attr("value", 2 * Math.PI / lmda2);
    window.history.replaceState('', '', updateURLParameter(window.location.href, 'lmd1', lmda1))
    window.history.replaceState('', '', updateURLParameter(window.location.href, 'lmd2', lmda2))

}
function w(n) {
    let val1 = $("#w1").val();
    let val2 = $("#w2").val();
    if (val1 < 0) {
        val1 = -val1
    }
    if (val2 < 0) {
        val2 = -val2
    }
    if (val1 == undefined) {
        val1 = 1;
    }
    if (val2 == undefined) {
        val2 = 1;
    }
    if (n == 1 || n == '1') {
        w1 *= val1;
        $("#t1").attr("value", Math.PI / w1);
    } else {
        w2 *= val2;
    }
}
function amp() {
    let val1 = $("#amp1").val();
    let val2 = $("#amp2").val();
    console.log(val1, val2);
    if (val1 < 0) {
        val1 = -val1
    }
    if (val1 == undefined) {
        val1 = 1;
    }
    if (val2 == undefined) {
        val2 = 1;
    }
    if (val2 < 0) {
        val2 = -val2
    }

    a1 = val1;
    a2 = val2;
    window.history.replaceState('', '', updateURLParameter(window.location.href, 'amp1', a1))
    window.history.replaceState('', '', updateURLParameter(window.location.href, 'amp2', a2))
}
function t() {
    let val1 = $("#t1").val();
    let val2 = $("#t2").val();
    if (val1 < 0) {
        val1 = -val1
    }
    if (val2 < 0) {
        val2 = -val2
    }
    if (val1 == undefined) {
        val1 = 1;
    }
    if (val2 == undefined) {
        val2 = 1;
    }
    w1 = Math.PI / val1;
    window.history.replaceState('', '', updateURLParameter(window.location.href, 't1', val1))
    w2 = Math.PI / val2;
    window.history.replaceState('', '', updateURLParameter(window.location.href, 't2', val2))
}
function k() {
    let val1 = $("#k1").val();
    let val2 = $("#k2").val();
    if (val1 < 0) {
        val1 = -val1
    }
    if (val2 < 0) {
        val2 = -val2
    }
    if (val1 == undefined) {
        val1 = 1;
    }
    if (val2 == undefined) {
        val2 = 1;
    }
    lmda1 = 2 * Math.PI / val1;
    $("#lmd1").attr("value", lmda1);
    window.history.replaceState('', '', updateURLParameter(window.location.href, 'lmd1', lmda1))
    lmda2 = 2 * Math.PI / val2;
    $("#lmd2").attr("value", lmda2);
    window.history.replaceState('', '', updateURLParameter(window.location.href, 'lmd2', lmda2))
}
function l() {
    let val = $("#l").val();
    if (val < 0) {
        val = -val;
    }
    if (val == undefined) {
        val = dif;
    }
    if (val > 360) {
        alert('Maximum length allowed is 360px!');
    } else {
        dif = parseInt(val);
        window.history.replaceState('', '', updateURLParameter(window.location.href, 'l', dif))
    }

}
function updateURLParameter(url, param, val) {
    var paramVal = val.toString();
    var TheAnchor = null;
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";

    if (additionalURL) {
        var tmpAnchor = additionalURL.split("#");
        var TheParams = tmpAnchor[0];
        TheAnchor = tmpAnchor[1];
        if (TheAnchor)
            additionalURL = TheParams;

        tempArray = additionalURL.split("&");

        for (var i = 0; i < tempArray.length; i++) {
            if (tempArray[i].split('=')[0] != param) {
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }
    } else {
        var tmpAnchor = baseURL.split("#");
        var TheParams = tmpAnchor[0];
        TheAnchor = tmpAnchor[1];

        if (TheParams)
            baseURL = TheParams;
    }

    if (TheAnchor)
        paramVal += "#" + TheAnchor;

    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}
