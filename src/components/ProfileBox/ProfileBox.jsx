import { Button } from "../index";
import { useSelector} from "react-redux";

export const ProfileBox = ({
    id,
    imgSrc, 
    firstName,
    lastName,
    userHandler,
    bio,
    link,
    setShowEditProfile
}) => {

    const {user} = useSelector(store => store?.auth);

    return (
        <div className="flex flex-row justify-evenly w-full max-w-xl bg-white py-4 border rounded">
            <div className="w-36 h-36 p-2">
                <img className="w-full rounded-full" src={imgSrc && imgSrc} alt={`${firstName} pic`} />
            </div>
            <div className="flex flex-col gap-8 p-2">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <p className="font-bold text-xl">{`${firstName} ${lastName}`}</p>
                        <p className="text-gray-400">{`@${userHandler}`}</p>
                    </div>
                    {
                        id === user._id ? 
                        <Button 
                            className={"bg-slate-700 px-4 py-1.5 text-white rounded hover:bg-slate-800"} 
                            text={"Edit"}
                            onClick={() => setShowEditProfile(true)}
                        />
                        : 
                        <Button className="bg-sky-600 py-1 px-3 rounded-2xl text-white hover:bg-sky-700" text={"Follow"}/>
                    }
                </div>
                <p className="text-gray-700 font-medium">
                    {bio}
                </p>
                <div className="flex flex-row  gap-4 text-gray-700 font-medium">
                    <p>3 posts</p>
                    <p>3 Followers</p>
                    <p>3 Following</p>
                </div>
                <a className="text-sky-600" href="https://neog-lms.vercel.app/docs/prds/social-media-app" target="_blank" rel="noopener noreferrer">
                    <p>{link}</p>
                </a>
            </div>
        </div>
    )
}