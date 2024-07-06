import TypeTitle from "./TypeTitle";
import Dishes from "./Dishes";
import Counter from "./Counter";
import { useTranslation } from 'react-i18next';
import GreetSomeone from "./GreetSomeone";

function MainPage(props) {
    
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        // top side

        // medium side
        /// main part of menu

        // down side
        // includes phone number, email, suggestions, help center.
        
        <div className="menu-container">
            <div>
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('zh')}>中文</button>
            </div>
            <div className="menu">
                <div className="menu-header">Menu</div>
                <div className="section-one">
                    <div>
                        <TypeTitle name="Appetizers"/>
                        <Dishes name="Tiramisu" price="4"/>
                        <Dishes name="Seafood Pealla" price="2000"/>
                        <Dishes name="Beef Steak" price="15"/>
                    </div>
                    <div></div>
                </div>
                <div className="contact">
                    <div>contact us</div>
                    <div>email: yystephan@gmail</div>
                    <div>whatsapp: +12063878012</div>
                    <div>linkedin: yao-ye-672b77216</div>
                </div>
                <Counter/>
                <GreetSomeone/>
                
            </div>
        </div>
        

    );

}

export default MainPage;