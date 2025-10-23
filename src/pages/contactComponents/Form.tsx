import React, { useState } from "react";
import "../../style/form.scss";
import Media from "react-media";
import FormDesktop from "./FormDesktop";
import "../../style/loading.scss";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../../baseUrl";
import { Alert, Snackbar, type SnackbarCloseReason } from "@mui/material";

export type FileState = {
  isFileLoaded: boolean;
  file: File | null;
  fileName: string;
  inputFileValue: string;
};

export type ContactFormData = {
  name: string;
  surname: string;
  email: string;
  subject: string;
  message: string;
};

const Form: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const [fileState, setFileState] = useState<FileState>({
    isFileLoaded: false,
    file: null,
    fileName: "",
    inputFileValue: "",
  });

  const sendMessage = async (data: ContactFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);

    if (fileState.file) {
      formData.append("file", fileState.file);
    }
    const response = await fetch(`${baseUrl}send-form`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Failed to send message");
    return response.json();
  };
  const [openError, setOpenError] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [errorText, setErrorText] = useState("");
  const { mutate, isPending } = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      // tu coś sobie robie
      setOpenSuccess(true);
      setFileState({
        isFileLoaded: false,
        file: null,
        fileName: "",
        inputFileValue: "",
      });
      reset();
    },
    onError: (err: any) => {
      // tu też coś sobie zrobie
      setOpenError(true);
      setErrorText("Coś poszło nie tak, spróbuj ponownie później.");
      console.log(err);
    },
  });

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

  const onSubmit = (data: ContactFormData) => {
    const hasEmptyField = Object.values(data).some(
      (value) => typeof value === "string" && value.trim() === ""
    );

    if (hasEmptyField) {
      console.log("Brakuje wymaganych pól!");
      setErrorText("Wszystkie pola formularza są wymagane");
      setOpenError(true);
      return;
    }
    return mutate(data);
  };

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
    setOpenSuccess(false);
  };

  return (
    <>
      <Media query="(min-width: 992px)">
        {(matches) => {
          return matches ? (
            <FormDesktop
              control={control}
              fileState={fileState}
              handleFileUpload={handleFileUpload}
              handleSubmit={handleSubmit(onSubmit)}
              isPending={isPending}
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
                  usługach{" "}
                  <strong>Biura Tłumaczeń Przysięgłych DAG-MAR </strong>
                  lub potrzebujesz wysłać materiały do{" "}
                  <strong>tłumaczenia</strong>?
                </span>
                <span className="m-contact-with-us-bottomtext">
                  Skontaktuj się z nami za pomocą formularza poniżej.
                </span>
              </div>
              <div className="m-form-container">
                <div className="m-contact-form">
                  <div className="m-input-container">
                    <Controller
                      name="name"
                      control={control}
                      // rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          placeholder="Imię*"
                          className="-m-name-input m-contact-input"
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
                          className="-m-name-input m-contact-input"
                          {...field}
                        />
                      )}
                    />
                    <Controller
                      name="email"
                      control={control}
                      // rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          placeholder="Adres e-mail*"
                          className="-m-name-input m-contact-input"
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
                          className="-m-name-input m-contact-input"
                          {...field}
                        />
                      )}
                    />

                    <Controller
                      name="message"
                      control={control}
                      // rules={{ required: true }}
                      render={({ field }) => (
                        <textarea
                          placeholder="Treść wiadomości*"
                          className="m-contact-msg m-contact-input"
                          {...field}
                        />
                      )}
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
                          onClick={handleSubmit(onSubmit)}
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
                </div>
              </div>
            </div>
          );
        }}
      </Media>
      <Snackbar
        open={openError}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        style={{ marginTop: "80px" }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {errorText}
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSuccess}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        style={{ marginTop: "80px" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Wiadomość została wysłana
        </Alert>
      </Snackbar>
    </>
  );
};

export default Form;
