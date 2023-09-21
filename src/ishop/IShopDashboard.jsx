import React ,{useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const IShopDashboard = () => {
    const [Cookies, setCookie, removeCookie] = useCookies();
    const [email, setEmail] = useState();
    let navigate = useNavigate();
    useEffect(()=>{
        debugger
        if(Cookies["email"] == undefined){
            navigate("/login");
        } else {
            setEmail(Cookies["email"])
        }
    })
    function HandleSignOut(){
        removeCookie("email");
        navigate('/login');
    }
  return (
    <div>
      <h2>User Dashboard {email} - <button className='btn btn-link' onClick={HandleSignOut}>SignOut</button> </h2>
    </div>
  )
}

export default IShopDashboard
