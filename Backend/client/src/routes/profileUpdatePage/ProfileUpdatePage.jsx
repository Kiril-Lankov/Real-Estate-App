import { useContext } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";

function ProfileUpdatePage() {

    const { currentUser, updateUser } = useContext(AuthContext);
    return (
<div >
<div className="profileUpdatePage">
      <div className="formContainer">
        <form > 
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
        {/*  {error && <span>error</span>} */}
       </form> 
      </div>
      <div className="sideContainer">
        <img src={currentUser.avatar || "/noavatar.jpg"} alt="" className="avatar" />
       {/* <UploadWidget
          uwConfig={{
            cloudName: "kito",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar} 
        /> */}
      </div>
    </div>
</div>
    )
} 

export default ProfileUpdatePage;