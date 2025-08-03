import './StyleButton.css';
function StyleButton({text,onClick}) {
    return ( 
        <div className='button'>
        <button className="styled-Button" onClick={onClick}>{text}</button>
        </div>
     );
}

export default StyleButton;