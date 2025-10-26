import "../../style/map.scss";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import Media from "react-media";

import CompanyDataDrawer from "./CompanyDataDrawer";
const center = { lat: 51.39241275673889, lng: 16.204791932272258 };
export type CompanyKeys = "line1Active" | "line2Active";
const MapBox = () => {
  return (
    <GoogleMap zoom={19} center={center} mapContainerClassName="map">
      <Marker position={center} />
    </GoogleMap>
  );
};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });
  const [companyView, setCompanyView] = useState<Record<CompanyKeys, boolean>>({
    line1Active: false,
    line2Active: false,
  });

  const handlePlusClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.currentTarget as HTMLImageElement;
    const lineClicked = target.id as CompanyKeys;
    setCompanyView({
      ...companyView,
      [lineClicked]: !companyView[lineClicked],
    });
  };

  return (
    <>
      <Media query="(min-width: 992px)">
        {(matches) => {
          return matches ? (
            <div className="map-and-address-container">
              {!isLoaded ? (
                "<div className='loading-box'><h3>Loading...</h3></div>'"
              ) : (
                <MapBox />
              )}

              <div className="location-and-address-container">
                <div className="location">
                  <h2>Gdzie i kiedy pracujemy?</h2>
                  <p>
                    Nasze biuro znajduje się <strong>w Lubinie</strong> na ulicy
                    Karkonoskiej 1C, na pierwszym piętrze budynku usługowego.
                    Biuro czynne jest w poniedziałki, wtorki i czwartki w
                    godzinach 8:00–14:30. W środy i piątki pracujemy w innej
                    lokalizacji ze względu na obsługę sądu kancelarii prawnych i
                    urzędów, prosimy o kontakt telefoniczny. Można się z nami
                    również kontaktować telefonicznie (pn-pt) do godziny 20:00.
                  </p>
                </div>
                <h2>Dane kontaktowe</h2>
                {companiesData.map((company, index) => (
                  <CompanyDataDrawer
                    companyView={companyView}
                    handlePlusClick={handlePlusClick}
                    company={company}
                    positionNum={index}
                    key={company.companyName + index}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="map-and-address-container">
              {!isLoaded ? (
                "<div className='loading-box'><h3>Loading...</h3></div>'"
              ) : (
                <MapBox />
              )}

              <div className="location-and-address-container">
                <div className="location">
                  <h2>Gdzie i kiedy pracujemy?</h2>
                  <p>
                    Nasze biuro znajduje się <strong>w Lubinie</strong> na ulicy
                    Karkonoskiej 1C, na pierwszym piętrze budynku usługowego.
                    Biuro czynne jest w poniedziałki, wtorki i czwartki w
                    godzinach 8:00–14:30. W środy i piątki pracujemy w innej
                    lokalizacji ze względu na obsługę sądu kancelarii prawnych i
                    urzędów, prosimy o kontakt telefoniczny. Można się z nami
                    również kontaktować telefonicznie (pn-pt) do godziny 20:00.
                  </p>
                </div>
                <h2>Dane kontaktowe</h2>
                {companiesData.map((company, index) => (
                  <CompanyDataDrawer
                    companyView={companyView}
                    handlePlusClick={handlePlusClick}
                    company={company}
                    positionNum={index}
                    key={company.companyName + index}
                  />
                ))}
              </div>
            </div>
          );
        }}
      </Media>
    </>
  );
};

export default Map;

const companiesData = [
  {
    companyName: `Biuro Tłumaczeń Przysięgłych „DAG-MAR” <br />Dagmara Toporowska`,
    companyData: `ul. Karkonoska 1C, 59-300 Lubin <br />
          tel. +48 76 846 10 64, kom. +48 607 618 567 <br />
          NIP: 692-172-62-49, Regon: 390770661`,
  },
  {
    companyName: `Biuro Tłumaczeń Przysięgłych <br />DAG-MAR S.C.`,
    companyData: `ul. Karkonoska 1C, 59-300 Lubin <br />
          tel. +48 76 846 10 64, kom. +48 607 618 567 <br />
          NIP: 692-250-69-52,, Regon: 022478167`,
  },
];
