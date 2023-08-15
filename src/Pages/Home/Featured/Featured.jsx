import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className=" featured-item  bg-fixed text-white pt-10 my-10">
            <SectionTitle
            subHeading="Check it out"
            heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-items-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repudiandae voluptas, expedita commodi totam illo libero pariatur, alias suscipit, assumenda odit nobis voluptatibus neque! Placeat quia perferendis qui necessitatibus explicabo ipsum! Consequatur ipsa corporis nobis eaque nemo perspiciatis facere odio nihil dolores architecto beatae ullam illo fuga nostrum, cum culpa.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now!</button>
                </div>
            </div>

            
        </div>
    );
};

export default Featured;