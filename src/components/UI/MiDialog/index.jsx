//Import react
import React from "react";

//Material-ui
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

export default function MiDialog(props) {
  const {
    title = "",
    actions = [],
    message = "",
    open = false,
    onClose = () => {},
    autoClose = false,
    loading = false,
    closeOnLoading = false,
  } = props;

  function _onClose() {
    if (autoClose === false) return;
    if (loading === true && closeOnLoading === false) return;
    onClose();
  }

  return (
    <Dialog open={open} onClose={_onClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {message && <Typography variant="body1">{message}</Typography>}
      </DialogContent>
      {actions.length !== 0 && (
        <DialogActions sx={{ alignSelf: "center" }}>
          {actions.map((action, actionIndex) => {
            if (action.autoFocus === undefined) action.autoFocus = false;
            if (action.text === undefined) action.text = "";
            if (action.autoClose === undefined) action.autoClose = true;
            if (action.onClick === undefined) action.onClick = () => {};
            return (
              <Button
                key={actionIndex}
                autoFocus={action.autoFocus}
                variant={action.variant}
                color={action.color}
                onClick={() => {
                  if (action.autoClose === true) onClose();
                  action.onClick();
                }}
              >
                {action.text}
              </Button>
            );
          })}
        </DialogActions>
      )}
    </Dialog>
  );
}
