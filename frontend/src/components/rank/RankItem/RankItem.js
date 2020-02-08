import React from 'react'
import "./RankItem.scss"

const RankItem = ({rank}) => {
    return(
        <div className="rank-item">
            <div className="rankies">{rank.text}</div>
            <div className="delete">&times;</div>
        </div>
    );
};

export default RankItem;