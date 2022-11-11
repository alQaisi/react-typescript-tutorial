import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/button';
import Input from './components/input';
import Container from './components/Container';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
import Counter from './components/state/Counter';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';
import List from './components/generics/List';
import Box from './components/context/Box';
import UserWithContext  from './components/context/User';
import { ThemeProvider } from './components/context/ThemeContext';
import { UserProvider } from "./components/context/UserContext";
import RandomNumber from './components/restriction/RandomNumber';
import Toast from './components/templateliterals/Toast';
import CustomButton from './components/html/Button';
import CustomInput from './components/html/Input';
import CusotmComponent from './components/html/CustomComponent';

function App(){
  const personName={
    first:"Ahmad",
    last:"Alqaisi"
  }
  return (
    <div className="App">
      <Greet name={"Ahmad"} messageCount={10} isLoggedIn={true}/>
      <Person personName={personName}/>
      <PersonList names={[{first:"Ahmad",last:"Hamed"},{first:"Ahmad",last:"Alqaisi"}]}/>
      <Status status="loading"/>
      <Heading>Placeholder text</Heading>
      <Oscar><h1>aef</h1></Oscar>
      <Button handleClick={(event,id)=>console.log("Button Clicked",id,event)}>Click</Button>
      <Input test={(x:string)=>10} handleChange={(event)=>console.log(event.target.value,"Outside")} />
      <Container styles={{color:"red",border:"1px solid black",padding:"15px",margin:"15px auto 15px"}}/>
      <LoggedIn/>
      <User/>
      <Counter/>
      <ThemeProvider>
        <Box/>
      </ThemeProvider>
      <UserProvider>
        <UserWithContext/>
      </UserProvider>
      <DomRef/>
      <MutableRef/>
      <Private isLoggedIn={true} component={Profile}/>
      <List items={[{first:"aef",id:0},{first:"51",id:50}]}  onClick={(value)=>console.log(value)} />
      {/* <List items={[]}  onClick={(value)=>console.log(value)} renderItem={(item)=><h1>{ item }</h1>}/> */}
      <RandomNumber value={10} isPositive={true}/>
      <Toast position='center'/>
      <CustomButton variant='primary'>aef</CustomButton>
      <CustomInput type={"password"} placeholder="Aefaef"/>
      <CusotmComponent isLoggedIn={true} name="Ahmad" messageCount={10} />
    </div>
  );
}

export default App;
