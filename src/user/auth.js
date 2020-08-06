import React, { useState, useContext } from "react";

import Card from "../shared/components/UIElements/Card";
import Input from "../shared/components/UIElements/Input";
import Button from "../shared/components/UIElements/Button";
import ErrorModal from "../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../shared/components/UIElements/LoadingSpinner";
import { useForm } from "../shared/hooks/form-hook";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../shared/context/auth-contex";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../shared/utils/validators";
import "./Auth.css";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const auth = useContext(AuthContext);
  // LOGIN or SIGNUP state mode
  const [isLoginMode, setIsLoginMode] = useState(true);
  // is Loading is managed by hook
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const history=useHistory()

  // Initialize state with form-hook
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    false
  );

  //   To switch this LOGIN-mode component to the SIGNUP-mode component
  const switchModeHandler = () => {
    console.log(`isLoginMode: ${isLoginMode}`);

    //   If we are on SIGNUP, add the name field and data to STATE
    if (!isLoginMode) {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = async (event) => {
    console.log(formState.inputs);

    event.preventDefault();

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users/login",
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          { "Content-Type": "application/json" }
        );

        auth.login(responseData.userId, responseData.token);
      } catch (err) {
        console.log(`some Error: ${err}`);
      }
    } else {
      // HTTP Request: fetch()
      console.log(`${process.env.REACT_APP_BACKEND_URL}/users/signup`);

      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users/signup",
          "POST",
          JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          { "Content-Type": "application/json" }
        );
        // Change the state of Context
        auth.login(responseData.userId, responseData.token);
        history.push("/dashboard")
      } catch (err) {
        console.log(`Signup error: ${err}`);
      }
    }
  };

  const errorHandler = () => {
    clearError();
  };
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>Iniciar sesión</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Nombre"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name"
              onInput={inputHandler}
            />
          )}
          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address"
            onInput={inputHandler}
          ></Input>
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password. Min Length (6)"
            onInput={inputHandler}
          ></Input>
          <div className="mt-5">
            <Button type="submit" disabled={!formState.isValid}>
              {!isLoginMode ? "SIGNUP" : "LOGIN"}
            </Button>
          </div>
        </form>
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
        </Button>
      </Card>
    </React.Fragment>
  );
};

export default Auth;
