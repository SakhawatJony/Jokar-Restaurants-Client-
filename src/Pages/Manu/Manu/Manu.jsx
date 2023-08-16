import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from '../../../assets/menu/banner3.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from "../../../hooks/useMenu/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCatagory from "../MenuCatagory/MenuCatagory";

const Manu = () => {
    const [menu]=useMenu([])
    const offered = menu.filter(item=>item.category ==='offered')
    const soup = menu.filter(item=>item.category ==='soup')
    const salad = menu.filter(item=>item.category ==='salad')
    const pizza = menu.filter(item=>item.category ==='pizza')
    const dessert = menu.filter(item=>item.category ==='dessert')
    return (
        <div>
            <Helmet>
        <title>Jokar Resturent | Manu</title>
      </Helmet>
      <Cover img={menuImage} title={"our menu"} ></Cover>
      <SectionTitle subHeading={"Don't Miss"} heading={"Today's offer"}></SectionTitle>
      <MenuCatagory items={offered}></MenuCatagory>
      <MenuCatagory items={dessert} title={"dessert"} img={dessertImage} ></MenuCatagory>
      <MenuCatagory items={pizza} title={"pizza"} img={pizzaImage} ></MenuCatagory>
      <MenuCatagory items={salad} title={"salad"} img={saladImage} ></MenuCatagory>
      <MenuCatagory items={soup} title={"soup"} img={soupImage} ></MenuCatagory>
            
        </div>
    );
};

export default Manu;