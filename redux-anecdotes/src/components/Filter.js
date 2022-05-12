import { connect } from "react-redux"
import { searchFilter } from "../reducers/filterReducer"

const Filter = (props) => {
  const handleChange = (event) => {
    props.searchFilter(event.target.value)
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

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  }
}

const mapDispatchToProps = { searchFilter }

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)
export default ConnectedFilter
