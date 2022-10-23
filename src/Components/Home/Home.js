import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Table from './Table/Table';
import Slider from './Slider/Slider';
import Programme from './Programme/Programme';
import CrossfitProgramme from './Programme/CrossfitProgramme/CrossfitProgramme';
import SecondProgramme from './Programme/SecondProgramme';
import ThirdProgramme from './Programme/ThirdProgramme';
import AuthUser from '../../hooks/AuthUser/AuthUser';

const Home = () => {
    const {userRole}= AuthUser()

    console.log(userRole)

    return (
        <div>
            <Header />
            {/* Work Schedule */}
            <About />
            <Table />
            <CrossfitProgramme />
            <>
                <Programme />
                <SecondProgramme />
                <ThirdProgramme />
            </>
            <Slider />
            <Contact />
        </div>
    );
};

export default Home;