import { useEffect, useState } from "react";
import { baseUrl } from "../../baseUrl";
import "./admin.scss";
import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  Snackbar,
  TextField,
  type SnackbarCloseReason,
} from "@mui/material";
import LoadingOverlay from "../Loading/LoadingOverlay";

const NewsAdminEdit = () => {
  const [news, setNews] = useState<{
    txt1: string;
    txt2: string;
    newsOn: boolean;
  } | null>(null);

  const [loading, setLoading] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch(`${baseUrl}admin/news`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch(() => {
        setLoading(false);
        console.error;
      });
  }, []);

  const handleLogout = () => {
    setLoading(true);
    localStorage.removeItem("token"); // usuwa token
    window.location.reload(); // odświeża stronę, żeby komponent zniknął
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      await fetch(`${baseUrl}admin/news`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(news),
      });
      setOpenSuccess(true);
    } catch (err) {
      console.error(err);
      alert("Błąd zapisu!");
    } finally {
      setLoading(false); // koniec ładowania
    }
  };
  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };

  return (
    <>
      {loading && <LoadingOverlay />}
      {news ? (
        <div className="edit-news-container">
          <form className="edit-news-container-inner" onSubmit={onSubmit}>
            <h2>Edit notification</h2>
            <TextField
              className="edit-news-input"
              id="outlined-basic"
              label="1 Line"
              variant="outlined"
              onChange={(e) => setNews({ ...news, txt1: e.target.value })}
              value={news.txt1}
            />
            <TextField
              className="edit-news-input"
              id="outlined-basic"
              label="2 Line"
              variant="outlined"
              onChange={(e) => setNews({ ...news, txt2: e.target.value })}
              value={news.txt2}
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) =>
                    setNews({ ...news, newsOn: e.target.checked })
                  }
                  defaultChecked={news.newsOn}
                />
              }
              label="Show notification"
            />

            <Button variant="contained" type="submit">
              Save
            </Button>
          </form>
          <Button variant="outlined" type="submit" onClick={handleLogout}>
            Logout
          </Button>
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
              Zmieniono powiadomienie
            </Alert>
          </Snackbar>
        </div>
      ) : (
        <div
          style={{
            marginTop: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h3>Coś poszło nie tak...</h3>
          <Button variant="outlined" type="submit" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      )}
    </>
  );
};

export default NewsAdminEdit;
