import countries from "i18n-iso-countries";

// Register the language
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const countriesObject = countries.getNames("en", { select: "official" });

const countryArray = Object.entries(countriesObject).map(([key, value]) => {
  return {
    value: value,
    label: value,
  };
});

export default countryArray;
