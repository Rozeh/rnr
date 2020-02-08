import React from "react";
import './RankList.scss';
import RankItem from 'components/rank/RankItem/RankItem';

const RankList = ({ rank }) => {
    // const rankList = rank.map((rank, i) => {
    //     return <RankItem rank={rank} key={rank.id} />
    // });
    return (
        <div className="rank-list">
            <div className="title">최근 순위 상황...</div>
            {/* {rankList} */}
        </div>
    );
};

export default RankList;