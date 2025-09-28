const FormDetail = () => {
    return(
        <div className="block items-center">   
            <h1 className="block m-4 font-bold"> Details </h1>
            <lable forHtml="name" className="m-2 font-semibold"> Full Name: </lable>
            <input type="text" id="name" name="name" className= "block border border-gray-300 rounded-2xl px-3 py-2 m-2"/>
            <lable forHtml="email" className=" m-2 font-semibold"> Email: </lable>
            <input type="email" id="email" name="email" className="block border border-gray-300 rounded-2xl px-3 py-2 m-2"/>
            <lable forHtml="phone" className="m-2 font-semibold"> Phone: </lable>
            <input type="tel" id="phone" name="phone" className="block border border-gray-300 rounded-2xl px-3 py-2 m-2"/>
            <br/>
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded m-4">Submit</button>
        </div>
    );
};

export default FormDetail;