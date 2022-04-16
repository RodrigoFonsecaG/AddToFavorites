import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);

  //Logar caso ja tenha cadastro
  React.useEffect(() => {
    const user = window.localStorage.getItem('user');

    if (user) {
      userLogin(user);
    }
  }, []);

  function getUser(user) {
    if (user.email) {
      setData(user);
      setLogin(true);
    }
  }

  function userLogin(user) {
    getUser(JSON.parse(user));
  }

  return (
    <UserContext.Provider value={{ data, login, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
