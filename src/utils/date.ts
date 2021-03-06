const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayLength = 24 * 60 * 60 * 1000;

export const spelled = (date: Date) => {
  const month = months[date.getMonth()];
  return `${month} ${date.getDate()}`;
};

export const brief = (date: Date) => date.toISOString().split("T")[0];

export const isValidDate = (d: any) => d instanceof Date && !isNaN(d.getTime());

export const daysFrom = (dayNum: number, date: Date = new Date()) =>
  new Date(Date.now() + dayNum * dayLength);
