import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

function Search({ setSearchValue, buttonConfiguration }) {
  const { register, handleSubmit } = useForm();

  function onSubmit(form) {
    setSearchValue(form.search);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:max-w-[18.75rem]">
      <TextField
        {...register("search")}
        id="search"
        label="Search characters"
        variant="standard"
        color="primary"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: {
            color: "black",
          },
        }}
      />
    </form>
  );
}

export default Search;
