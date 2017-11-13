/*
CGP Selfgaf - selfgaf.js
11/13/2017 by CreativeGP
*/

Gaf = function(root) {
    this.root = root;
    this.root.css("position", "absolute");
    this.entities_count = 0;
};

Gaf.prototype.get_root = function() {
    return this.root;
};

Gaf.prototype.draw_rectangle = function(x, y, w, h) {
    var id = "rect"+this.entities_count;
    this.root.append("<div id='"+id+"'></div>");
    $("#"+id).css("position", "absolute");
    $("#"+id).css("width", w+"px");
    $("#"+id).css("height", h+"px");
    $("#"+id).css("top", x+"px");
    $("#"+id).css("left", y+"px");
    $("#"+id).css("background-color", "black");
    ++this.entities_count;
};

function gaf_draw_rectangle(x, y, w, h) {
}

$(function () {
    var gaf = new Gaf($("gaf"));
    gaf.draw_rectangle(0, 0, 100, 100);
    gaf.draw_rectangle(300, 300, 100, 100);
});
