import Select from "react-select"
import { country } from "../constant/constant"
import { newsItemsContext } from "../store/newsItemContext"
import { useContext } from "react"

const SelectCountry: React.FC = () => {
  const newsCtx = useContext(newsItemsContext)

  const customStyles = {
    container: (provided: any) => ({
      ...provided,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto",
      height: 50,
    }),
    menu: (provided: any) => ({
      ...provided,
      width: 250,
      fontFamily: "Segoe UI",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      width: 250,
      color: "#424242",
      backgroundColor: state.isSelected ? "#64b5f6" : "#fff",
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      width: 250,
      borderRadius: 20,
      fontFamily: "Segoe UI",
      fontSize: 18,
      fontWeight: "bold",
      border: "2px solid rgba(0, 0, 0, 0.2) !important",
      boxShadow: state.isFocused ? 0 : 0,
    }),
    singleValue: (provided: any, state: any) => ({
      ...provided,
      color: "#616161",
    }),
    input: (provided: any) => ({
      ...provided,
      fontWeight: "normal",
    }),
  }

  return (
    <div className="select-country-wrapper">
      <Select
        options={country}
        className="react-select"
        styles={customStyles}
        placeholder="Select Country"
        value={country[newsCtx.countryIndex]}
        onChange={newsCtx.onCountryChange}
      />
    </div>
  )
}

export default SelectCountry
