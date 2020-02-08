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

  render() {
    const { rankInput } = this.props;
    const { handleChange } = this;
    return (
      <div>
        <rankWrapper>
          <InsertForm rankInput={rankInput} onChangeInput={handleChange} />
        </rankWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rankInput: state.rank.rankInput
});

const mapDispatchToProps = dispatch => {
  return {
    changeRankInput: ({ value }) => {
      dispatch(rankActions.changeRankInput({ value }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankContainer);