import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const {
    value: enteredName, 
    isValid: enteredNameIsValid,
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangeHandler, 
    inputBlurHandler: nameBlurHandler, 
    reset: resetName
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailIsInvalid,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail
  } = useInput(value => value.trim() !== '');

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    console.log(enteredName, enteredEmail);
    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameInputHasError ? "invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputHasError && (
        <p className="error-text">Please Enter a Valid Name</p>
      )}
      <div className={`form-control ${enteredEmailIsInvalid ? "invalid" : ""}`}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
      </div>
      {enteredEmailIsInvalid && (
        <p className="error-text">Please Enter a Valid E-Mail</p>
      )}
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
