import './Input.css';

export default function Input({text, setText, isToggle, handleAdd}) {

  let toggled = isToggle ? "active" : "";

  return (
    <div className='input'>
      <span>Input : </span>
      <input type='text' 
             placeholder='Enter you name' 
             value={text} 
             onChange={(e)=> 
             setText(e.target.value)
             }/>&nbsp;
      <button onClick={()=> handleAdd(text)} className={`btn ${toggled}`}>Add</button>
    </div>
  )
}
