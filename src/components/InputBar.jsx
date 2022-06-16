import React from 'react';


const InputBar = ({ setTodo }) => {
  const [input, setInput] = React.useState('');

  const handleChange = (event) => {
    // console.log(event.target.value);
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const TIMESTAMP = new Date().toISOString();
    setTodo({
      text: input,
      createdAt: TIMESTAMP,
    });
    setInput('');
  };

  return (
    <form>
      <div className="input-group w-100 mx-auto my-3">
        <input
          type="text"
          className="form-control px-5 py-auto"
          placeholder="เพิ่มรายการที่ต้องทำ"
          aria-describedby="button-addon2"
          value={input}
          onChange={handleChange}
        />
        <button className="btn btn-primary px-2" type="submit" id="button-addon2" onClick={handleSubmit}>
          เพิ่มรายการ
        </button>
      </div>
    </form>
  );
};

export default InputBar;
