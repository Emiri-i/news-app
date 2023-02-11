import { useState, useEffect } from "react"
import Select from "react-select"
import { country } from "../constant/constant"
type CountryType = {
  label: string
  value: string
}
const SelectCountry: React.FC = () => {
  const [countryValue, setCountryValue] = useState("us")
  const [countryIndex, setCountryIndex] = useState(0)
  useEffect(() => {
    const index = country.map((c) => c.value).indexOf(countryValue)
    setCountryIndex(index)
  }, [countryValue])
  const handleChange = (e: CountryType | unknown) => {
    const targetValue = e as CountryType
    setCountryValue(targetValue.value)
  }
  const customStyles = {
    container: (provided: any) => ({
      ...provided,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto",
    }),
    menu: (provided: any) => ({
      ...provided,
      width: 250,
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      width: 250,
      color: "#616161",
      backgroundColor: state.isSelected ? "#64b5f6" : "#fff",
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      width: 250,
      height: 20,
      borderRadius: 15,
      border: "2px solid rgba(0, 0, 0, 0.2) !important",
      boxShadow: state.isFocused ? 0 : 0,
    }),
    singleValue: (provided: any, state: any) => ({
      ...provided,
      color: "#616161",
    }),
  }

  return (
    <div className="select-country-wrapper">
      <Select
        options={country}
        className="react-select"
        styles={customStyles}
        placeholder="Select Country"
        value={country[countryIndex]}
        onChange={handleChange}
      />
    </div>
  )
}

export default SelectCountry
