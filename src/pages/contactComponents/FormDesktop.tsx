import React from "react";
import type { ContactFormData, FileState } from "./Form";
import {
  Controller,
  type Control,
  type UseFormHandleSubmit,
} from "react-hook-form";
import { NavLink } from "react-router-dom";

type FormDesktopProps = {
  control: Control<ContactFormData>;
  fileState: FileState;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: ReturnType<UseFormHandleSubmit<ContactFormData>>;
  isPending: boolean;
};

const FormDesktop: React.FC<FormDesktopProps> = ({
  control,
  fileState,
  handleFileUpload,
  handleSubmit,
  isPending,
}) => {
  return (
    <div className="form-section-container">
      <div className="contact-with-us-text-container">
        <div className="contact-with-us-text">
          <h2>Skontaktuj się z nami</h2>
        </div>
        <span className="contact-with-us-bottomtext">
          Masz pytania lub wątpliwości? Chcesz dowiedzieć się więcej o usługach
          <strong> Biura Tłumaczeń Przysięgłych DAG-MAR</strong> lub
          potrzebujesz wysłać materiały do <strong>tłumaczenia</strong>?
        </span>
        <span className="contact-with-us-bottomtext">
          Skontaktuj się z nami za pomocą formularza obok.
        </span>
      </div>
      <div className="form-container">
        <form className="contact-form">
          <div className="name-input-container">
            <Controller
              name="name"
              control={control}
              // rules={{ required: true }}
              render={({ field }) => (
                <input
                  placeholder="Imię*"
                  className="name-input contact-input"
                  {...field}
                />
              )}
            />
            <Controller
              name="surname"
              control={control}
              // rules={{ required: true }}
              render={({ field }) => (
                <input
                  placeholder="Nazwisko*"
                  className="surname-input contact-input"
                  {...field}
                />
              )}
            />
          </div>
          <div className="email-and-theme-container">
            <Controller
              name="email"
              control={control}
              // rules={{ required: true }}
              render={({ field }) => (
                <input
                  placeholder="Adres e-mail*"
                  className="email-input contact-input"
                  {...field}
                />
              )}
            />
            <Controller
              name="subject"
              control={control}
              // rules={{ required: true }}
              render={({ field }) => (
                <input
                  placeholder="Temat wiadomości*"
                  className="theme-input contact-input"
                  {...field}
                />
              )}
            />
          </div>
          <Controller
            name="message"
            control={control}
            // rules={{ required: true }}
            render={({ field }) => (
              <textarea
                placeholder="Treść wiadomości*"
                className="contact-msg contact-input"
                {...field}
              />
            )}
          />

          <div className="policy-and-sender-container">
            <div className="policy-container">
              <span className="policy">
                Klikając Prześlij formularz zgadzasz się na przetwarzanie danych
                osobowych, zawartych w{" "}
                <NavLink to="/policy">Polityce prywatności</NavLink>.
              </span>

              <span className="pole">*Pole obowiązkowe</span>
            </div>
            <div className="sender-container">
              <div className="upload-file-container">
                <div className="file-upload-button-container">
                  <label className="file-upload-button">
                    <input
                      type="file"
                      className="add-file-input"
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
                        ? "file-name file-name-active"
                        : "file-name"
                    }
                  >
                    Dodano plik &#10004;
                  </label>
                </div>
                <div className="file-condition-container">
                  <span>
                    Dodaj załącznik w formacie: txt, doc,
                    <br /> docx, pdf, jpg, jpeg, png, xls lub xlsx.
                  </span>
                  <span>Wielkość pliku do 10 MB</span>
                </div>
              </div>
              <div className="send-btn-container">
                <button
                  className="send-btn loading-button"
                  onClick={handleSubmit}
                  disabled={isPending}
                >
                  Prześlij formularz
                  {isPending && (
                    <div className="loading-overlay">
                      <div className="spinner"></div>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormDesktop;
