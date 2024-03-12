import Tapbar from "./Tapbar"
import HomepageHeading from '../components/HomepageHeading'
import CategoryGrid from "./CategoryGrid"
import '../styles/Home.css'

export default function Home () {

    return (
        <section className="home">
            <HomepageHeading /> 
            <CategoryGrid />
            <Tapbar />
        </section>
    )
}