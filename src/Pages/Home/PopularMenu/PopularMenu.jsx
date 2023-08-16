
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Item from "../../Shared/Item/Item";
import useMenu from "../../../hooks/useMenu/useMenu";


const PopularMenu = () => {
    const [menu]=useMenu([])
    const popular = menu.filter(item=>item.category ==='popular')

   
    return (
       <section className="mb-12">
        <SectionTitle
        heading="FROM OUR MENU"
        subHeading="Popular Menu"
        
        ></SectionTitle>

        <div className="grid md:grid-cols-2 gap-6">
            {popular.map(item=><Item
            key={item._id}
            item={item}
            ></Item>)}
        </div>
        <div style={{marginLeft:'600px'}}>
        <button className="btn  btn-outline border-0 border-b-4 mt-4">View Full Manu</button>
        </div>
      

       </section>
    );
};

export default PopularMenu;