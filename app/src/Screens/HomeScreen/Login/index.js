import React from 'react';
import './index.css';
import {useHistory} from 'react-router-dom';
import GeneralButton from '../../../GeneralComponents/GeneralButton';

function Login(props){
  const history = useHistory();
  return (
    <>
    <div>
      <GeneralButton name="CLICK"
      onClick= {() => {
        history.push('/dashboard')
      }}
      />
    </div>


    </>
  );
}

export default Login;
