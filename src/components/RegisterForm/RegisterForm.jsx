import { useForm } from "react-hook-form";
import { useNavigate, useSubmit } from "react-router-dom";
import { adultOnly } from "../../utils";
import { RegisterFormWrapper } from "./RegisterForm.styled";
import useFormPersist from "react-hook-form-persist";

export function RegisterForm({ event }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: { birthday: "2000-01-01" } });
  const submit = useSubmit();

  const onSubmit = (data) => {
    submit(data, {
      method: "post",
      action: `/registration/${event}`,
    });
    reset();
    navigate(-1);
  };

  useFormPersist("eventapp", {
    watch,
    setValue,
    exclude: ["birthday"],
  });

  return (
    <RegisterFormWrapper>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Full name
          <input
            type="text"
            {...register("fullname", {
              required: "Required field",
              minLength: { value: 2, message: "min length is 2" },
            })}
            id="fullname"
            placeholder="Full name"
          />
        </label>
        <p>{errors.fullname?.message}</p>
        <label>
          Email
          <input
            type="email"
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value:
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                message: "Invalid email address",
              },
            })}
            id="email"
            placeholder="E-mail"
            autoComplete="off"
          />
        </label>
        <p>{errors.email?.message}</p>
        <label>
          Date of birth
          <input
            type="date"
            {...register("birthday", {
              valueAsDate: true,
              required: "Required field",
              validate: adultOnly,
            })}
            id="birthday"
          />
        </label>
        <p>{errors.birthday?.message}</p>
        <fieldset>
          <legend>Select a maintenance drone:</legend>
          <label>
            <input
              type="radio"
              id="media"
              {...register("subscription", { required: "Select your option" })}
              value="media"
            />
            Social Media
          </label>
          <label>
            <input
              type="radio"
              id="friend"
              {...register("subscription", { required: "Select your option" })}
              value="friends"
            />
            Friends
          </label>
          <label>
            <input
              type="radio"
              id="myself"
              {...register("subscription", { required: "Select your option" })}
              value="myself"
            />
            Found myself
          </label>
        </fieldset>
        <p>{errors.subscription?.message}</p>
        <button type="submit">Submit</button>
      </form>
    </RegisterFormWrapper>
  );
}
