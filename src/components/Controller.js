import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Checkbox } from "@material-ui/core";


<Controller
         name="name"
         control={control}
         rules={{ required: true }}
         render={({ field }) => (
             <TextField
                 label="Naam"
                 variant="outlined"
                 {...field}
                 margin="normal"
                 fullWidth
             />
         )}
         margin="normal"
     />