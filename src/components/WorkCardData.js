import bg3 from '../assets/bg3.png'
import bg4 from '../assets/bg4.png'

const ProjectCardData = [
    {
        imgsrc: bg3,
        title: 'AsOne Ecommerce',
        text: 'Inspired by a need for a sustainable trading place, this community-based online rental space  was thought by me and other 3 colleagues as a "green" replacement for the most famous E-marketplaces. The main challenges were appying Redux to manage the reducers and socket.io for the creation of the chat.  ',
        source: 'https://github.com/vanvand/MERN_eCommerce_finalProject'
    },
    {
        imgsrc: bg4,
        title: 'ReactMeals Food Order',
        text: 'I built this simple React application as practice on React states and context. The aim was to have a fully-working cart and product update solely built with React. The application is also connected to a dummy database where the informations about meals, orders and user data are stored and can be recalled at any given time. User data is validated as not to allow empty inputs from the user side',
        source: 'https://github.com/nicolofabris/food-order'
    }
]
export default ProjectCardData