import {useState} from 'react'
const SideBar=()=>{
    const [sideBarOpen, setSideBarOpen ] = useState(true);
    return(
        <>
        <button class='' onClick={()=>setSideBarOpen(!sideBarOpen)}>Button</button>
        {sideBarOpen && <div className="">
            <h1>
                Hello
            </h1>

        </div>}
        </>
    )
}

export default SideBar;
