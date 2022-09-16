ymaps.ready(init);
function init(){
  const map = new ymaps.Map('map', {
    center: [59.92855946226412,30.34651365406033],
    zoom: 15,
    controls: ['zoomControl']
  }, {
    restrictMapArea: [[59.918272328686754,30.305314923591574],[59.93884339615951,30.387712384529063]]
  });

  const placemark = new ymaps.Placemark(map.getCenter(), {
    balloonContentHeader: '<span class="map__title">Наш адрес</span>',
    balloonContentBody: '<span class="map__desc">Санкт-Петербург,<br />Владимирский проспект, 23,<br />лит. А, офис 701</span>',
    balloonContentFooter: '<a class="map__link" href="#">Схема проезда</a>'
  });

  map.geoObjects.add(placemark);
  placemark.balloon.open();
}
