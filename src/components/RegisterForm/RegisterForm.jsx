import { Controller, useForm } from "react-hook-form";
import { useActionData, useNavigate, useNavigation, useSubmit } from "react-router-dom";
import { adultOnly } from "../../utils";
import { RegisterFormWrapper } from "./RegisterForm.styled";
import useFormPersist from "react-hook-form-persist";
import { useEffect } from "react";
import { Button, DatePicker } from "antd";
import dayjs from "dayjs";

export function RegisterForm({ event }) {
  const actionData = useActionData();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const submit = useSubmit();

  const disableForm = navigation.state === "submitting";

  const onSubmit = (data) => {
    submit(data, {
      method: "post",
      action: `/registration/${event}`,
    });
  };

  useFormPersist("eventapp", {
    watch,
    setValue,
  });

  useEffect(() => {
    if (actionData) {
      reset();
      navigate(-1);
    }
  }, [actionData, navigate, reset]);

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
            disabled={disableForm}
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
            disabled={disableForm}
          />
        </label>
        <p>{errors.email?.message}</p>
        <label>
          Date of birth
          <Controller
            control={control}
            name="birthday"
            rules={{
              required: "Required field",
              validate: adultOnly,
            }}
            render={({ field }) => {
              return (
                <DatePicker
                  ref={field.ref}
                  name={field.name}
                  id={field.name}
                  size="middle"
                  onBlur={field.onBlur}
                  onChange={(date) => {
                    field.onChange(date ? date.valueOf() : null);
                  }}
                  value={field.value ? dayjs(field.value) : null}
                />
              );
            }}
          />
        </label>
        <p>{errors.birthday?.message}</p>
        <fieldset disabled={disableForm}>
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

        <Button type="primary" htmlType="submit" loading={disableForm} size={"large"}>
          Submit
        </Button>
      </form>
    </RegisterFormWrapper>
  );
}
