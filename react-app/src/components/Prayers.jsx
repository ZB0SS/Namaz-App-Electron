import '../css/prayers.css'
function Prayers({prayerName, prayerTime, passed}) {
  return (
  <div className="box" style={passed ? {backgroundColor: 'red', color: 'white'} : {}}>
      <p className='details'>{prayerName} {prayerTime}</p>
  </div>
  )
}

export default Prayers;
