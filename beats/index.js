var f1=100, f2=100, play1 = false, play2 = false;

$(async function () {
    document.onkeydown = function (e) {
		var k=e.key
        if (k == 'm') {
            $("#sound1").click();
        }
        if (k == 'n') {
            $("#sound2").click();
        }
    }
});
function f(n) {
    let val1 = $("#f1").val();
    let val2 = $("#f2").val();
    if (val1 < 0) {
        val1 = -val1
    }
    if (val2 < 0) {
        val2 = -val2
    }
    if (val1 == undefined) {
        val1 = 100;
    }
    if (val2 == undefined) {
        val2 = 100;
    }
    if (n == 1 || n == '1') {

        f1=val1
        $("#sound1").click();
        $("#sound1").click();
    } else {
        f2=val2;
        $("#sound2").click();
        $("#sound2").click();
    }
}
var audioCtx, osc1, osc2;
$("#sound1").on('click', function () {

    audioCtx = new(window.AudioContext || window.webkitAudioContext || window.audioContext);
    if ($("#sound1").html() == "Play red's sound") {
        $("#sound1").html("Stop red's sound")
        play1 = true;
        osc1 = audioCtx.createOscillator();
        var gainNode = audioCtx.createGain();

        osc1.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc1.frequency.value = f1;

        osc1.start(audioCtx.currentTime);
    } else {
        $("#sound1").html("Play red's sound")
        play1 = false;
        osc1.stop(audioCtx.currentTime);

    }
})
$("#sound2").on('click', function () {
    audioCtx = new(window.AudioContext || window.webkitAudioContext || window.audioContext);
    if ($("#sound2").html() == "Play blue's sound") {
        $("#sound2").html("Stop blue's sound")
        play2 = true;
        osc2 = audioCtx.createOscillator();
        var gainNode = audioCtx.createGain();

        osc2.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc2.frequency.value = f2;

        osc2.start(audioCtx.currentTime);
    } else {
        $("#sound2").html("Play blue's sound")
        play2 = false;
        osc2.stop(audioCtx.currentTime);
    }
})
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
