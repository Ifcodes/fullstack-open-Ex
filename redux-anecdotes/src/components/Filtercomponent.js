import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const Filter = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <input type='text' name='search' onChange={(e) => dispatch(filterChange(e.target.value))}/>
    </div>
  )
}

export default Filter