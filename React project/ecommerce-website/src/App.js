
import './App.css';
import HomePageComponent from './home page components/homepage-component';
import ScoreBoard from './use state/score -board-component/scoreboard';

function App() {
//  const date = new Date();
//  const presentDate= date.getDate();
//  const currentMonth=date.getMonth()
//  const presentYear=date.getFullYear()

//  const presentHour=date.getHours()
//  const presentMinutes=date.getMinutes()
//  const  presentSeconds=date.getSeconds()
//  const milliSeconds=date.getMilliseconds()


  return (
    <div>
          {/* <p>present date is:{presentDate}</p>
          <p>current month is: {currentMonth + 1}</p>
          <p>current year is : {presentYear}</p>
          <p>Today complete date is : {presentDate}/{currentMonth + 1}/{presentYear}</p>

          <p>Present Hour is: {presentHour}</p>
          <p>current minutes : {presentMinutes}</p>
          <p>current seconds: {presentSeconds}</p>
          <p>present milliseconds : {milliSeconds}</p>

          <p>Today complete time is {presentHour}:{presentMinutes}:{presentSeconds}:{milliSeconds} </p> */}

          
          {/* <HomePageComponent /> */}
          <h1>India</h1>
          <ScoreBoard />
          <h1>Srilanka</h1>
          <ScoreBoard />

         
    </div>
  );
}

export default App;
