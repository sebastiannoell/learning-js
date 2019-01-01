// Funtion to return the name of the weekday for the given date
function dayName(date) {
  const daysOfTheWeek = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag"
  ];
  return daysOfTheWeek[date.getDay()];
}

// Returns a greeting msg with a given date
function greeting(user, date) {
  user = user.trim(); // Trimming them user
  return `Moin ${user}, heute ist ${dayName(date)}.`;
}
