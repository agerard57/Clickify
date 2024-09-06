import mapboxgl from "mapbox-gl";
import { useEffect } from "react";
import { useLanguage } from "../../language";

type StatsSectionOptions = (tripCoordinates: { position: [number, number] }) => void;

export const useMapSection: StatsSectionOptions = (tripCoordinates) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (!tripCoordinates.position) {
      return;
    }

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: tripCoordinates.position,
      zoom: 13,
      accessToken: "pk.eyJ1IjoiY2xpY2tpZnkiLCJhIjoiY2x6MXBlN2RzMGhhaTJrcGZxZXNqM3V5OCJ9.de7s3fXbx5ztQy58SSxoVw",
      attributionControl: false,
    });

    map.on("load", async () => {
      new mapboxgl.Marker().setLngLat(tripCoordinates.position).addTo(map);
      map.setLayoutProperty("country-label", "text-field", ["get", `name_${language}`]);
    });

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    map.addControl(new mapboxgl.FullscreenControl(), "top-right");
  }, [language, tripCoordinates]);
};
