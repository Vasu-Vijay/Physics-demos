var G = 0.00000000667, m = 5000, mp = 6 * Math.pow(10, 12), then, anim, ctx, q = 0, r = 230, x = -230, y = 0, vx = 0, vy = 10, a = G * mp / (r * r), ax = a, ay = 0, dt = 0.001, inte;
$(async function () {

})
function start() {
    if (!anim) {
        then = Date.now();
        t = 0;
        //anim = window.requestAnimationFrame(animate);

    }
    inte = setInterval(animate, 1);
};
function stop() {
    if (anim) {
        //window.cancelAnimationFrame(anim);
        anim = 0;
    }
    clearInterval(inte);
};
document.onkeydown = function (e) {
    var k = e.key;
    if (k == 's') {
        start();
    }
    if (k == 'p') {
        stop();
    }
}
function animate() {
    // anim = window.requestAnimationFrame(animate);
    // if (Date.now() - then > ) {
    x += vx * dt;
    y += vy * dt;
    vx += ax * dt;
    vy += ay * dt;
    q = Math.atan(y / x);
    //console.log(q);
    var sign1 = 1,
    sign2 = 1;
    if (x < 0 && y > 0) {
        sign1 = 1;
        sign2 = -1
    }
    if (x > 0 && y > 0) {
        sign1 = -1;
        sign2 = -1
    }
    if (x > 0 && y < 0) {
        sign1 = -1;
        sign2 = 1
    }
    if (x < 0 && y < 0) {
        sign1 = 1;
        sign2 = 1
    }
    //if(q<0&&x>0){sign=-1}

    r = Math.abs(Math.sqrt(x * x + y * y));
    a = G * mp / (r * r);
    ax = a * Math.abs(Math.cos(q)) * sign1;
    ay = a * Math.abs(Math.sin(q)) * sign2;
    //console.log(x,y);
    //console.clear();
    //ctx.clearRect(0, 0, 1000, 1000);
    ctx.beginPath();
    ctx.moveTo(270, 250);
    ctx.arc(250, 250, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.moveTo(251 + x, 250 - y);
    ctx.arc(250 + x, 250 - y, 1, 0, 2 * Math.PI);
    ctx.stroke();
    //t += 0.04;
    // then = Date.now() //- (Date.now() - then) % 1;
    //}
}
function checkPwd() {
    console.log(process.env.PWD_SATELLITE);
    if ($('#pwd').val() == 'gmmpta@667') {
        $('#div2').css('display','block')
        $('#div').css('display','none')
        ctx = document.getElementById('c').getContext('2d');
        ctx.arc(250, 250, 20, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.moveTo(21, 250)
        ctx.arc(20, 250, 1, 0, 2 * Math.PI)
        ctx.stroke();
        function GetURLParameter(sParam, oldVal) {
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++) {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam) {
                    return sParameterName[1];
                }
            }
            return oldVal;
        }
        vy = parseFloat(GetURLParameter('vy', 10));
    }
	else{
		$('p').html('Wrong password!')
	}
}
function update(){
	let val=parseFloat($('#vy').val());
	if(val<0){ val=-val; }
	if(val==undefined){val=vy;}
	vy=val;
	window.history.replaceState('', '', updateURLParameter(window.location.href, 'vy', vy))
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
