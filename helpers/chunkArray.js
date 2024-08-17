export default function chunkArray(array, chunkSize) {
  return array.reduce((total, _, index) => {
    if (index % chunkSize !== 0) {
      return total;
    }
    return [...total, array.slice(index, index + chunkSize)];
  }, []);
}