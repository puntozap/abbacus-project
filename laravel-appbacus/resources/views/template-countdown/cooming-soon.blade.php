<section class="auth-page">
      <div class="animation-circle-inverse"><i></i><i></i><i></i></div>
      <div class="animation-circle"><i></i><i></i><i></i></div>
      <div class="container cooming-soon">
        <div class="row mb-50">
          <div class="col-md-6 left">
            <div class="clock-box">
              <div>
                <div class="mb-4">
                  <!-- <h2>ðŸŽ“</h2> -->
                  <h2 class="text-uppercase ">Faltan</h2>
                  <div class="line"></div>
                </div>
                <div id="clockdiv">
                  <div><span class="days"></span>
                    <div class="smalltext">Dias</div>
                  </div>
                  <div><span class="hours"></span>
                    <div class="smalltext">Horas</div>
                  </div>
                  <div><span class="minutes"></span>
                    <div class="smalltext">Minutos</div>
                  </div>
                  <div><span class="seconds"></span>
                    <div class="smalltext">Segundos</div>
                  </div>
                </div>
                <div class="line"></div>
                <h3 class="smalltext text-justify">{{$Countdown['text_summary']}}</h3>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="home-right">
              <div class="mobile-slid"><img class="img-fluid" src="{{$image_phone}}" alt="top1" style="border: 8px solid #0b35d9;border-radius: 10px;"></div>
              <div class="profile-msg">{{$Countdown['text_one']}}</div>
              <div class="awesome">{{$Countdown['text_two']}}</div>
              <div class="profile-1"><img class="img-fluid" src="{{$image_two}}" alt="top4"></div>
              <div class="emoji"><img class="img-fluid" src="../../assets/images/top5.png" alt="top5"></div>
              <div class="profile-2"><img class="img-fluid" src="{{$image_one}}" alt="top1"></div>
            </div>
          </div>
        </div>
      </div>
</section>
@section('scritps')
<script>

$(document).ready(function(){
/* timer js */
 function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
// var deadline = new Date(Date.parse(new Date()) + 50 * 24 * 60 * 60 * 1000);
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
mm++;

deadline = yyyy + '-' + mm + '-' + dd;

console.log(deadline);
initializeClock('clockdiv', deadline);
});
</script>
@endsection