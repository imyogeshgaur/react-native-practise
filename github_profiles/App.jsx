import React,{useState}from 'react'
import NavBar from './Components/NavBar'
import "./node_modules/bootstrap/dist/css/bootstrap.min.css"


const App = () => {

  const [state, setstate] = useState({
    uname:"",
    nameOfUser:"",
    followerOfUser:"",
    followingOfUser:"",
    publicRepo:"",
    locationOfUser:"",
    hiringOfUser:""
  })

const analyzeTheResult = () =>{
    fetch(`https://api.github.com/users/${state.uname}`)
    .then((data)=>{data.json(),console.log(data);})
    .then((data2)=>{
        setstate({
          nameOfUser:data2.name,
          followerOfUser:data2.followers,
          followingOfUser:data2.following,
          publicRepo:data2.public_repos,
          locationOfUser:data2.location,
          imageOfUser:data2.avatar_url
        })
    })
}
const inputEventHandler = (event) =>{
    const value = event.target.value;
    const name = event.target.user;

    console.log(value);

    setstate((prevValue)=>{
        return{
             ...prevValue,
             [name]:value
        }
    })
}

  return (
    <>
    <NavBar />
      <div className="container mt-5 col-md-6">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Enter the Github Username</label>
          <input type="text" class="form-control" id="uname" name="uname" placeholder="Enter the Github Username" value={state.uname} onChange={inputEventHandler} />
        </div>
        <button className="btn btn-outline-secondary col-md-12 my-5" onClick={analyzeTheResult}>Analyze</button>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">User's Name</label>
          <input type="text" class="form-control" id="nameOfUser" name="nameOfUser" placeholder="" disabled={true} value={state.nameOfUser}/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">User's Followers</label>
          <input type="text" class="form-control" id="followerOfUser" name="followerOfUser" placeholder="" disabled={true} value={state.followerOfUser}/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">User's Following</label>
          <input type="text" class="form-control" id="followingOfUser" name="followingOfUser" placeholder="" disabled={true} value={state.followingOfUser}/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">User's Public Repo</label>
          <input type="text" class="form-control" id="publicRepo" name="publicRepo" placeholder="" disabled={true} value={state.publicRepo}/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">User's Location</label>
          <input type="text" class="form-control" id="starsOfUser" name="locationOfUser" placeholder="" disabled={true} value={state.starsOfUser} />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Image Of User</label>
           <img src={state.imageOfUser} alt=""/>
        </div>
      </div>

    </>
  )
}

export default App


