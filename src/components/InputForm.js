import React, { useState } from 'react'

export const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    /* 以前のtaskList情報へinputTextを追加していく */
    setTaskList([
        ...taskList,
        {
          text: inputText,
        },
      ]);
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className='inputForm'>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
            <button>
                <i className="fa-solid fa-square-plus"></i>
            </button>
        </form>
    </div>
  );
};
