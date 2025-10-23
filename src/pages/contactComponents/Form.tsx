import React, { useState } from "react";
import "../../style/form.scss";
import Media from "react-media";
import FormDesktop from "./FormDesktop";
import "../../style/loading.scss";

export type FileState = {
  isFileLoaded: boolean;
  file: File | null;
  fileName: string;
  inputFileValue: string;
};

export type FormVal = {
  name: string;
  surname: string;
  email: string;
  subject: string;
  message: string;
  formValid: 0 | 1;
  formSent: boolean;
};

const Form: React.FC = () => {
  const [isLoading /* setIsLoading */] = useState(false);
  const [fileState, setFileState] = useState<FileState>({
    isFileLoaded: false,
    file: null,
    fileName: "",
    inputFileValue: "",
  });
  const [formVal, setFormVal] = useState<FormVal>({
    name: "",
    surname: "",
    email: "",
    subject: "",
    message: "",
    formValid: 0,
    formSent: false,
  });

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormVal({
      ...formVal,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    _e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log("wysłane");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    if (e.target.files[0].size > 10 * 1024 * 1024) {
      alert(
        "Error: Zaimportowany plik jest zbyt duży. Dopuszczalne są pliki do max. 10 MB"
      );
      return;
    }
    setFileState({
      isFileLoaded: true,
      file: e.target.files[0],
      fileName: e.target.files[0].name,
      inputFileValue: e.target.value,
    });
  };

  return (
    <>
      <Media query="(min-width: 992px)">
        {(matches) => {
          return matches ? (
            <FormDesktop
              handleInput={handleInput}
              handleSubmit={handleSubmit}
              formVal={formVal}
              setFormVal={setFormVal}
              fileState={fileState}
              setFileState={setFileState}
              handleFileUpload={handleFileUpload}
              isLoading={isLoading}
            />
          ) : (
            <div className="m-form-section-container">
              <div className="m-contact-with-us-text-container">
                <div className="m-contact-with-us-text">
                  <h2>
                    Skontaktuj się <br /> z nami
                  </h2>
                </div>
                <span className="m-contact-with-us-bottomtext">
                  Masz pytania lub wątpliwości? Chcesz dowiedzieć się więcej o
                  usługach <strong>Biura Tłumaczeń Przysięgłych DAG-MAR</strong>
                  lub potrzebujesz wysłać materiały do{" "}
                  <strong>tłumaczenia</strong>?
                </span>
                <span className="m-contact-with-us-bottomtext">
                  Skontaktuj się z nami za pomocą formularza poniżej.
                </span>
              </div>
              <div className="m-form-container">
                <form className="m-contact-form">
                  <div className="m-input-container">
                    <input
                      name="name"
                      type="name"
                      placeholder="Imię*"
                      className="-m-name-input m-contact-input"
                      onChange={handleInput}
                      value={formVal.name}
                    />
                    <input
                      name="surname"
                      type="surname"
                      placeholder="Nazwisko*"
                      className="m-surname-input m-contact-input"
                      onChange={handleInput}
                      value={formVal.surname}
                    />

                    <input
                      name="email"
                      type="email"
                      placeholder="Adres e-mail*"
                      className="m-email-input m-contact-input"
                      onChange={handleInput}
                      value={formVal.email}
                    />
                    <input
                      name="subject"
                      type="subject"
                      placeholder="Temat wiadomości*"
                      className="m-theme-input m-contact-input"
                      onChange={handleInput}
                      value={formVal.subject}
                    />
                    <textarea
                      name="message"
                      placeholder="Treść wiadomości*"
                      className="m-contact-msg m-contact-input"
                      onChange={handleInput}
                      value={formVal.message}
                    />
                  </div>

                  <div className="m-policy-and-sender-container">
                    <span className="m-pole">*Pole obowiązkowe</span>
                    <div className="m-upload-file-container">
                      <div className="m-file-upload-button-container">
                        <label className="m-file-upload-button">
                          <input
                            type="file"
                            className="m-add-file-input"
                            id="file-upload"
                            onChange={handleFileUpload}
                            value={fileState.inputFileValue}
                          />
                          Dodaj załącznik
                        </label>
                        <label
                          id="file-name"
                          className={
                            fileState.isFileLoaded === true
                              ? "m-file-name m-file-name-active"
                              : "m-file-name"
                          }
                        >
                          Dodano plik &#10004;
                        </label>
                      </div>
                      <div className="m-file-condition-container">
                        <span>
                          Dodaj załącznik w formacie: txt, doc, docx, pdf, jpg,
                          jpeg, png, xls lub xlsx.
                        </span>
                        <span>Wielkość pliku do 10 MB</span>
                      </div>
                    </div>
                    <div className="m-policy-container">
                      <span className="m-policy">
                        Klikając Prześlij formularz zgadzasz się na
                        przetwarzanie danych osobowych, zawartych w{" "}
                        <a>Polityce prywatności</a>.
                      </span>
                    </div>
                    <div className="m-sender-container">
                      <div className="m-send-btn-container">
                        <button
                          className="m-send-btn loading-button"
                          onClick={handleSubmit}
                          disabled={isLoading}
                        >
                          Prześlij formularz
                          {isLoading && (
                            <div className="loading-overlay">
                              <div className="spinner"></div>
                            </div>
                          )}
                        </button>
                        <label
                          id="form-error"
                          className={
                            formVal.formValid
                              ? "m-form-error m-form-error-active"
                              : "m-form-error m-form-sent"
                          }
                        >
                          {formVal.formValid
                            ? "Uzupełnij brakujące pola"
                            : null}
                          {formVal.formSent ? "Formularz przesłany" : null}
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Media>
    </>
  );
};

export default Form;
