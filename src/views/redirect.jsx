import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Error from './etc/error';


const Redirect = ({setUserId,authService}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUserInfo = authService.getUserInfo()
    setUserId(getUserInfo);
    navigate("/");
  }, [navigate,setUserId,authService]);
  
  
  return (
        <Error title={"Loading "}/>
    );
}

export default Redirect;