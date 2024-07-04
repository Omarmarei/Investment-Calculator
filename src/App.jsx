import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/Userinput";
import { useState } from "react";

function App() {
  const [userinputdata, setUserinputdata] = useState({
    initialInvestment: 60000,
    annualInvestment: 5000,
    expectedReturn: 4,
    duration: 3,
  });

  const inputIsValid = userinputdata.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserinputdata((prevUserInputData) => {
      return {
        ...prevUserInputData,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userinputdata={userinputdata} handleChange={handleChange} />

      {!inputIsValid && <p>Duration must be at least one year</p>}

      {inputIsValid && <Results input={userinputdata} />}
      
      <footer className="footer">
        Developed by Omar Marei in 2024 as a practice project for Udemy
      </footer>
    </>
  );
}

export default App;
