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
                    Nasze biuro znajduje się w Lubinie na ulicy Karkonoskiej 1C,
                    na pierwszym piętrze budynku usługowego (100m od Galerii
                    Cuprum Arena).
                  </p>
                  <span>
                    <b>Biuro czynne jest w godzinach:</b>
                    <br />
                    Poniedziałki: 8:00 - 14:30
                    <br />
                    Wtorki: 8:00 - 14:30
                    <br />
                    Środy: 8:00 - 18:00 (w innej lokalizacji)*
                    <br />
                    Czwartki: 8:00 - 14:30
                    <br />
                    Piątki: 8:00 - 18:00 (w innej lokalizacji)*
                  </span>
                  <span className="gray-span">
                    * ze względu na obsługę sądu, kancelarii prawnych i urzędów
                    prosimy o wcześniejszy kontakt telefoniczny.
                  </span>
                  <span>
                    Od poniedziałku do piątku można się z nami kontaktować do
                    godziny 20:00 pod numerami 607 618 567 oraz 76 846 10 64.
                  </span>
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
                    Nasze biuro znajduje się w Lubinie na ulicy Karkonoskiej 1C,
                    na pierwszym piętrze budynku usługowego (100m od Galerii
                    Cuprum Arena).
                  </p>
                  <span>
                    <b>Biuro czynne jest w godzinach:</b>
                    <br />
                    Poniedziałki: 8:00 - 14:30
                    <br />
                    Wtorki: 8:00 - 14:30
                    <br />
                    Środy: 8:00 - 18:00 (w innej lokalizacji)*
                    <br />
                    Czwartki: 8:00 - 14:30
                    <br />
                    Piątki: 8:00 - 18:00 (w innej lokalizacji)*
                  </span>
                  <span className="gray-span">
                    * ze względu na obsługę sądu, kancelarii prawnych i urzędów
                    prosimy o wcześniejszy kontakt telefoniczny.
                  </span>
                  <span>
                    Od poniedziałku do piątku można się z nami kontaktować do
                    godziny 20:00 pod numerami 607 618 567 oraz 76 846 10 64.
                  </span>
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
    companyName: `Biuro Tłumaczeń Przysięgłych <br />DAG-MAR Dagmara Toporowska`,
    companyData: `ul. Karkonoska 1C, 59-300 Lubin <br />
          tel. +48 76 846 10 64 <b>|</b> +48 607 618 567 <br />
          NIP: 692-172-62-49, Regon: 390770661`,
  },
  {
    companyName: `Biuro Tłumaczeń Przysięgłych <br />DAG-MAR S.C.`,
    companyData: `ul. Karkonoska 1C, 59-300 Lubin <br />
          tel. +48 76 846 10 64 <b>|</b> +48 607 618 567 <br />
          NIP: 692-250-69-52, Regon: 022478167`,
  },
];
