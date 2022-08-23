import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../store/actions/actions'
import Filter from '../pure/Filter'

const mapStateToProps = (state, ownProps) => {
    return {
        // Comprueba si el estado actual es igual a completado o no:
        active: ownProps.filter === state.filterState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default FilterContainer