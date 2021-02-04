export default function random(array) {
  if (!array?.length) return;

  const index = Math.floor(Math.random() * array.length);

  return array[index];
}
