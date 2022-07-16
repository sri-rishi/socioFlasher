import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Find me a better TV series character than Harvey Specter, I'll wait.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "balika@gmail.com",
    bookmark: [],
    createdAt: "2021-05-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "rishi@gmail.com",
        text: "Breaking Bad",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "shikha@gmail.com",
        text: "Agreed 💯",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "aman@gmail.com",
        text: "will go with Dark",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: 
      "Which type of developer are you?",

    media: 
      "https://pbs.twimg.com/media/FXnRvelWQAAAK9x?format=png&name=small",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rishi@gmail.com",
    bookmark: [],
    createdAt: "2021-05-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "rahul@gmail.com",
        text: "For me it depends.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "ankur@gmail.com",
        text: "If there is no fact of SEO then 1st is ok. Otherwise, go with 2nd.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "shreya@gmail.com",
        text: "Depending on how much the person is paying 😏",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: 
      "Heavy rains - lightning - loud thunder",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rahul@gmail.com",
    bookmark: [],
    createdAt: "2021-05-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shikha@gmail.com",
        text: "electricity cut....",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "rishi@gmail.com",
        text: "aur chai pakode mil jaye",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "shreya@gmail.com",
        text: "perfect vide to code 😏",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: 
      "My college will be starting from 5th Aug.\n I don't wanna leave my office😭😭",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rishi@gmail.com",
    bookmark: [],
    createdAt: "2021-05-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "balika@gmail.com",
        text: "Same feelings here, don't wanna go to college 😤",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "ankur@gmail.com",
        text: "+1 bhai",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "shreya@gmail.com",
        text: "I feel you mine is starting from 2nd, Internship life >>>>>>>>>>>>",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: 
      "Beautiful bird 💙🤍💙",
    media: 
      "https://pbs.twimg.com/media/FXO5XE_X0AAEiMr?format=jpg&name=small",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rishi@gmail.com",
    bookmark: [],
    createdAt: "2021-05-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shikha@gmail.com",
        text: "Ultramarine flycatcher?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "shreya@gmail.com",
        text: "The quality of THAT photo!!! 🔥🔥",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "aman@gmail.com",
        text: "Adorable 🥰",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: 
      "My love for monsoons 😍🐆",
    media: 
      "https://c4.wallpaperflare.com/wallpaper/210/744/971/wild-sumatran-tiger-rain-wallpaper-preview.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rishi@gmail.com",
    bookmark: [],
    createdAt: "2021-05-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "rahul@gmail.com",
        text: "awesome 😍",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "aman@gmail.com",
        text: "🔥🔥",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "balika@gmail.com",
        text: "Fantastic footage 🥰",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: 
      "I didn't watch a single episode of TMKOC yes we exist",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shikha@gmail.com",
    bookmark: [],
    createdAt: "2021-05-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "aman@gmail.com",
        text: "Tune dekha h...Tujhe lgta h tune ni dekha pr tune dekha h.😾",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "rahul@gmail.com",
        text: "Count me in too",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "balika@gmail.com",
        text: "Why do you exist?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: 
      "How long does it take to learn a new codebase???",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ankur@gmail.com",
    bookmark: [],
    createdAt: "2021-05-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "rishi@gmail.com",
        text: "It's really related to the complexity and how big the codebase is. Probably around 3-6 months.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "rahul@gmail.com",
        text: "It's impossible to learn the whole codebase in a small period of time. \n If the codebase is huge, it can take months or years.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "shikha@gmail.com",
        text: "You don't learn new codebase. You just pick it up and start working on it and eventually you'll learn on the job.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: 
      "When they rip apart your design but end the call with, 'This constructive feedback session was good; thanks for doing this'",
    media: 
      "https://i.pinimg.com/originals/b2/79/66/b27966140db68d0621628f2309f8a443.gif",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shreya@gmail.com",
    bookmark: [],
    createdAt: "2021-05-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shikha@gmail.com",
        text: "legit my manager after giving me feedback but ending it with - 'but your nature of doing things on a fast pace justifies it'",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "rahul@gmail.com",
        text: "Aaaaaand their cursor moves right past your frame 5 times in 10 seconds 😬😬😬",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "shikha@gmail.com",
        text: "This was me yesterday",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Fresh from the garden 💕",

    media: 
      "https://pbs.twimg.com/media/FXnvvWgaUAA_t1H?format=jpg&name=medium",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ankur@gmail.com",
    bookmark: [],
    createdAt: "2021-05-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "aman@gmail.com",
        text: "Location please, I want to taste😋",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "shikha@gmail.com",
        text: "Can I take some grapes 😂",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "rahul@gmail.com",
        text: "khatta angoor",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
