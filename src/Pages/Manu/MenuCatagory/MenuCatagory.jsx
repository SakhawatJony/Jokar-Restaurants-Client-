import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import Item from "../../Shared/Item/Item";


const MenuCatagory = ({items,title,img}) => {

    return (
        <div className="pt-8">
      {title &&<Cover img={img} title={title} ></Cover>}
           
            <div className="grid md:grid-cols-2 gap-10 my-16">
            {items.map(item=><Item
            key={item._id}
            item={item}
            ></Item>)}
        </div>
        <div style={{marginLeft:'600px'}}>
        <Link to={`/order/${title}`}><button className="btn  btn-outline border-0 border-b-4 mt-4">Order Now!!!</button></Link>
        </div>
            
        </div>
    );
};

export default MenuCatagory;