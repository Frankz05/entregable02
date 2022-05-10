import bgImage from "../Esset/clouds.mp4"

const BgApp = () => {
    return ( 
        <div className="BgApp">
            <video autoPlay loop muted>
                <source src={bgImage} type="video/mp4" />
            </video>
        </div>
     );
}
 
export default BgApp;