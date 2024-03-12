import '../styles/HomepageHeading.css'

export default function HomepageHeading () {

    return (
        <section className="homepage_heading">
            <div className="heading_top">
                <h1 className="title">HOME</h1>
            </div>
            <div className="heading_bottom">
            <input className='search' type="search" /> 
            </div>
        </section>
    )
}