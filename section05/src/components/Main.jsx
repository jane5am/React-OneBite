import "./Main.css";

const Main = () => {
  const user = {
    name : "APPLE",
    isLogin : true,
  };

  if( user.isLogin ) {
    // return <div style= {{
    //   backgroundColor: "red",
    //   borderBottom: "5px solid blue",
    // }}> 로그아웃</div>
    return <div className="logout">로그아웃</div>
  }else {
    return <div>로그인</div>
  }
  
  // return (
  //   <>
  //     {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
  //   </>
  // );
} 

export default Main;