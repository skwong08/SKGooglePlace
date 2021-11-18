import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {Styles} from '../../common/styles';

interface IMapProps {
  newLocationData: any;
}

const Map: React.FC<IMapProps> = ({newLocationData}) => {
  const mapRef = React.createRef();

  const [latitude, setLatitude] = React.useState(3.158);
  const [longitude, setLongitude] = React.useState(101.7118);
  const [title, setTitle] = React.useState('KLCC');

  React.useEffect(() => {
    if (newLocationData) {
      if (newLocationData.geometry) {
        const geometry = newLocationData.geometry;
        if (geometry.location) {
          const location = geometry.location;
          if (location.lat) {
            setLatitude(location.lat);
          }
          if (location.lng) {
            setLongitude(location.lng);
          }
          if (newLocationData.formatted_address) {
            setTitle(newLocationData.formatted_address);
          }
        }
      }
    }

    mapRef.current.animateToRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
  }, [newLocationData, latitude, longitude, mapRef, title]);

  return (
    <MapView
      ref={mapRef}
      provider={PROVIDER_GOOGLE}
      style={Styles.flex}
      showsUserLocation={true}
      followsUserLocation={true}
      zoomEnabled={true}
      zoomControlEnabled={true}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      region={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      <Marker
        coordinate={{latitude: latitude, longitude: longitude}}
        title={title}
      />
    </MapView>
  );
};

export default Map;
