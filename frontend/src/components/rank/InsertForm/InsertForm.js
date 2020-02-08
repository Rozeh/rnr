import React from 'react';
import "./InsertForm.scss";


const InsertForm = ({ rankInput, onChangeInput, onAdd }) =>{
    const handleChange = e => {
        const { value } = e.target;
        onChangeInput({ value });
    };

    const handleKeyPress = e => {
        if(e.key === 'Enter'){
            onAdd()
        }
    };

    return(
        <div className="form">
            <div className="title">검색자료를 찾으세요</div>
            <input
                type="text"
                name="rank"
                value={rankInput}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
};

export default InserForm;