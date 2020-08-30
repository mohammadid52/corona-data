import React, { useState, useEffect } from "react";
import { fetchData } from "./api";
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CoutryPicker/CountryPIcker";
import Chart from "./components/Chart/Chart";
import { Header } from "./components/Header/Header";
import styles from "./App.module.css";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const resp = await fetchData(country);
    setData(resp);
  };
  const handleCountryChange = async (country) => {
    const resp = await fetchData(country);
    setData(resp);
    setCountry(country);
  };

  return (
    <>
      <div className={styles.container}>
        <Header />
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    </>
  );
}

export default App;
