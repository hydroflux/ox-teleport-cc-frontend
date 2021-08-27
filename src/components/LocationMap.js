import { Map, Marker } from "pigeon-maps"

export default function LocationMap({ latitude, longitude }) {
    return (
        <Map
            height={300}
            center={[latitude, longitude]}
            defaultZoom={10}
        >
            <Marker
                width={50}
                anchor={[latitude, longitude]}
            />
        </Map>
      )
}
