import plus from "../../img/plus.svg";
import type { CompanyKeys } from "./Map";

type CompanyDataDrawerProps = {
  companyView: Record<CompanyKeys, boolean>;
  handlePlusClick: React.MouseEventHandler<HTMLImageElement>;
  company: { companyName: string; companyData: string };
  positionNum: number;
};

const CompanyDataDrawer: React.FC<CompanyDataDrawerProps> = ({
  companyView,
  handlePlusClick,
  company,
  positionNum,
}) => {
  positionNum + 1;
  const lineKey = `line${positionNum}Active` as CompanyKeys;

  return (
    <div
      className={`line${positionNum} lineCompany`}
      style={companyView[lineKey] ? { height: "170px" } : { height: "80px" }}
    >
      <div className="visible-line">
        <h3
          className="visible-span-text"
          dangerouslySetInnerHTML={{ __html: company.companyName }}
        />
        <img
          src={plus}
          className={
            companyView[lineKey]
              ? "material-symbols-outlined plus rotate"
              : "material-symbols-outlined plus"
          }
          id={`line${positionNum}Active`}
          onClick={handlePlusClick}
        />
      </div>
      <div className="unvisible-line">
        <p dangerouslySetInnerHTML={{ __html: company.companyData }} />
      </div>
    </div>
  );
};

export default CompanyDataDrawer;
