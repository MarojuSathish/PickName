 import { useState } from 'react';
import { Member } from '../Member';
import StyleButton from '../StyleButton/StyleButton';
import './MembersList.css';
import Confetti from 'react-confetti';

const people=[
  {name:"Sathish", city:"Nalgonda"},
  {name:"Manasa", city:"Chennai"},
  {name:"Varun", city:"Hyderabad"},
  {name:"Vishnu", city:"Warangal"},
  {name:"Kiran", city:"Hanumakonda"},
  {name:"Sudheer", city:"Ongole"},
  {name:"vikey", city:"mumbai"},
  {name:"Bhanu", city:"Suryapet"},
  {name:"Harsha", city:"karimNagar"},
  {name:"Chaitanya", city:"KarimNagar"},
  {name:"Keerthana", city:"Manciryal"},
  {name:"Sumanth", city:"Hyderabad"},
  {name:"Sri Harsha", city:"MahabubNagar"},
  {name:"Akshay", city:"Nizambad"},
  {name:"Suresh", city:"Guntur"},
  {name:"Sandeep", city:"Nalgonda"},
  {name:"Nithin", city:"Bangulore"},
  {name:"Mani", city:"Medak"},
  {name:"Aadhya", city:"Hyderabad"},
  {name:"Rithwik", city:"Hyderabad"},
  {name:"Rahul", city:"Bongir"},
  {name:"vedhanth", city:"Khammam"},
  {name:"Jay", city:"Siddipet"},
  {name:"Vikas", city:"Sagar"},
  
];

 function MembersList() {
  let[luckyPerson,setLukyPerson] = useState("");
  let[onLoading,setLoading] = useState(false);
  let[showCelebration,setShowCelebration] = useState(false);
    
  function pickPerson() { 
    setShowCelebration(false);
    setLoading(true);
    const randomNumber = Math.floor(Math.random() * people.length);
    const person = people[randomNumber];
    const luckyMessage = `${person.name} from ${person.city}`;

    setTimeout(function() {
      setLoading(false);
      setShowCelebration(true);
      setLukyPerson(luckyMessage);
    },5000)
    
   }
    return (
    <>
    {showCelebration && <Confetti numberOfPieces={1000}/>} 
 <div className='members-details'>
          {people.map(function(member) {
            return <Member name={member.name} city={member.city} />
          })}          
          {/* <Member name="Sathish" city="Nalgonda"/>
          <Member name="Varun" city="Hyderabad"/>
          <Member name="Vishnu" city="Warangal"/>
          <Member name="kiran" city="hanumakonda"/> */}
        </div>
        <div className='buttontop'>
          {onLoading && <h3>loading...</h3>}
          <h2>{luckyPerson}</h2>
          <StyleButton text="Lucky draw" onClick={pickPerson}/>
        </div>
    </>
        );
 }

 export default MembersList;