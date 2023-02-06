import SelectCategory from "./SelectCategory"

const FilterNews: React.FC<{ currentCategory: string }> = (props) => {
  return <SelectCategory currentCategory={props.currentCategory} />
}

export default FilterNews
