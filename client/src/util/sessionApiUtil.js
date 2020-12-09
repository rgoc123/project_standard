export const signup = async user => {
  const res = await fetch('http://localhost:7001/v1/register', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const resJSON = await res.json();
  return resJSON
};

export const login = user => {
  // return $.ajax({
  //   url: '/api/session',
  //   method: 'POST',
  //   data: { user }
  // });
};

export const logout = () => {
  // return $.ajax({
  //   url: '/api/session',
  //   method: 'DELETE'
  // });
};
