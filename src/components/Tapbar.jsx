import '../styles/Tapbar.css';


export default function Tapbar (){


    return (
        <section className='tapbar_wrapper'>
            <div class="tapBarMenu">
                <a href="/" class="menuItem">
                    <img src="/home.png" alt="Home menu icon" />
                </a>
                <a href="/favourites" class="menuItem">
                    <img src="/heart.png" alt="Favourites icon" />
                </a>
                <a href="/sell" class="menuItem">
                    <img src="/add.png" alt="Sell icon" />
                </a>
                <a href="/messages" class="menuItem">
                    <img src="/chat.png" alt="messages icon" />
                </a>
                <a href="/profile" class="menuItem">
                    <img src="/user.png" alt="User icon" />
                </a>
            </div>
        </section>
    )
} 