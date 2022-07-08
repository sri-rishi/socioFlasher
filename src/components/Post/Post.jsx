import { Button, UserImage } from "../index/index";
import { RiHeart3Line, IoBookmarkOutline, GrEmoji} from "../../assests";

export const Post = () => {
    return (
        <div className="flex flex-col border-solid border w-full bg-white max-w-lg">
            <div className="flex flex-row items-center px-3 py-2 gap-2.5">
                <UserImage />
                <p>User Name</p>
            </div>
            <div className="w-full">
                <img className="w-full object-cover max-h-96" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="feed-cover" />
            </div>
            <div className="flex flex-row justify-between items-center p-3 text-xl">
                <div className="flex gap-8 flex-row items-center">
                    <Button className={"hover:text-gray-600"} icon={<RiHeart3Line />} />
                    <Button className={"hover:text-gray-600"} icon={<IoBookmarkOutline className="font-extrabold "/>}/>
                </div>
                
            </div>
            <div className="flex flex-col gap-4 px-3">
                <div className="text-left flex flex-col gap-2">
                    <p className="text-ellipsis overflow-hidden whitespace-nowrap">
                        <strong className="mr-2">User Name</strong> 
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi repellat sunt eius aspernatur autem! Assumenda, aliquam corporis sunt pariatur voluptatibus placeat cumque dolorum enim eos nulla adipisci rerum ipsum.
                        </span>
                    </p>
                    <p className="text-gray-600">View all comments</p>
                    <small className="text-gray-600">1m ago</small>
                </div>
                <div className="flex flex-row w-full items-center gap-2 pb-4 text-base">
                    <Button className="text-xl font-extrabold hover:text-gray-600" icon={<GrEmoji />}/>
                    <input className="w-full outline-transparent" placeholder="Add comments"/>
                    <Button className="text-sky-600 font-semibold hover:text-sky-900" text={"Post"}/>
                </div>
            </div>
        </div>
    )
}