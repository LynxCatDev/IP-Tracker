'use client';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.scss';

interface MapProps {
  lat?: number;
  lng?: number;
  zoom?: number;
}

export const Map = ({ lat, lng, zoom = 5 }: MapProps) => {
  const center: [number, number] = [lat ?? 0, lng ?? 0];

  // zoom limits
  const MIN_ZOOM = 6;
  const MAX_ZOOM = 11;
  const clampedZoom = Math.max(MIN_ZOOM, Math.min(zoom, MAX_ZOOM));

  // If no coordinates available, render a small placeholder
  if (typeof lat !== 'number' || typeof lng !== 'number') {
    return <div className="ip-map">Map data not available</div>;
  }

  // Ensure Leaflet's default icon URLs are set (if app uses default markers).
  // This uses public paths so it won't attempt to resolve imports during SSR.
  if (typeof window !== 'undefined') {
    try {
      // remove any existing getter to avoid warnings
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/marker-icon-2x.png',
        iconUrl: '/marker-icon.png',
        shadowUrl: '/marker-shadow.png',
      });
    } catch (e) {
      // noop
    }
  }

  const divIcon = L.divIcon({
    className: 'custom-marker',
    html: '<span class="marker-dot"></span>',
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });

  return (
    <div className="ip-map">
      <MapContainer
        center={center}
        zoom={clampedZoom}
        minZoom={MIN_ZOOM}
        maxZoom={MAX_ZOOM}
        doubleClickZoom={false}
        attributionControl={false}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        touchZoom={false}
        dragging={false}
        boxZoom={false}
        keyboard={false}
        zoomControl={false}
      >
        <ZoomControl position="topright" />
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={center} icon={divIcon}>
          <Popup>
            <div>
              <strong>Location</strong>
              <div>{`${lat?.toFixed(4)}, ${lng?.toFixed(4)}`}</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
