

const FoodCard = ({item}) => {
    const {name,recipe,image,price} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-slate-900 absolute right-0 text-white mr-4 mt-4 px-4">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-slate-100 border-orange-400 btn-outline border-0 border-b-4 mt-4">add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;