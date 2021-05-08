pannellum.viewer = pannellum.viewer("panorama", {
    type: "equirectangular",
    panorama: "img/index/panorama.jpeg",
    compass: true,
    autoLoad: true,
    showControls: false,
    mouseZoom: false,
    draggable: false
});
// Make buttons work
document.getElementById("pan-up").addEventListener("click", function (e) {
    pannellum.viewer.setPitch(pannellum.viewer.getPitch() + 15);
});
document.getElementById("pan-down").addEventListener("click", function (e) {
    pannellum.viewer.setPitch(pannellum.viewer.getPitch() - 15);
});
document.getElementById("pan-left").addEventListener("click", function (e) {
    pannellum.viewer.setYaw(pannellum.viewer.getYaw() - 15);
});
document.getElementById("pan-right").addEventListener("click", function (e) {
    pannellum.viewer.setYaw(pannellum.viewer.getYaw() + 15);
});
document.getElementById("zoom-in").addEventListener("click", function (e) {
    pannellum.viewer.setHfov(pannellum.viewer.getHfov() - 15);
});
document.getElementById("zoom-out").addEventListener("click", function (e) {
    pannellum.viewer.setHfov(pannellum.viewer.getHfov() + 15);
});