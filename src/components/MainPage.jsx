import TypeTitle from "./TypeTitle";
import Dishes from "./Dishes";
import ProductCard from "./ProductCard";
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
            {/* <div>
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('zh')}>中文</button>
            </div> */}
            <div className="menu">
                <div className="menu-header">Menu</div>
                <div className="section-one">
                    <div>
                        <TypeTitle name="Appetizers" />
                        <div className="product-grid">
                            <ProductCard name="Cappucino" price="1.5" address="https://images.dissapore.com/wp-content/uploads/2022/11/ricetta-tazza-di-capuccino-con-il-bimby-su-vassoio.jpg?width=1280&height=720&quality=75" />
                            <ProductCard name="Tiramisu" price="4" address="https://www.giallozafferano.com/images/260-26067/Tiramisu_1200x800.jpg" />
                            <ProductCard name="Seafood Pealla" price="20" address="https://www.chilipeppermadness.com/wp-content/uploads/2022/05/Paella-Recipe1.jpg" />
                            <ProductCard name="Beef Steak" price="25" address="https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/red-meats-&-red-meat-dishes/beef-steak-with-peppercorn-gravy/beef-steak-with-peppercorn-gravy-main.jpg" />
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="contact">
                    <div>contact us</div>
                    <div>email: yystephan@gmail</div>
                    <div>whatsapp: +12063878012</div>
                    <div>linkedin: yao-ye-672b77216</div>
                </div>
                {/* <Counter/>
                <GreetSomeone/> */}
                
            </div>
        </div>
        

    );

}

export default MainPage;