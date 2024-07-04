import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const resultsrow = calculateInvestmentResults(input);
  const initialInvestment =
    resultsrow[0].valueEndOfYear -
    resultsrow[0].interest -
    resultsrow[0].annualInvestment;

  return (
    <>
      <table id="result">
        <thead>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest(Year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </thead>
        <tbody>
          {resultsrow.map((yearData) => {
            const totalIntrest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalIntrest;
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalIntrest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
