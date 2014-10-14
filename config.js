var config = {
  // Twitter API (Proxy) URL
  baseUrl: 'http://localhost:7890',

  debug: false,
  title: 'Barcamp "nextweb" 2014',

  // search: 'from:@conc_at OR @conc_at OR #concat OR #concat15 OR #concat2015',
  search: 'from:@salzburgwebdev OR @salzburgwebdev OR #nextweb OR #nextweb14 OR #nextweb2014 OR barcamp-sbg.at',
  // list: 'fullfrontalconf/delegates11', // optional, just comment it out if you don't want it

  timings: {
    showNextScheduleEarlyBy: '5m', // show the next schedule 10 minutes early
    defaultNoticeHoldTime: '10s',
    showTweetsEvery: '3s'
  }
};

// allows reuse in the node script
if (typeof exports !== 'undefined') {
  module.exports = config;
}
