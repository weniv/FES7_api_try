import { useState } from "react";
import JoinPage from "./Components/JoinPage";
import LoginPage from "./Components/LoginPage";

function App() {
  const [page,setPage]=useState(true);
  const [info,setinfo]=useState("");
  const handlePage = ()=>{
    setPage((prevPage)=>{
      return !prevPage
    })
  }
  const getMyinfo = async ()=>{
    const token = localStorage.getItem("token");
    console.log(token);
    const res = await fetch(
      "https://api.mandarin.weniv.co.kr/user/myinfo"
      ,{
      method:"GET",
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    const json = await res.json();
    console.log(json);
    setinfo(JSON.stringify(json))
  }
  return (
    <div>
      <button type="button" onClick={getMyinfo}>내 정보 불러오기</button>
      {info}
      {
      page?
      <LoginPage handlePage={handlePage}/>:<JoinPage handlePage={handlePage}/>
      }
    </div>
  );
}
export default App;
