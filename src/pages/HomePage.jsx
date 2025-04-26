import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomePage( {companies}) {


  return (
    <>
      <Navbar />
      <div>
        <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
        <div className="companies-container">
        {companies.map((company) => {
          return (
            <div key={company.slug} className="company-container">
              <Link  key={company.slug} to={`/company/${company.slug}`}>{company.name} <img src={company.logo} alt={`${company.name} logo`} /></Link>
            </div>
          )
        })}
         </div>
      </div>
    </>
  );
}

export default HomePage;
