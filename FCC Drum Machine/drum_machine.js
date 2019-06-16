
function playDrumPad(key) {
    document.getElementById(key).play();
    $("#display").html($("#"+key).html());
}


function listenForEvents() {
    document.addEventListener('keydown', function(e) {
        switch (e.keyCode) {
            case 81:  $('#btn-Q').click(); break;
            case 87:  $('#btn-W').click(); break;
            case 69:  $('#btn-E').click(); break;
            case 65:  $('#btn-A').click(); break;
            case 83:  $('#btn-S').click(); break;
            case 68:  $('#btn-D').click(); break;
            case 90:  $('#btn-Z').click(); break;
            case 88:  $('#btn-X').click(); break;
            case 67:  $('#btn-C').click(); break;
            default:  $("#display").html(" "); break;
        }
    });    
}

$(listenForEvents());