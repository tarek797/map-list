import React from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import usePlacesAutocomplete from "use-places-autocomplete";
import convertAddresstoLatLng from "../utils/convertAddresstoLatLng";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function AutoCompleteAdressInputField(props) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    const { lat, lng } = await convertAddresstoLatLng(address);
    props.setSearchedLocation({ lat, lng });
    props.setMapZoom(15);
    props.setMapCenter({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect} className="mx-2">
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description}>
                <LocationOnIcon className="marker-icon" /> {description}
              </ComboboxOption>
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}

export default AutoCompleteAdressInputField;
