import SearchBar from "../components/SearchBar/SearchBar";
import Filter from "../components/Layout/Filter";
import Listing from "../Services/listing";
import NextPage from "../components/Button/NextPage";
import Footer from "../components/Layout/Footer";
import FormDetail from "../components/Layout/FormDetail";
const Home=()=>{
    return(
        <>
        <SearchBar />
        <Filter />
        <Listing />
        <NextPage />
        <FormDetail />
        <Footer />
        </>
    )
}

export default Home;