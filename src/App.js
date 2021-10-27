import logo from './logo.svg';
import './App.css';
import First from './First'
import FirstFunc from './FirstFunc'
import Locations from './Locations'
import ComponentLifeCycle from './ComponentLifeCycle'
import EventHandles from './EventHandles'
import EventBinding from './Eventbinding';
import FormValidations from './FormValidations'
import Button from './Button';

function App() {
  return (
    <div className="App">
      {/* <First />
      <FirstFunc
        name="React.js"
        platform="FE"
        Trainer="raja"
        image="https://vuejs.org/images/logo.svg"
      /> */}
      <Locations />
      <ComponentLifeCycle />
      <EventHandles />
      <EventBinding />
      <FormValidations />
      <Button />
    </div>
  );
}

export default App;
