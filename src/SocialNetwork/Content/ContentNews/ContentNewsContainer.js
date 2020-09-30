
import { connect } from 'react-redux'
import ContentNews from './ContentNews'

let mapStateToProps = (state) => {
    return {
        newsList: state.newsList,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const ContentNewsContainer = connect(mapStateToProps, mapDispatchToProps)(ContentNews)

export default ContentNewsContainer