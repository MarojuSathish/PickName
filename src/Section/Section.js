import './Section.css';
function Section({title,children}) {
    return ( 
        <>
        <h1 className='margin-vertical' >{title}</h1>
        {children}
        </>
     );
}

export default Section;