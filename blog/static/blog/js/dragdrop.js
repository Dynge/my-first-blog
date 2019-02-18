/**
 * 
 * @param {*} event 
 */
function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text",
        (parseInt(style.getPropertyValue("left"), 10) - event.clientX) +
        ',' +
        (parseInt(style.getPropertyValue("top"), 10) - event.clientY) +
        ',' +
        event.target.id);
}

function drop(event) {
    var offset = event.dataTransfer.getData("text").split(',');
    var drag_object = document.getElementById(offset[2]);
    drag_object.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    drag_object.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    drag_object.style.background = 'rgba(200, 200, 200, 0.66)';
    document.getElementById('js_var').innerHTML = ('X: ' + parseInt(event.clientX, 10)) + " Y: " + parseInt(event.clientY, 10);
    return false;
}

function drag_over(event) {
    event.preventDefault();
    return false;
}

var drag_ids;
drag_ids = ["dragme", "dragme2"];
for (let index = 0; index < drag_ids.length; index++) {
    var drag_object = document.getElementById(drag_ids[index]);
    drag_object.addEventListener('dragstart', drag_start, false);

}

document.body.addEventListener('dragover', drag_over, false);
document.body.addEventListener('drop', drop, false);