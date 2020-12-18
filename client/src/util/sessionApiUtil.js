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

export const login = async user => {
  const res = await fetch('http://localhost:7001/v1/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const resJSON = await res.json();
  const loggedInUser = resJSON.data.user
  localStorage.setItem('user', JSON.stringify(loggedInUser))

  return loggedInUser
};

export const logout = () => {
  // return $.ajax({
  //   url: '/api/session',
  //   method: 'DELETE'
  // });
};
