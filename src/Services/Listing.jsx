import Card from "../components/Card/Card";
const Listing = () => {
    const listings = [
  { jobRole: "Accountant", companyName: "KKGA Par Excellence Private Limited", city: "Delhi", state: "Delhi", budget: "INR 15000-25000 a month", jobType: "Full Time", applyType: "Easy Apply" },
  { jobRole: "Software Engineer", companyName: "TechSoft Pvt Ltd", city: "Gurgaon", state: "Haryana", budget: "INR 40000-60000 a month", jobType: "Full Time", applyType: "Apply Now" },
  { jobRole: "Marketing Executive", companyName: "BrandX Solutions", city: "Noida", state: "U.P.", budget: "INR 20000-30000 a month", jobType: "Part Time", applyType: "Easy Apply" },
  { jobRole: "Data Analyst", companyName: "DataCorp", city: "Bangalore", state: "Karnataka", budget: "INR 35000-45000 a month", jobType: "Full Time", applyType: "Apply Now" },
  { jobRole: "HR Manager", companyName: "PeopleFirst", city: "Mumbai", state: "Maharashtra", budget: "INR 50000-70000 a month", jobType: "Full Time", applyType: "Easy Apply" }
];

    return(
        <>
        {listings.map((cardData, index) => (
            <Card key={index} cardData={cardData} />
        ))}
        

        </>
    )

}

export default Listing;