import { useEffect, useState } from "react";


const useMenu = () => {
    
    const [menu,setMenu]=useState([])
    const [lodging,setLodging] = useState(true)

    useEffect( ()=>{
            fetch('http://localhost:5000/menu')
            .then(res=>res.json())
            .then(data=>{
                setMenu(data)
                setLodging(false)
            })

        },[])
        return [menu,lodging]
};

export default useMenu;