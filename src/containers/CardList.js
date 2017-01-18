import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import { fetchData } from '../actions/recipe_actions';


class CardList extends Component {
  componentWillMount() {
    this.props.fetchRecipes();
  }

  render() {
    return (
      <div>
        <Card recipe={this.state.recipes} />
      </div>
    );
  }
}

const mapStateToProps = state => state.recipes;

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes() {
      dispatch(fetchData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
