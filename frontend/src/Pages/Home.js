import { useEffect, useState } from "react";

// Components
import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("/chat/");
      const data = await res.json();

      if (res.ok) {
        setWorkouts(data);
      }
      console.log(data);
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <ChatBox channelId={1} />
      <ChatInput />
      {/* <WorkoutDetails workouts={workouts} /> */}
    </div>
  );
};
export default Home;
