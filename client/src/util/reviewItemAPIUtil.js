export const getReviewItems = async () => {
  const res = await fetch('http://localhost:7001/v1/reviewItems');
  const resJSON = await res.json();
  return resJSON
}
