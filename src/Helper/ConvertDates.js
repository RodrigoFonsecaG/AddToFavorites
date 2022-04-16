export function convertHours(minutes) {
  const horas = Math.floor(minutes / 60);
  const min = minutes % 60;
  const textHours = `00${horas}`.slice(-2);
  const textMinutes = `00${min}`.slice(-2);

  return `${textHours}h ${textMinutes}m`;
}

export function convertIso(date) {
  const p = date.split(/\D/g);
  return [p[2], p[1], p[0]].join('/');
}
