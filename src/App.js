
import './App.css';
import {About} from './About/About';
import Header from './Header/Header';
import MembersList from './MembersList/MembersList';
import Section from './Section/Section';


export function App() {
  return (
    <div>
        <Header/>
       <div className='center-screen'>
        <Section title="About US">
            <About /> 
        </Section>  
        <Section title="Members">
             <MembersList />
        </Section>
       </div>
          
    </div>
  );
}
