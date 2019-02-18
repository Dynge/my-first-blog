function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

/** 
 * Changing color of the given ID's style.
 * @param {string} itemID This is the ID you want to change the background color of.
 */
function newColor(itemID) {
    var object;
    object = document.getElementById(itemID);
    var col_index = Math.floor(Math.random() * 3);
    var colors = ["#FF530D", "#FF0DFF", "#0F27FF"];
    object.style.background = colors[col_index]
}

function newCont() {
    document.getElementById('my-first-div').innerHTML = "<frame src= 'test.html'>";
}