export default {
  getRoots: () => {
    return fetch('https://uprootd-app.herokuapp.com/api/roots/all');
  }
};
