import {  FeedPost, FollowBar, MenuBar, Navbar, Footer, FloatPostBtn, NewPostBox} from "../../components/index/index";
import "./feed.css";

export const Feed = () => {
    return (
        <div className="w-full">
            <Navbar />
            <div className="md:flex w-full flex-row relative">
                <MenuBar />
                <main className="main w-full mt-16 pt-4 md:pt-0 flex flex-col items-center gap-4 border-x md:mt-0 md:w-5/6 md:ml-1/6">
                    <header className="hidden md:flex border-b w-full p-4 text-left sticky top-0 left-0 bg-slate-100">
                        <p className="text-lg font-semibold">Home</p>
                    </header>
                    {/* Only this div will remain here evrything else will move to template file */}
                    <div className="w-full flex flex-col items-center gap-4"> 
                        <NewPostBox />
                        <div className="w-full flex flex-col items-center gap-4 pb-36 md:pb-4">
                            <FeedPost/>
                            <FeedPost/>
                            <FeedPost/>
                        </div>
                    </div>
                    <FloatPostBtn />
                </main>
                <FollowBar />
            </div>
            <Footer />
        </div>
    )
}