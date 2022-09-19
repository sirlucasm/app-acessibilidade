import { useContext } from 'react';

import AuthContext from '.';

const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  return { ...authContext } as const;
};

export default useAuthContext;
