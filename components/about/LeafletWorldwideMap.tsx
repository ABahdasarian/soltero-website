"use client";

import {
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";

type Boutique = {
  name: string;
  country: string;
  city: string;
  lat: number;
  lng: number;
};

const boutiques: Boutique[] = [
  {
    name: "Marelli Exclusive Boutique",
    country: "USA",
    city: "USA",
    lat: 39.8283,
    lng: -98.5795,
  },
  {
    name: "Pickyglam Bridal",
    country: "USA",
    city: "Appleton, Wisconsin",
    lat: 44.2619,
    lng: -88.4154,
  },
  {
    name: "Elegant Affairs",
    country: "Finland",
    city: "Helsinki",
    lat: 60.1699,
    lng: 24.9384,
  },
  {
    name: "Yourssef`s Princessa",
    country: "Sweden",
    city: "Södertälje",
    lat: 59.1955,
    lng: 17.6253,
  },
  {
    name: "De bruidstuin Moda Reina",
    country: "Netherlands",
    city: "Elburg",
    lat: 52.4472,
    lng: 5.8389,
  },
  {
    name: "Oh Lovely",
    country: "Germany",
    city: "Krefeld",
    lat: 51.3388,
    lng: 6.5853,
  },
  {
    name: "Bridal Garden",
    country: "France",
    city: "Serris",
    lat: 48.8554,
    lng: 2.7869,
  },
  {
    name: "Das Brautkonzept",
    country: "Austria",
    city: "Wiener Neustadt",
    lat: 47.8112,
    lng: 16.2414,
  },
  {
    name: "BABLENA Esküvői Ruhaszalon",
    country: "Hungary",
    city: "Budapest",
    lat: 47.4979,
    lng: 19.0402,
  },
  {
    name: "Boccia 1944",
    country: "Italy",
    city: "Casapulla",
    lat: 41.075,
    lng: 14.287,
  },
  {
    name: "Favole Sposi",
    country: "Italy",
    city: "Catanzaro",
    lat: 38.91,
    lng: 16.5877,
  },
  {
    name: "Magnifica Sposa di Biondo Santina",
    country: "Italy",
    city: "Enna",
    lat: 37.567,
    lng: 14.279,
  },
  {
    name: "Chatzistavrou Bridal",
    country: "Greece",
    city: "Ptolemaida",
    lat: 40.514,
    lng: 21.679,
  },
  {
    name: "Drops of Luxury",
    country: "Greece",
    city: "Thessaloniki",
    lat: 40.6401,
    lng: 22.9444,
  },
  {
    name: "Creal Design",
    country: "Romania",
    city: "Bucharest",
    lat: 44.4268,
    lng: 26.1025,
  },
  {
    name: "Love Story",
    country: "Ukraine",
    city: "Ivano-Frankivsk",
    lat: 48.9226,
    lng: 24.7111,
  },
  {
    name: "Kamelia",
    country: "Ukraine",
    city: "Ternopil",
    lat: 49.5535,
    lng: 25.5948,
  },
  {
    name: "Angelo Bianco Wedding",
    country: "Ukraine",
    city: "Lutsk",
    lat: 50.7472,
    lng: 25.3254,
  },
  {
    name: "Grand Ajour",
    country: "Ukraine",
    city: "Kyiv",
    lat: 50.4501,
    lng: 30.5234,
  },
  {
    name: "Meel",
    country: "Ukraine",
    city: "Dnipro",
    lat: 48.4647,
    lng: 35.0462,
  },
  {
    name: "Oops and Hoops",
    country: "Cyprus",
    city: "Limassol",
    lat: 34.7071,
    lng: 33.0226,
  },
  {
    name: "Ameli",
    country: "Kazakhstan",
    city: "Almaty",
    lat: 43.222,
    lng: 76.8512,
  },
  {
    name: "Aura Novias",
    country: "Colombia",
    city: "Bogotá",
    lat: 4.711,
    lng: -74.0721,
  },
  {
    name: "Un Reve",
    country: "Brazil",
    city: "Salvador, Bahia",
    lat: -12.9777,
    lng: -38.5016,
  },
];

function MapUpdater() {
  const map = useMap();

  map.setMaxBounds([
    [-85, -180],
    [85, 180],
  ]);

  return null;
}

export default function LeafletWorldwideMap() {
  return (
    <div className="relative h-[520px] overflow-hidden bg-[#e9e7e3] md:h-[650px]">
      <MapContainer
        center={[28, 10]}
        zoom={2}
        minZoom={2}
        maxZoom={8}
        scrollWheelZoom={false}
        className="h-full w-full"
        worldCopyJump={true}
        zoomControl={true}
        attributionControl={true}
      >
        <MapUpdater />

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {boutiques.map((boutique) => (
          <CircleMarker
            key={boutique.name}
            center={[boutique.lat, boutique.lng]}
            radius={7}
            pathOptions={{
              color: "#ffffff",
              weight: 2,
              fillColor: "#B9935D",
              fillOpacity: 1,
            }}
          >
            <Popup
              closeButton={true}
              autoPan={true}
              className="soltero-popup"
            >
              <div className="min-w-[220px] px-2 py-3 text-center">
                <p className="mb-3 text-[9px] uppercase tracking-[0.35em] text-[#B9935D]">
                  {boutique.country}
                </p>

                <h3 className="font-heading text-[22px] leading-tight text-[#2A2A2A]">
                  {boutique.name}
                </h3>

                <p className="mt-3 text-[14px] text-[#777]">
                  {boutique.city}
                </p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}