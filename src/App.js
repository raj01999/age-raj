import { useState } from 'react';
import './App.css';

function App() {
  const tempMonth = new Date().getMonth() + 1

  const [day, setDay] = useState(String(new Date().getDate()))
  const [month, setMonth] = useState(tempMonth === 1 ? "01 jan" : (tempMonth === 2 ? "02 feb" : (tempMonth === 3 ? "03 mar" : (tempMonth === 4 ? "04 apr" : (tempMonth === 5 ? "05 may" : (tempMonth === 6 ? "06 jun" : (tempMonth === 7 ? "07 jul" : (tempMonth === 8 ? "08 aug" : (tempMonth === 9 ? "09 sep" : (tempMonth === 10 ? "10 oct" : (tempMonth === 11 ? "11 nov" : "12 dec")))))))))))
  const [year, setYear] = useState(new Date().getFullYear())

  const [dayS, setDayS] = useState(String(new Date().getDate()))
  const [monthS, setMonthS] = useState(tempMonth === 1 ? "01 jan" : (tempMonth === 2 ? "02 feb" : (tempMonth === 3 ? "03 mar" : (tempMonth === 4 ? "04 apr" : (tempMonth === 5 ? "05 may" : (tempMonth === 6 ? "06 jun" : (tempMonth === 7 ? "07 jul" : (tempMonth === 8 ? "08 aug" : (tempMonth === 9 ? "09 sep" : (tempMonth === 10 ? "10 oct" : (tempMonth === 11 ? "11 nov" : "12 dec")))))))))))
  const [yearS, setYearS] = useState(new Date().getFullYear())

  const [result, setResult] = useState("")

  const handleFocus = (e) => {
    e.target.select()
  }

  const age = (d1, m1, y1, d2, m2, y2) => {
    const monthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d1 > d2) {
      d2 = d2 + monthList[m2 - 1];
      m2 = m2 - 1;
    }
    if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    const d = d2 - d1;
    const m = m2 - m1;
    const y = y2 - y1;

    if (y < 0) {
      return "ভুল বয়স"
    }

    return `${y} year ${m} month ${d} day`
  }

  const handleClick = (e) => {
    const d1 = Number(day)
    const m1 = Number(month[0] + month[1])
    const y1 = Number(year)
    const d2 = Number(dayS)
    const m2 = Number(monthS[0] + monthS[1])
    const y2 = Number(yearS)

    const FinalResult = age(d1, m1, y1, d2, m2, y2)
    setResult(FinalResult)
  }

  return (
    <>
      <div className="container">
        <h2>---From---</h2>
        <div className="child1">
          <select name="day" id="day" value={day} onChange={(e) => { setDay(e.target.value) }}>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <select name="month" id="month" value={month} onChange={(e) => { setMonth(e.target.value) }}>
            <option value="01 jan">01 jan</option>
            <option value="02 feb">02 feb</option>
            <option value="03 mar">03 mar</option>
            <option value="04 apr">04 apr</option>
            <option value="05 may">05 may</option>
            <option value="06 jun">06 jun</option>
            <option value="07 jul">07 jul</option>
            <option value="08 aug">08 aug</option>
            <option value="09 sep">09 sep</option>
            <option value="10 oct">10 oct</option>
            <option value="11 nov">11 nov</option>
            <option value="12 dec">12 dec</option>
          </select>
          <input type="number" name="year" id="year" min={1} max={9999} value={year} onChange={(e) => { setYear(e.target.value) }} onFocus={handleFocus} />
        </div>

        <h2>---To---</h2>
        <div className="child2">
          <select name="dayS" id="dayS" value={dayS} onChange={(e) => { setDayS(e.target.value) }}>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <select name="monthS" id="monthS" value={monthS} onChange={(e) => { setMonthS(e.target.value) }}>
            <option value="01 jan">01 jan</option>
            <option value="02 feb">02 feb</option>
            <option value="03 mar">03 mar</option>
            <option value="04 apr">04 apr</option>
            <option value="05 may">05 may</option>
            <option value="06 jun">06 jun</option>
            <option value="07 jul">07 jul</option>
            <option value="08 aug">08 aug</option>
            <option value="09 sep">09 sep</option>
            <option value="10 oct">10 oct</option>
            <option value="11 nov">11 nov</option>
            <option value="12 dec">12 dec</option>
          </select>
          <input type="number" name="yearS" id="yearS" min={1} max={9999} value={yearS} onChange={(e) => { setYearS(e.target.value) }} onFocus={handleFocus} />
        </div>

        <div className="btn">
          <button className="button-1" onClick={handleClick}>Get Age</button>
        </div>

        <p>{result}</p>
      </div>
    </>
  );
}

export default App;
