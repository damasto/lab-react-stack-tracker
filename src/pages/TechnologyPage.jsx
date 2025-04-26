import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function TechnologyPage( {technologies}) {

  const [searchParams, setSearchParams] = useSearchParams()
  const {slug} = useParams()
  const companySlug = searchParams.get("companySlug").toLowerCase()
  const navigate = useNavigate()
  const technology = technologies.find((tech) => tech.slug === slug.toLowerCase().split(".").join(""))

  const handleBackClick = () => {
    if(companySlug) {
      navigate(`/company/${companySlug}`)
    } else {
      navigate(-1)
    }
  }


  return (
    <div>
      <h1>Technology Details</h1>
      <div>
        <img src={technology.image} alt={`${technology.name} logo`} />
      </div>
      <div>
        <h3>{technology.name}</h3>
        <p>{technology.description}</p>
      </div>
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
}

export default TechnologyPage;
