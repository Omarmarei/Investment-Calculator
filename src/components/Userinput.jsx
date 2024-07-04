export default function UserInput({ handleChange, userinputdata }) {
  return (
    <>
      {/* <h1>Test</h1> */}
      <div id="user-input">
        <div className="input-group">
          <p>
            <label> Initial Investment </label>{" "}
            <input
              type="number"
              required
              value={userinputdata.initialInvestment}
              onChange={(event) =>
                handleChange("initialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label> Annual Investment </label>{" "}
            <input
              type="number"
              required
              value={userinputdata.annualInvestment}
              onChange={(event) =>
                handleChange("annualInvestment", event.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label> Expected Return </label>{" "}
            <input
              type="number"
              required
              value={userinputdata.expectedReturn}
              onChange={(event) =>
                handleChange("expectedReturn", event.target.value)
              }
            />
          </p>
          <p>
            <label> Duration </label>{" "}
            <input
              type="number"
              required
              value={userinputdata.duration}
              onChange={(event) => handleChange("duration", event.target.value)}
            />
          </p>
        </div>
      </div>
    </>
  );
}
