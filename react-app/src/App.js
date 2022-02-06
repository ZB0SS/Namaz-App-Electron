import Prayers from "./components/Prayers";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'
import data from  './namaz.json';
import passed from './passed.json';
import azan from './azan1.mp3'


function App() {
  return (
    <div>
      <Prayers prayerName={'Fajr'} prayerTime={data.Fajr} passed={passed.Fajr}/>
      <Prayers prayerName={'Dhur'} prayerTime={data.Dhuhr} passed={passed.Dhuhr}/>
      <Prayers prayerName={'Asr'} prayerTime={data.Asr} passed={passed.Asr}/>
      <Prayers prayerName={'Magrihb'} prayerTime={data.Maghrib} passed={passed.Maghrib}/>
      <Prayers prayerName={'Isha'} prayerTime={data["Isha'a"]} passed={passed["Isha'a"]}/>
      <Button className="btn" onClick={() => {
        var audio = new Audio(azan);
        fetch('http://localhost:5000')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setTimeout(function () {
            audio.play();
        }, data.closest_prayer.microsecondsLeft)
        })
      }}>Remind Me</Button>
    </div>
  );
}

export default App;
