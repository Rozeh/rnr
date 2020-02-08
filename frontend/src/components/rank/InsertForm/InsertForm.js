import React from 'react';
import "./InsertForm.scss";


const InserForm = ({ rankInput, onChangeInput}) =>{
    const handleChange = e => {
        const { value } = e.target;
        onChangeInput({ value });
    };

    return(
        <div className="form">
            <div className="title">검색자료를 찾으세요</div>
            <input
                type="text"
                name="rank"
                value={rankInput}
                onChange={handleChange}
            />
        </div>
    );
};

export default InserForm;