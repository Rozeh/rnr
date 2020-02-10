import React, { Component } from "react";
import { connect } from "react-redux";
import InsertForm from "components/rank/InsertForm";
import RankWrapper from "components/rank/RankWrapper";

import * as rankActions from "store/modules/rank";

export class RankContainer extends Component {
  handleChange = ({ value }) => {
    const { changeRankInput } = this.props;
    changeRankInput({ value });
  };
  addRanking = () => {
    const { addRanking } = this.props;
    addRanking();
  };

  render() {
    const { rankInput } = this.props;
    const { handleChange, addRanking } = this;
    return (
      <div>
        <RankWrapper>
          <InsertForm
            rankInput={rankInput}
            onChangeInput={handleChange}
            onAdd={addRanking}
            />
        </RankWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rankInput: state.rank.rankInput,
  rank: state.rank.rankies
});

const mapDispatchToProps = dispatch => {
  return {
    changeRankInput: ({ value }) => {
      dispatch(rankActions.changeRankInput({ value }));
    },
    addRanking: () => {
      dispatch(rankActions.addRanking());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankContainer);