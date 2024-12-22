import axios from "axios";
 import { BASE_URL } from "../utils/constants";
 import { useDispatch, useSelector } from "react-redux";
 import { addFeed } from "../utils/feedSlice";
 import { useEffect } from "react";
 import UserCards from "./UserCards";

//  const Feed = () => {
  
//      const feed = useSelector((store) => store.feed);
//    const dispatch = useDispatch();

//   const getFeed = async () => {
//      if (feed) return;
//      try {
//        const res = await axios.get(BASE_URL + "/feed", {
//         withCredentials: true,
//        });
//        dispatch(addFeed(res.data));
//        console.log(feed);
//        console.log(res.data);


//      } catch (err) {
//        console.error(err);
//      }
//    };

//    useEffect(() => {
//      getFeed();
//   }, []);
  
//    return (
     
//        <div className="flex justify-center my-10">
//          <UserCards user={feed[0]} />
//        </div>

// );
// };

//xport default Feed;


const Feed = () => {
    const feed = useSelector((store) => store.feed);
    const dispatch = useDispatch();
    const getFeed = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/feed`, { withCredentials: true });
        console.log("API Response:", res.data);  // Log full response to check

        // Since the response is directly an array of users, assign it to the state
        const responseData = res.data || [];  // In case of empty response
        dispatch(addFeed(responseData));

    } catch (err) {
        console.error("Error fetching feed:", err);
    }
};


    useEffect(() => {
        getFeed();  // Call API when the component mounts
    }, []);

    if (!feed || feed.length === 0) {
        return <h1 className="flex justify-center my-10">No new users found!</h1>;
    }

    return (

        <div className="flex justify-center my-10">
          
                <UserCards user={feed[0]} />
         
        </div>
        )
};


export default Feed;
