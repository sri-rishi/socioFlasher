import { Post, NewPostBox} from "../../components/index/index";
import "./feed.css";

export const Feed = () => {
    return (
        <>
            <NewPostBox />
            <div className="w-full flex flex-col items-center gap-4">
                <Post/>
                <Post/>
                <Post/>
            </div>
        </>
    )
}