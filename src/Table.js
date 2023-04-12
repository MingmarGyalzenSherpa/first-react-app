import "./App.css";
import TableData from "./TableData";

function Table({ tableInfo, languages }) {
  return (
    <>
      <h3>{tableInfo}</h3>
      <table>
        <tr>
          <th>S.N</th>
          <th>Language</th>
        </tr>
        {languages.map((language, i) => {
          return (
            <tr>
              <TableData data={++i} />
              <TableData data={language} />
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Table;
