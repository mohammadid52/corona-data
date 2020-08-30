import React, { useState, useEffect } from "react";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  NativeSelect,
} from "@material-ui/core";
import { countries } from "../../api/";
import styles from "./CountryPIcker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchCountries, setFetchCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountries(await countries());
    };
    fetchAPI();
  }, [setFetchCountries]);

  return (
    <>
      <FormControl variant="filled" className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {fetchCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </>
  );
};
export default CountryPicker;
