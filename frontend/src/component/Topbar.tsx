
import { Link } from 'react-router-dom';

export const Topbar = () => {
    return <div className="max-w-screen-lg w-full bg-black align-center px-5 pb-5 pt-8">
        {/* <img src="/logo.png" className="max-w-56" /> */}
        <div className="text-8xl text-white">
            Code BIT
        </div>
        <NavBar />
    </div>
}

const topbarItems =[
    {
        title: "About",
        route: "/about"
    }, {
        title: "Acitivity",
        route: "/activity"
    }, {
        title: "Problems",
        route: "/problems"
    }, {
        title: "Leaderboard",
        route: "/leaderboar"
    }
]
function NavBar() {
    return <div className="flex mt-4">
        {topbarItems.map((item,i) => (<NavbarItem i={i} route={item.route} title={item.title} />))}
    </div>
}

function NavbarItem({i,title, route}: {
    i:number;
    title: string;
    route: string;
}) {
    return <div>
        <div key={i} className="mr-10 text-slate-500 cursor-pointer hover:text-white text-base font-light">
            {title}
        </div>
    </div>
}