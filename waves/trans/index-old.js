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
    topY = parseInt($("#c").attr("height")) / 2;
    var ctx = document.getElementById("c").getContext("2d");
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
    ctx.lineTo(10 + dif * 750 / 370, topY);
    ctx.stroke();
    /*for (let x = 0; x < dif; x += 1) {
    if (x == 100) {
    //e += `<text id="${x+50}" x="${x+50}" y="250" fill="black">◾</text>`;
    e += `<text class="red"  id="${x+50}" x="${x+50}" y="250" fill="red">.</text>`;
    } else {
    e += `<text class="red" id="${x+50}" x="${x+50}" y="250" fill="red">.</text>`;
    }
    }
    for (let x = 0; x < dif; x += 1) {
    if (x == 100) {
    e2 += `<text class="blue" id="${x+50}_blue" x="${x+50}" y="250" fill="blue">.</text>`;
    } else {
    e2 += `<text class="blue" id="${x+50}_blue" x="${x+50}" y="250" fill="blue">.</text>`;
    }
    }
    for (let x = 0; x < dif; x += 1) {
    if (x == 100) {
    e3 += `<text class="black" id="${x+50}_bl" x="${x+50}" y="250" fill="black">.</text>`;
    } else {
    e3 += `<text class="black" id="${x+50}_bl" x="${x+50}" y="250" fill="black">.</text>`;
    }
    }
    $("#svg").html(`<svg height="500" width="1000"> 			<line x1="50" y1="100" x2="50" y2="400" style="stroke:rgb(0,0,0);stroke-width:2" /> 			<line x1="${dif+50}" y1="100" x2="${dif+50}" y2="400" style="stroke:rgb(0,0,0);stroke-width:2" /> 			<line x1="50" y1="250" x2="${dif+50}" y2="250" style="stroke:rgb(0,0,0);stroke-width:2" /> 			Sorry, your browser does not support inline SVG. 		` + e + e2 + e3 + '</svg>');*/
    var t = 0,
    then;
    $("#start").on('click', async function () {
        if (!anim) {
            then = Date.now();
            t = 0;
            anim = window.requestAnimationFrame(animate);
        }
        /*inte = setInterval(async function () {
        ctx.clearRect(0, 0, 1000, 500);
        ctx.beginPath();
        ctx.moveTo(10, 10 - a1 * Math.sin(w1 * t - 2 * Math.PI / lmda * 0) );
        for (let x = 0; x < dif; x += 1) {
        var y1 =  - a1 * Math.sin(w1 * t - 2 * Math.PI / lmda * x) + 250;
        //$(`#${x+50}`).attr("y", y1.toString());
        var y2 =  - a2 * Math.sin(w2 * t + sign * 2 * Math.PI / lmda * x) + 250;
        //$(`#${x+50}_blue`).attr("y", y2.toString());
        var yres = y1 + y2 - 250;
        //$(`#${x+50}_bl`).attr("y", yres.toString());
        if (parseInt(10 * t) == 10 * t && parseInt(x / 5) == x / 5) {
        //myPts[itr] = x/4 ;
        //myPts[itr + 1] = (y1+a1) /4;
        //itr += 2;

        await ctx.lineTo(10 + x /5, 10 + (y1-250)/5);
        //cxt.endPath();
        await ctx.stroke();
        }
        }
        //console.log(myPts);
        //myPts=[1, 250, 51, 250, 101, 250, 151, 250, 201, 250, 250, 120]
        var ten = 1;
        /*var points = [{
        x: 10,
        y: 10
        }, {
        x: 20,
        y: 10
        }, {
        x: 10,
        y: 40
        }, {
        x: 40,
        y: 20
        }, {
        x: 50,
        y: 60
        }
        ]//took 5 example points
        ctx.moveTo((points[0].x), points[0].y);

        for (var i = 0; i < points.length - 1; i++) {

        var x_mid = (points[i].x + points[i + 1].x) / 2;
        var y_mid = (points[i].y + points[i + 1].y) / 2;
        var cp_x1 = (x_mid + points[i].x) / 2;
        var cp_x2 = (x_mid + points[i + 1].x) / 2;
        ctx.quadraticCurveTo(cp_x1, points[i].y, x_mid, y_mid);
        ctx.quadraticCurveTo(cp_x2, points[i + 1].y, points[i + 1].x, points[i + 1].y);
        }*/

        //drawCurve(ctx,myPts); //default tension=0.5
        //drawCurve(ctx, myPts, ten);
        // t += 0.04;
        //  }, 4000000000)
        /*inte2 = setInterval(async function () {
        for (let x = 0; x < 290; x += 1) {
        var y2 =  - 50 * Math.sin(10 * t + 0.1 * x) + 250;
        $(`#${x+50}_blue`).attr("y", y2.toString());
        }
        t += 0.001;
        }, 1)*/
        //}
    })
    async function animate(time) {
        anim = window.requestAnimationFrame(animate);
        if (Date.now() - then > 20) {
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
            if (showRed) {
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(10, topY - a1 * Math.sin(w1 * t) / factor);
                ctx.strokeStyle = "rgb(255,0,0)";
                for (let x = 0; x < dif; x += incr) {
                    var y1 =  - a1 * Math.sin(w1 * t - 2 * Math.PI / lmda1 * x);
                    ctx.lineTo(10 + x / factor, topY + (y1) / factor);
                    ctx.stroke();

                    //}
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

                    //}
                }
            }
            t += 0.04;

            then = Date.now() - (Date.now() - then) % 20;
        }
    }
    $("#stop").on('click', async function () {
        //clearInterval(inte);
        if (anim) {
            window.cancelAnimationFrame(anim);
            anim = 0;
        }

    });
    $("#red").on('click', async function () {
        if ($("#red").html() == "Hide red wave") {
            $(".red").css("display", "none");
            $("#red").html("Show red wave")
            showRed = false;
        } else {
            $(".red").css("display", "inline");
            $("#red").html("Hide red wave")
            showRed = true;
        }
    });
    $("#black").on('click', async function () {
        if ($("#black").html() == "Hide black wave") {
            $(".black").css("display", "none");
            $("#black").html("Show black wave")
            showBlack = false;
        } else {
            $(".black").css("display", "inline");
            $("#black").html("Hide black wave")
            showBlack = true;
        }
    });
    $("#blue").on('click', async function () {
        if ($("#blue").html() == "Hide blue wave") {
            $(".blue").css("display", "none");
            $("#blue").html("Show blue wave")
            showBlue = false;
        } else {
            $(".blue").css("display", "inline");
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
                $("#lmd").val(10);
                $("#w1").val(1);
                $("#w2").val(1);
                $("#amp1").val(10);
                $("#amp2").val(10);
                $("#t1").val(1);
                $("#t2").val(1);
                $("#k").val(1);
                $("#stop").click();
            }
        }
        if (k == 't') {
            $("#sign").click();
        }
    }
    $("#sign").on('click', async function () {
        sign = -sign;
    });
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
    lmda2 = val2;
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
		        $("#t1").attr("value", Math.PI/w1);

    } else {
        w2 *= val2;
    }
}
function amp(n) {
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
    if (n == 1 || n == '1')

        a1 = val1;
    else
        a2 = val2;
}
function t(n) {
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
    if (n == 1 || n == '1')

        w1 = Math.PI / val1;
    else
        w2 = Math.PI / val2;
}
function k(n) {
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
    if (n == 1 || n == '1') {
        lmda1 /= val1;
        $("#lmd1").attr("value", lmda1);

    } else {
        lmda2 /= val2;
        $("#lmd2").attr("value", lmda2);

    }
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
        //clearInterval(inte);
        /*$("#svg").empty();
        e = '';
        e2 = '';
        e3 = '';
        for (let x = 0; x < dif; x += 1) {
        if (x == 100) {
        //e += `<text id="${x+50}" x="${x+50}" y="250" fill="black">◾</text>`;
        e += `<text class="red"  id="${x+50}" x="${x+50}" y="250" fill="red">.</text>`;
        } else {
        e += `<text class="red" id="${x+50}" x="${x+50}" y="250" fill="red">.</text>`;
        }
        }
        for (let x = 0; x < dif; x += 1) {
        if (x == 100) {
        e2 += `<text class="blue" id="${x+50}_blue" x="${x+50}" y="250" fill="blue">.</text>`;
        } else {
        e2 += `<text class="blue" id="${x+50}_blue" x="${x+50}" y="250" fill="blue">.</text>`;
        }
        }
        for (let x = 0; x < dif; x += 1) {
        if (x == 100) {
        e3 += `<text class="black" id="${x+50}_bl" x="${x+50}" y="250" fill="black">.</text>`;
        } else {
        e3 += `<text class="black" id="${x+50}_bl" x="${x+50}" y="250" fill="black">.</text>`;
        }
        }
        $("#svg").html(`<svg height="500" width="1000"> 			<line x1="50" y1="100" x2="50" y2="400" style="stroke:rgb(0,0,0);stroke-width:2" /> 			<line x1="${dif+50}" y1="100" x2="${dif+50}" y2="400" style="stroke:rgb(0,0,0);stroke-width:2" /> 			<line x1="50" y1="250" x2="${dif+50}" y2="250" style="stroke:rgb(0,0,0);stroke-width:2" /> 			Sorry, your browser does not support inline SVG. 		` + e + e2 + e3 + '</svg>');
        $("#start").click();*/
    }

}
var audioCtx = new(window.AudioContext || window.webkitAudioContext || window.audioContext);
function beep(duration, frequency, volume, type, callback) {
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (volume) {
        gainNode.gain.value = volume;
    }
    if (frequency) {
        oscillator.frequency.value = frequency;
    }
    if (type) {
        oscillator.type = type;
    }
    if (callback) {
        oscillator.onended = callback;
    }

    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + ((duration || 500) / 1000));
};
