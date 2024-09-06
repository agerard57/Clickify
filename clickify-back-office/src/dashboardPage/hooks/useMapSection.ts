import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

type PointGeometry = mapboxgl.Point & { coordinates: [number, number] };

type StatsSectionOptions = () => void;

export const useMapSection: StatsSectionOptions = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-98.5795, 39.8283],
      zoom: 3,
      accessToken: "pk.eyJ1IjoiY2xpY2tpZnkiLCJhIjoiY2x6MXBlN2RzMGhhaTJrcGZxZXNqM3V5OCJ9.de7s3fXbx5ztQy58SSxoVw",
      attributionControl: false,
    });

    map.on("load", () => {
      map.addSource("earthquakes", {
        type: "geojson",
        data: "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      map.addLayer({
        id: "clusters",
        type: "circle",
        source: "earthquakes",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": ["step", ["get", "point_count"], "#51bbd6", 100, "#f1f075", 750, "#f28cb1"],
          "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
        },
      });

      map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "earthquakes",
        filter: ["has", "point_count"],
        layout: {
          "text-field": ["get", "point_count_abbreviated"],
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 12,
        },
      });

      map.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "earthquakes",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#11b4da",
          "circle-radius": 4,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#fff",
        },
      });

      map.on("click", "clusters", (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["clusters"],
        });
        const clusterId = features[0].properties.cluster_id;
        const source = map.getSource("earthquakes") as mapboxgl.GeoJSONSource;
        source.getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err) return;
          const geometry = features[0].geometry as unknown as PointGeometry;
          map.easeTo({
            center: geometry.coordinates as [number, number],
            zoom,
          });
        });
      });

      map.on("click", "unclustered-point", (e) => {
        const geometry = e.features[0].geometry as unknown as PointGeometry;
        const coordinates: [number, number] = [...geometry.coordinates];
        const { mag } = e.features[0].properties;
        const tsunami = e.features[0].properties.tsunami === 1 ? "yes" : "no";

        if (["mercator", "equirectangular"].includes(map.getProjection().name)) {
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(`magnitude: ${mag}<br>Was there a tsunami?: ${tsunami}`)
          .addTo(map);
      });

      map.on("mouseenter", "clusters", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "clusters", () => {
        map.getCanvas().style.cursor = "";
      });
    });
  }, []);
};
