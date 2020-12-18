export const getReviewItems = async () => {
  const res = await fetch('http://localhost:7001/v1/reviewItems');
  const resJSON = await res.json();
  return resJSON
}

export const createReviewItem = async (item, list) => {
  const res = await fetch('http://localhost:7001/v1/reviewItems', {
    method: 'POST',
    body: JSON.stringify({ title: item }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const resJSON = await res.json()
  const newReviewItem = resJSON.data

  return newReviewItem
}
