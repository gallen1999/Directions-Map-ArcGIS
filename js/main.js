require([
      "esri/Map",
      "esri/views/MapView",
      "esri/widgets/Directions",
      "esri/widgets/Expand",
    ], function(Map, MapView, Directions, Expand) {

      var map = new Map({
        basemap: "streets-navigation-vector"
      });

      var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-79.245855, 43.151005],
        zoom: 13
      });

      var directions = new Directions({
        container: document.createElement("div"),
        view: view,
        routeServiceUrl: "https://utility.arcgis.com/usrsvcs/appservices/gallen1999g/rest/services/World/Route/NAServer/Route_World"
      });

      var expandDirections = new Expand({
        view: view,
        content: directions.domNode
      });

      view.ui.add(expandDirections, "bottom-left");

    });