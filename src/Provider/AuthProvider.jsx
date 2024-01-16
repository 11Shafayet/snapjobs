import { createContext, useState } from 'react';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState('/');
  const [totalJobs, setTotalJobs] = useState();
  const [searchedText, setSearchedText] = useState('');
  const [choosedOption, setChoosedOption] = useState('default');

  const authInfo = {
    activeNav,
    setActiveNav,
    totalJobs,
    setTotalJobs,
    searchedText,
    setSearchedText,
    choosedOption,
    setChoosedOption,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
