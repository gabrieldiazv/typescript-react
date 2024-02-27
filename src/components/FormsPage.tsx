import { useForm } from "react-hook-form";

type FormsInputs = {
  email: string;
  password: string;
};

export const FormsPage = () => {
  const {
    register,
    handleSubmit,
    formState,
  } = useForm<FormsInputs>({
    defaultValues: {
      email: "gabo.diaz@avalora.com",
      password: "123456",
    },
  });

  const onSubmit = (data: FormsInputs) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Formularios</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            type="text"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          <button type="submit">Enviar</button>
        </div>
      </form>
      <pre>
        {JSON.stringify(formState, null, 2)}
      </pre>
    </>
  );
};
