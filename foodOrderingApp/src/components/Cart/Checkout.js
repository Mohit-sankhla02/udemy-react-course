import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isSixCharacters = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    address: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const addInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const address = addInputRef.current.value;
    const postalCode = postalInputRef.current.value;
    const city = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(name);
    const enteredAddIsValid = !isEmpty(address);
    const enteredPostalCodeIsValid = isSixCharacters(postalCode);
    const enteredCityIsValid = !isEmpty(city);

    console.log(
      enteredNameIsValid,
      enteredAddIsValid,
      enteredPostalCodeIsValid,
      enteredCityIsValid
    );

    setFormInputValidity({
      name: enteredNameIsValid,
      address: enteredAddIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAddIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: name,
      address: address,
      city: city,
      postalCode: postalCode,
    });

    setFormInputValidity({
      name: true,
      address: true,
      postalCode: true,
      city: true,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !formInputValidity.name ? classes.invalid : ""
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputValidity.name && <p>Please Enter a Valid name</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidity.address ? classes.invalid : ""
        }`}
      >
        <label htmlFor="street">Street</label>
        <input ref={addInputRef} type="text" id="street" />
        {!formInputValidity.address && <p>Please Enter a valid Address</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidity.postalCode ? classes.invalid : ""
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValidity.postalCode && (
          <p>Please Enter a Valid Postal Code</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidity.city ? classes.invalid : ""
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.name && <p>Please Enter a Valid City Name</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} onClick={confirmHandler}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
