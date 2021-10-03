var o1, o2, k = 9000000000,G=0.00000000667, t = 0, r = 250, MOVE, anim, then, inte = 20,cnst=k;
$(function () {
    o1 = {
        circle: $('#o1'),
        s: 0,
        v: 0,
        a: 0,
        m: 5000,
        q: 1,
		x:1
    };
    o2 = {
        circle: $('#o2'),
        s: 0,
        v: 0,
        a: 0,
        m: 5000,
        q: 1,
		x:1
    };
    r = 290;
});
function start() {
    if (!anim) {
        then = Date.now();
        t = 0;
        anim = window.requestAnimationFrame(animate);
        o1 = {
            circle: $('#o1'),
            s: 0,
            v: 0,
            a: 0,
            m: 5000,
            q: 1,
			x:o1.q
        };
        o2 = {
            circle: $('#o2'),
            s: 0,
            v: 0,
            a: 0,
            m: 5000,
            q: 1,
			x:o2.q
        };
        r = 290;
        o1.circle.attr("cx", o1.s + 30);
        o2.circle.attr("cx", 320 - o2.s);
        $('#s1').html('distance travelled by object1:   ' + o1.s);
        $('#s2').html('distance travelled by object2:   ' + o2.s);
        $('#v1').html('speed of object1:   ' + o1.v);
        $('#v2').html('speed of object2:   ' + o2.v);
        $('#t').html('time elapsed:   ' + t);
        $('#cx1').html('cx1:   ' + $('#o1').attr('cx'));
        $('#cx2').html('cx2:   ' + $('#o2').attr('cx'))
        $("#p").html("");

    }
}
function speed() {
    inte = 20 / parseFloat($("#speed").val());
}
async function animate(time) {
    anim = window.requestAnimationFrame(animate);
    if (Date.now() - then > inte) {
        o1.v = cnst * o1.x * o2.x * t / (o1.m * r * r);
        o1.s += o1.v * t;
        o1.a = cnst * o1.x * o2.x / (r * r);
        o2.v = cnst * o1.x * o2.x * t / (o2.m * r * r);
        o2.s += o2.v * t;
        o2.a = cnst * o1.x * o2.x / (r * r);
        r -= (o1.v + o2.v) * t;
        if (parseFloat($('#o1').attr('cx')) + 15 >= parseFloat($('#o2').attr('cx')) - 15) {

            $("#p").html("Collision done");
            window.cancelAnimationFrame(anim);
            anim = 0;
        } else {
            o1.circle.attr("cx", o1.s + 30);
            o2.circle.attr("cx", 320 - o2.s);
            $('#s1').html('distance travelled by object1:   ' + o1.s);
            $('#s2').html('distance travelled by object2:   ' + o2.s);
            $('#v1').html('speed of object1:   ' + o1.v);
            $('#v2').html('speed of object2:   ' + o2.v);
            $('#t').html('time elapsed:   ' + t);
            $('#cx1').html('cx1:   ' + $('#o1').attr('cx'));
            $('#cx2').html('cx2:   ' + $('#o2').attr('cx'))
        }
        t += 0.04;
        then = Date.now() - (Date.now() - then) % inte;
    }
}
/*MOVE = setInterval(function () {
t += 1;
o1.v = k * o1.q * o2.q * t / (o1.m * r * r);
o1.s += o1.v * t;
o1.a = k * o1.q * o2.q / (r * r);
o2.v = k * o1.q * o2.q * t / (o2.m * r * r);
o2.s += o2.v * t;
o2.a = k * o1.q * o2.q / (r * r);
r -= (o1.v + o2.v) * t;
if (o1.s + 30 >= 320 - o2.s) {
//document.body.innerHTML="Collision done";
clearInterval(MOVE);
//alert('done')
} else {
o1.circle.attr("cx", o1.s + 30);
o2.circle.attr("cx", 320 - o2.s);
$('#s1').html('distance travelled by object1:' + o1.s);
$('#s2').html('distance travelled by object2:' + o2.s);
$('#v1').html('speed of object1:' + o1.v);
$('#v2').html('speed of object2:' + o2.v);
$('#t').html('time elapsed:' + t);
$('#cx1').html('cx1:' + $('#o1').attr('cx'));
$('#cx2').html('cx2:' + $('#o2').attr('cx'))
}

}, 1);*/
document.onkeydown = function (e) {
    var k = e.key;
    if (k == 's') {
        start();
    }
}
