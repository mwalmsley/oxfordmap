var mymap = L.map('mapid').setView([51.505, -0.09], 13);

var marker = L.marker([51.5, -0.09]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

