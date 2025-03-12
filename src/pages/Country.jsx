import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import CountryCard from "../components/Layouts/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    /*const res = await getCountryData();
    const data = res.json();
    setdata(data);*/

    // to avoid above code we r using startTransition
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  // if the search state exists then return the matching country names
  const searchBar = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search);
    }
    return true;
  };

  // if any region is selected in filterbar
  const filterBar = (country) => {
    if (filter === "all") return countries;
    return country.region === filter;
  };

  // to show the searched and filtered countries
  const filteredCountries = countries.filter(
    (country) => searchBar(country) && filterBar(country)
  );

  if (isPending) return <Loader />;

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <ul className="grid grid-four-cols">
        {filteredCountries.map((country, index) => {
          return <CountryCard country={country} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
