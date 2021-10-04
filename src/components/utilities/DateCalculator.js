export function getAge() {
  var age = new Date().getFullYear() - new Date(1990, 12, 4).getFullYear();
  return Math.abs(age);
}

export function getExperience() {
  let experienceInYears = new Date().getFullYear() - new Date(2012, 12, 3).getFullYear();
  let experienceInMonths = ((new Date().getMonth() - new Date(2012, 12, 3).getMonth()) + (12 * experienceInYears)) / 12;
  let gap = experienceInMonths - experienceInYears;
  if (gap > 0.5) {
    return Math.abs(experienceInYears) + ".5+";
  } else if (gap > 0.2) {
    return Math.abs(experienceInYears) + "+";
  } else {
    return Math.abs(experienceInYears);
  }
}

export function getCopyRightYear() {
  let year = new Date().getFullYear();
  let startYear = 2021;
  if (year > startYear) {
    return startYear + " - " + year;
  } else {
    return year;
  }
}

export function getArticleCountRound(count) {

  var remainder = count % 5;

  if (remainder === 0) {
    return count;
  } else {
    return (count - remainder) + "+";
  }
}