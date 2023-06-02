import React from "react";

const userDetail=( userFunction,userInformation)=>{
  

  return (
    <div>
     <form>
        <label>
            Username:
            <input type="text" value={userInformation.value} onChange={userFunction()} />
        </label>
        <label>
          Password:
           <input type="text" name="password"></input>
        </label>
      <input type="submit" ></input>
         </form>

    </div>
  )
}
export default userDetail;