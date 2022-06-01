const weeks = document.querySelectorAll(".js-calendar-graph-svg > g > g");

// Move weeks
weeks.forEach((week, i) => {
  const days = week.children;

  if (i === 0) {
    days[0].remove();
  } else {
    // Move Sunday to the end of the week
    // Change Xs to 0, -1, -2, -3, ... and Ys to 91
    days[0].setAttribute("x", -(i - 1));
    days[0].setAttribute("y", 91);
  }

  // Move week (Monday) higher
  week.setAttribute("transform", `translate(${14 * i}, -13)`);
});

const labels = [
  ...document.querySelectorAll(
    ".js-calendar-graph-svg > g > .ContributionCalendar-label"
  ),
];

const mon = labels.find((label) => label.textContent === "Mon");
const tue = labels.find((label) => label.textContent === "Tue");
const wed = labels.find((label) => label.textContent === "Wed");
const thu = labels.find((label) => label.textContent === "Thu");
const fri = labels.find((label) => label.textContent === "Fri");
const sat = labels.find((label) => label.textContent === "Sat");
const sun = labels.find((label) => label.textContent === "Sun");

tue.setAttribute("style", "");
thu.setAttribute("style", "");
sat.setAttribute("style", "");
sun.setAttribute("style", "");

// Move week day names
sun.setAttribute("dy", 86);
mon.setAttribute("dy", 9);
tue.setAttribute("dy", 22);
wed.setAttribute("dy", 35);
thu.setAttribute("dy", 48);
fri.setAttribute("dy", 61);
sat.setAttribute("dy", 73);
