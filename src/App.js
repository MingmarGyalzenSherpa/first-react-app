import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Table from "./Table";
function App() {
  const name = "Mingmar Gyalzen Sherpa";
  const tableInfo = "Programming Languages Am Familiar With";
  const languages = ["C", "C++", "JAVA", "PHP", "Javascript", "HTML", "CSS"];
  return (
    <div className="App">
      <Header name={name} />
      <About />gi
      <Table tableInfo={tableInfo} languages={languages} />
    </div>
  );
}

export default App;
