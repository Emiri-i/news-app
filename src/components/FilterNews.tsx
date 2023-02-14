import SelectCategory from "./SelectCategory"
import SelectCountry from "./SelectCountry"
import SearchByKeyword from "./SearchByKeyword"

const FilterNews: React.FC = () => {
  return (
    <div className="filter-wrapper">
      <SearchByKeyword />
      <SelectCountry />
      <SelectCategory />
    </div>
  )
}

export default FilterNews
