import { getGeocode, getLatLng } from "use-places-autocomplete";

export default async function convertAddresstoLatLng(address) {
  const results = await getGeocode({ address });
  const { lat, lng } = await getLatLng(results[0]);
  return { lat, lng };
}