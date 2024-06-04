import { companydata } from "../dummydata/companys";
const Companys = () => {
  return (
    <div className="flex flex-row justify-between">
      {companydata.map((company, index) => (
        <div className="p-10" key={index}>
          <img src={company} alt="company image" key={index} />
        </div>
      ))}
    </div>
  );
};

export default Companys;
