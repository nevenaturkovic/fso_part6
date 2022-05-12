import { useDispatch, useSelector } from "react-redux"
import { searchFilter } from "../reducers/filterReducer"

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    dispatch(searchFilter(event.target.value))
  }
  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter
