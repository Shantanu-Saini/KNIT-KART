import Hero from '@/Components/Hero/Hero'
import FAQs from '@/Components/FAQs/FAQs'
import OurTeam from '@/Components/OurTeam/OurTeam'
import HeroLanding from './HeroLanding'
import CustomNavbar from './CustomNavbar'
import landingHeroImg from '../../assets/images/landingHeroImg.jpg';


const Landing = () => {
    return (
        <>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${landingHeroImg})` }}>
                {/* Hero Section */}
                <CustomNavbar />

                {/* Hero Section */}
                <HeroLanding />
            </div>

            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${landingHeroImg})` }}>
                {/* FAQ */}
                <FAQs />

                {/* Our team */}
                <OurTeam />
            </div>

        </>
    )
}

export default Landing