var svgContainer = document.getElementById('svgContainer');
var animItem = bodymovin.loadAnimation({
wrapper: svgContainer,
animType: 'svg',
loop: false,
path: 'img/data.json'
});