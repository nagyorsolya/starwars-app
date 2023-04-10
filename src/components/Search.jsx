import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

function Search({ setSearchValue, buttonConfiguration }) {
  const { register, handleSubmit } = useForm();

  function onSubmit(form) {
    setSearchValue(form.search);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <TextField
        {...register("search")}
        id="search"
        label="Search characters"
        variant="standard"
        color="primary"
        InputLabelProps={{
          style: {
            color: "black",
          },
        }}
      />
      <Button variant="outlined" type="submit" sx={{ ...buttonConfiguration }}>
        Search characters
      </Button>
    </form>
  );
}

export default Search;
