import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams()
  const company = companies.find((company) => company.slug === companySlug)
 


  return (
    <>
      <div>
        <h1>Company Profile</h1>
      </div>

      <div>
        <img src={company.logo} alt={`${company.name} logo`} />
      </div>
      <h3>{company.name}</h3>
      <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">{company.website}</a>
      <p>{company.description}</p>

      <div>
        {company.techStack.map((stack) => {
          return (
            <div>
              <div>
                <img src={stack.image} alt={`${stack.name} logo`} />
              </div>
              <Link to={`/tech/${stack.name}?companySlug=${company.slug}`}>{stack.name}</Link>
            </div>
          )
        })}
      </div>
    </>

  );
}

export default CompanyPage;
