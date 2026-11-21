import { GpsCoordinates, MapCoordinates } from "./types/hub";

// SVG projection bounds for public/world-map.svg
const SVG_VIEWBOX = {
  minX: 30.767,
  minY: 241.591,
  width: 784.077,
  height: 458.627,
};

/**
 * Converts real-world GPS Latitude/Longitude coordinates to the SVG map projection coordinates.
 * Calibrated for the Equirectangular/Miller hybrid projection of world-map.svg.
 */
export function projectLatLngToSvg(coords: GpsCoordinates): MapCoordinates {
  const { lat, lng } = coords;

  // Longitudinal mapping: -180 to 180 degrees mapped to SVG width
  // Prime Meridian (0 deg) aligns near x = 400
  const normalizedLng = (lng + 180) / 360;
  const x = SVG_VIEWBOX.minX + normalizedLng * SVG_VIEWBOX.width;

  // Latitudinal mapping: Miller cylindrical projection approximation
  // Equator (0 deg) aligns near y = 475
  const latRad = (lat * Math.PI) / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  // Scaled and shifted to match world-map.svg bounds
  const y = 472 - mercN * 125;

  return {
    x: +x.toFixed(1),
    y: +y.toFixed(1),
  };
}

/**
 * Generates an SVG curved arc path string connecting two hub coordinates on the map.
 */
export function generateCurvedArc(from: MapCoordinates, to: MapCoordinates): string {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;

  // Arc curvature offset: arcs curve upwards smoothly
  const dist = Math.sqrt(dx * dx + dy * dy);
  const curvature = Math.min(dist * 0.25, 45);
  const ctrlX = midX;
  const ctrlY = midY - curvature;

  return `M ${from.x} ${from.y} Q ${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)} ${to.x} ${to.y}`;
}
