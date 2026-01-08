ymaps.ready(init);

function init() {
    const map = new ymaps.Map("map", {
        center: [59.9445, 30.2890],
        zoom: 12
    });

    places.forEach(place => {
        const placemark = new ymaps.Placemark(place.coords, {
            balloonContent: `
                <strong>${place.name}</strong><br>
                ${place.description}<br><br>
                <em>Задача:</em> ${place.task}
            `
        });

        map.geoObjects.add(placemark);
    });
}
