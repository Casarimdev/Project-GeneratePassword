import { useState } from "react";
import styles from "./styles.module.css";

export default function Content() {
  // eslint-disable-next-line no-unused-vars
  const [textSpan, setSpan] = useState("");
  const [textCopy, setCopy] = useState("Copy Password");

  // Support Functions
  function generatePassword() {
    setCopy("Copy Password");

    let inputLetters = document.getElementById("letters");
    let inputNumbers = document.getElementById("numbers");
    let inputSymbols = document.getElementById("symbols");

    let inputLenght = document.getElementById("lenght");

    console.log(inputLetters.checked);

    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const numbers = "0123456789";

    const simbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let charset = "";

    if (
      !inputLetters.checked &&
      !inputNumbers.checked &&
      !inputSymbols.checked
    ) {
      alert("Active some option");
      return;
    }

    if (inputLetters.checked) charset += letters;

    if (inputNumbers.checked) charset += numbers;

    if (inputSymbols.checked) charset += simbols;

    let password = "";

    let length = inputLenght.value;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];

      setSpan(password);
    }

    // alert(password);
  }

  function copyValue() {
    let span = document.getElementById("span-password");

    if (span.textContent == "") {
      alert("Click Generate Button. To generate one password first!");
    } else {
      setCopy("Copied!");
      navigator.clipboard.writeText(span.textContent);
    }
  }

  return (
    <>
      {/* form to manipulate password */}
      <form className={styles.formPassword}>
        <label htmlFor="letters">
          <input
            type="checkbox"
            id="letters"
            name="letters"
            value="letters"
            className={styles.textInput}
          />
          Letters
        </label>
        <br />
        <label htmlFor="numbers">
          <input
            type="checkbox"
            id="numbers"
            name="numbers"
            value="numbers"
            className={styles.textInput}
          />
          Numbers
        </label>
        <br />
        <label htmlFor="symbols">
          <input
            type="checkbox"
            id="symbols"
            name="symbols"
            value="symbols"
            className={styles.textInput}
          />
          Simbols
        </label>
        <br />
      </form>
      <span className={styles.SpanText}>How many characters?</span>
      <input
        type="number"
        className={styles.InputStyle}
        min="5"
        max="100"
        required
        id="lenght"
      />

      {/* Buttons to generate Password */}
      <section className={styles.contentPrimary}>
        <div className={styles.buttons}>
          <button className={styles.buttonStyle} onClick={generatePassword}>
            Generate!
          </button>

          <button className={styles.buttonStyle} onClick={copyValue}>
            {textCopy}
          </button>
        </div>
        <span id="span-password" className={styles.spanPassword}>
          {textSpan}
        </span>
      </section>
    </>
  );
}
