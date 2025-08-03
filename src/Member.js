import "./Member.css";
export function Member({name,city}) {

    // const{name, city}= value;

    // const memberName = value.name;
    // const memberCity = value.city;

    return <div className="member-each">
        <h1 >{name}</h1>
        <p>{city}</p>
    </div>
}