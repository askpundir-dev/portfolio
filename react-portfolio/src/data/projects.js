// Amazon Frontend Clone
import amazonHome from '../assets/projects-images/amazon-frontend-clone/homepage.png';
import amazonSearch from '../assets/projects-images/amazon-frontend-clone/searchbar-focus-effect.png';
import amazonEmptyCart from '../assets/projects-images/amazon-frontend-clone/empty-cart.png';
import amazonCart from '../assets/projects-images/amazon-frontend-clone/cart-with-products.png';
import amazonCheckout from '../assets/projects-images/amazon-frontend-clone/checkout.png';
import amazonTracking from '../assets/projects-images/amazon-frontend-clone/tracking.png';

// Amazon React Clone
import amazonReactHome from '../assets/projects-images/amazon-react-clone/homepage.png';
import amazonReactEmpty from '../assets/projects-images/amazon-react-clone/empty-cart.png';
import amazonReactCart from '../assets/projects-images/amazon-react-clone/cart-checkout.png';
import amazonReactOrders from '../assets/projects-images/amazon-react-clone/orders.png';
import amazonReactTracking from '../assets/projects-images/amazon-react-clone/tracking.png';

// To-Do List App
import todoMain from '../assets/projects-images/to-do-list/main-interface.png';
import todoNoTask from '../assets/projects-images/to-do-list/no-task-yet.png';

// Chat Bot
import chatBotChat from '../assets/projects-images/chat-bot/chatting-interphase.png';
import chatBotMain from '../assets/projects-images/chat-bot/main-interface.png';

// Rock Paper Scissors Game
import rpsOpening from '../assets/projects-images/rock-paper-scissors/opening-page.png';
import rpsMain from '../assets/projects-images/rock-paper-scissors/main-interface.png';

const projects = [
  {
    id: 1,
    images: [
      { src: amazonHome, alt: "homepage" },
      { src: amazonSearch, alt: "searchbar focus effect" },
      { src: amazonEmptyCart, alt: "empty cart" },
      { src: amazonCart, alt: "cart with products" },
      { src: amazonCheckout, alt: "checkout" },
      { src: amazonTracking, alt: "tracking" },
    ],
    name: "Amazon",
    nameDescription: "(Amazon Frontend Clone)",
    description: "A multi-page, responsive frontend clone of Amazon with product listing, navigation bar, cart interface and order-tracking.",
    technologies: ["html", "css", "javascript"],
    liveProjectLink: "https://askpundir-dev.github.io/amazon-frontend-clone/amazon.html",
    sourceCodeLink: "https://github.com/askpundir-dev/amazon-frontend-clone",
  },
  {
    id: 2,
    images: [
      { src: amazonReactHome, alt: "homepage" },
      { src: amazonReactEmpty, alt: "empty cart" },
      { src: amazonReactCart, alt: "cart with products" },
      { src: amazonReactOrders, alt: "orders" },
      { src: amazonReactTracking, alt: "tracking" },
    ],
    name: "E-commerce Clone",
    nameDescription: "(E-commerce Clone using React)",
    description: "An interactive e-commerce frontend with cart management, order tracking, and responsive UI. Built with React + Vite.",
    technologies: ["html", "css", "javascript", "react", "backend technologies"],
    liveProjectLink: "http://react-proj-ecommerce-cl.netlify.app",
    sourceCodeLink: "https://github.com/askpundir-dev/ecommerce-react-clone",
  },
  {
    id: 3,
    images: [
      { src: todoMain, alt: "main interface" },
      { src: todoNoTask, alt: "no task yet" },
    ],
    name: "To-Do App",
    nameDescription: "(Simple To Do List Application)",
    description: "A To-Do List app with add, delete, complete, and persistent storage using localStorage.",
    technologies: ["html", "css", "javascript"],
    liveProjectLink: "https://askpundir-dev.github.io/todo-list-app/",
    sourceCodeLink: "https://github.com/askpundir-dev/todo-list-app",
  },
  {
    id: 4,
    images: [
      { src: chatBotChat, alt: "chatting interphase" },
      { src: chatBotMain, alt: "main interface" },
    ],
    name: "Chat Bot",
    nameDescription: "(A simple Chat bot with minimal Functionality)",
    description: "An interactive chatbot built with React.js that provides dynamic conversations through a responsive chat interface.",
    technologies: ["html", "css", "javascript", "react", "vite"],
    liveProjectLink: "http://chat-bot-proj.netlify.app",
    sourceCodeLink: "https://github.com/askpundir-dev/chat-bot",
  },
  {
    id: 5,
    images: [
      { src: rpsOpening, alt: "opening page" },
      { src: rpsMain, alt: "main interface" },
    ],
    name: "Game",
    nameDescription: "(Simple Rock Paper Scissors game)",
    description: "A web-based Rock Paper Scissors game featuring score tracking, responsive UI, and interactive gameplay logic.",
    technologies: ["html", "css", "javascript"],
    liveProjectLink: "https://askpundir-dev.github.io/rock-paper-scissors-game/",
    sourceCodeLink: "https://github.com/askpundir-dev/rock-paper-scissors-game",
  },
];

export default projects;
