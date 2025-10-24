import "../style/policy.scss";

const Policy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="policy-header-container">
        {/* <h2 className="policy-header">Polityka prywatności</h2> */}
        <h3 className="policy-header h3">Polityka prywatności</h3>
      </div>
      <div className="policy-rules-container">
        {privacyPolicy.map((e, index) => (
          <>
            <h5 className="header-position-policy">
              {index + 1}. {e.header}
            </h5>
            <p>{e.text}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default Policy;

const privacyPolicy = [
  {
    header: `Informacje ogólne`,
    text: `Niniejsza Polityka Prywatności określa zasady przetwarzania 
    i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z 
    serwisu internetowego dag-mar.pl, prowadzonego przez firmę Biuro Tłumaczeń Przysięgłych 
    DAG-MAR Dagmara Toporowska, z siedzibą w Lubinie, NIP: 692-172-62-49, REGON: 390770661 
    oraz Biuro Tłumaczeń Przysięgłych DAG-MAR S.C. z siedzibą w Lubinie, NIP: 692-250-69-52,
     REGON: 022478167. Serwis realizuje funkcje pozyskiwania informacji o Użytkownikach 
     oraz ich zachowaniu w następujący sposób: poprzez dobrowolnie wprowadzone w 
     formularzach dane, poprzez zapisywanie w urządzeniach końcowych plików cookie 
     (tzw. „ciasteczka”).`,
  },
  {
    header: `Administrator danych osobowych`,
    text: `Administratorem danych osobowych w rozumieniu przepisów o ochronie danych
osobowych (RODO) jest: Biuro Tłumaczeń Przysięgłych DAG-MAR Dagmara Toporowska
oraz Biuro Tłumaczeń Przysięgłych DAG-MAR S.C. z siedzibą w Lubinie przy ul.
Karkonoskiej 1C, e-mail: admin@dag-mar.pl tel.: 607-618-567. W sprawach związanych z
przetwarzaniem danych osobowych można skontaktować się z Administratorem pod
powyższym adresem lub adresem e-mail.`,
  },
  {
    header: `Zakres i cel przetwarzania danych`,
    text: `Administrator przetwarza dane osobowe Użytkowników w następujących celach:
Realizacja zamówień i usług tłumaczeniowych - przetwarzanie danych kontaktowych
(imię, nazwisko, adres e-mail, numer telefonu, treść zapytania, załączone pliki) w celu
wyceny lub wykonania usługi tłumaczenia. Kontakt z klientem – udzielenie odpowiedzi
na przesłane zapytanie, przedstawienie oferty lub informacji o postępie prac. Rozliczenia
i obowiązki księgowe - wystawianie faktur, rachunków i dokumentów księgowych.
Obrona i dochodzenie roszczeń - przetwarzanie danych w celu ochrony praw
Administratora. Marketing i informacja handlowa (opcjonalnie) - przesyłanie informacji
o usługach wyłącznie po uzyskaniu wyraźnej zgody Użytkownika. Dane osobowe nie są
sprzedawane, udostępniane ani przekazywane osobom trzecim, z wyjątkiem
przypadków wymaganych przepisami prawa lub niezbędnych do realizacji usługi (np.
biuro rachunkowe, dostawcy hostingu, operatorzy pocztowi, tłumacze).`,
  },
  {
    header: `Podstawa prawna przetwarzania`,
    text: `Dane przetwarzane są zgodnie z: art. 6 ust. 1 lit. b RODO - w celu wykonania umowy lub
działań przed jej zawarciem, art. 6 ust. 1 lit. c RODO - w celu wypełnienia obowiązków
prawnych ciążących na Administratorze, art. 6 ust. 1 lit. f RODO - w celu realizacji
prawnie uzasadnionego interesu Administratora (np. obsługa zapytań, dochodzenie
roszczeń), oraz art. 6 ust. 1 lit. a RODO - w przypadku wyrażenia zgody na marketing lub
przesyłanie informacji handlowych.`,
  },
  {
    header: `Okres przechowywania danych`,
    text: `Dane osobowe są przechowywane przez okres niezbędny do realizacji celu, w jakim
zostały zebrane, tj.: dane związane z realizacją usług - do czasu zakończenia współpracy
oraz upływu okresu przedawnienia roszczeń, dane księgowe - przez okres wymagany
przepisami prawa (zazwyczaj 5 lat), dane przetwarzane na podstawie zgody - do
momentu jej cofnięcia.`,
  },
  {
    header: `Prawa Użytkownika`,
    text: `Każdemu Użytkownikowi przysługuje prawo do: dostępu do swoich danych,
sprostowania, usunięcia lub ograniczenia przetwarzania, wniesienia sprzeciwu wobec
przetwarzania, przenoszenia danych, cofnięcia zgody w dowolnym momencie (jeśli
przetwarzanie odbywa się na podstawie zgody), wniesienia skargi do Prezesa Urzędu
Ochrony Danych Osobowych (UODO).`,
  },
  {
    header: `Pliki cookies`,
    text: `Serwis dag-mar.pl korzysta z plików cookies, które służą do: zapewnienia prawidłowego
działania strony, analizy ruchu na stronie (np. Google Analytics), zapamiętywania
preferencji Użytkownika. Użytkownik może w każdej chwili zmienić ustawienia
dotyczące cookies w przeglądarce internetowej. Korzystanie z serwisu bez zmiany tych
ustawień oznacza zgodę na zapisywanie plików cookies na urządzeniu Użytkownika.`,
  },
  {
    header: `Bezpieczeństwo danych`,
    text: `Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające
ochronę przetwarzanych danych osobowych przed nieuprawnionym dostępem, utratą,
zniszczeniem lub ujawnieniem. Dane są przechowywane na bezpiecznych serwerach, a
połączenia szyfrowane za pomocą protokołu SSL (Secure Socket Layer).`,
  },
  {
    header: `Przekazywanie danych poza Europejski Obszar Gospodarczy`,
    text: `Administrator co do zasady nie przekazuje danych poza EOG. W przypadku korzystania z
usług podmiotów, które mogą przechowywać dane poza EOG (np. Google, Microsoft),
odbywa się to wyłącznie na podstawie odpowiednich mechanizmów prawnych
zapewniających ich ochronę (np. standardowe klauzule umowne zatwierdzone przez
Komisję Europejską).`,
  },
  {
    header: `Zmiany w Polityce Prywatności`,
    text: `Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności,
wynikających z aktualizacji przepisów prawa lub zmian w funkcjonowaniu serwisu. O
wszelkich zmianach Użytkownicy zostaną poinformowani poprzez publikację nowej
wersji Polityki na stronie internetowej.`,
  },
  {
    header: `Kontakt`,
    text: `W sprawach dotyczących ochrony danych osobowych prosimy o kontakt pod adresem:
admin@dag-mar.pl, tel. 607-618-567.`,
  },
];
