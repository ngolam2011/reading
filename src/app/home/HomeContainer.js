import { connect } from 'react-redux'
import HomeComponent from './HomeComponent'
import { homeOperations } from './duck'

const mapDispatchToProps = (dispatch) => {
  const getArticles = () => {
    dispatch(homeOperations.fetchArticlesJson())
  }

  return {
    getArticles
  }
}

const mapStateToProps = (state) => {
  const { isGetting } = state.home
  return {
    isGetting
  }
}


const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)

export default HomeContainer
