import StarTrek from './spok.jpeg'

const Homepage = () => {
    return(
        <div className="home-page">
            <img src={StarTrek} alt='startrek'></img>
            <h1>Join us and live long and prosper</h1>
        </div>
    )
}

export default Homepage;