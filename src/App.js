import "./App.css";
import { useEffect } from "react";
import { getUsers } from "./features/ProfilePages/userSlice";
import { AllRoutes } from "./routes/AllRoutes/Routes";
import {useDispatch, useSelector} from "react-redux";
import { getAllPosts } from "./features/feed/postSlice";


function App() {
  const dispatch = useDispatch();
  const {token} = useSelector(store => store?.auth)
  
  useEffect(() => {
    if(token) {
      dispatch(getUsers());
      dispatch(getAllPosts());
    }
  }, [token])

  return (
    <div className="App bg-slate-100 min-h-screen">
      <AllRoutes />
    </div>
  );
}

export default App;
