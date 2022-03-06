import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { cities } from "../data/cities";
import { mountains } from "../data/highest_points";
import { continents } from "../data/continents";

import { MarkerLayer } from "../layers/marker_layer";
import { MarkerLayerWithTooltip } from "../layers/marker_layer_with_tooltip";
import { RadiusFilter } from "../layers/radius_filter";
import { ContinetsPolygonLayer } from "../layers/continents_polygon_layer";

export const Map = () => {
  const [geoFilter, setGeoFilter] = useState(null);
  const getGeoFilter = () => geoFilter;

  const [radiusFilter, setRadiusFilter] = useState(null);
  const getRadiusFilter = () => radiusFilter;

  return (
    <MapContainer center={[0, 0]} zoom={1} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerLayer
        data={cities}
        setRadiusFilter={setRadiusFilter}
        getRadiusFilter={getRadiusFilter}
        getGeoFilter={getGeoFilter}
      />
      <MarkerLayerWithTooltip data={mountains} />
      <RadiusFilter
        radiusFilter={radiusFilter}
        setRadiusFilter={setRadiusFilter}
      />
      <ContinetsPolygonLayer
        data={continents}
        setGeoFilter={setGeoFilter}
        getGeoFilter={getGeoFilter}
      />
    </MapContainer>
  );
};
