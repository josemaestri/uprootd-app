export default {
  getRoots: () => {
    return fetch('https://uprootd-app.herokuapp.com/api/roots/all');
  },
  registerUser: (newUser) =>{
    return fetch('https://uprootd-app.herokuapp.com/api/register',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({newUser})
    });
  },
  loginUser: (currentUser) =>{
    return fetch('https://uprootd-app.herokuapp.com/api/login/'+currentUser.username);
  }
};
