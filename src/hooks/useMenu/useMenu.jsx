import { useQuery } from "@tanstack/react-query";



const useMenu = () => {
    
    // const [menu,setMenu]=useState([])
    // const [lodging,setLodging] = useState(true)

    // useEffect( ()=>{
    //         fetch('http://localhost:5000/menu')
    //         .then(res=>res.json())
    //         .then(data=>{
    //             setMenu(data)
    //             setLodging(false)
    //         })
    const {data: menu = [], isLoading: lodging, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/menu');
            return res.json();
        }

        },[])
        return [menu,lodging,refetch]
};

export default useMenu;