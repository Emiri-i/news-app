import SelectCategory from "./SelectCategory"
import SelectCountry from "./SelectCountry"

const FilterNews: React.FC = () => {
  return (
    <div className="filter-wrapper">
      <SelectCountry />
      <SelectCategory />
    </div>
  )
}

export default FilterNews
