import { useRef, useEffect } from "react";
const defaultSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
function useKonamiCode(callbackFn, options) {
  const targetSequence = ((options == null ? void 0 : options.sequence) ? options.sequence : defaultSequence).map((key) => key.toLowerCase());
  if ((options == null ? void 0 : options.requireReturn) || false)
    targetSequence.push("enter");
  const sequenceRef = useRef([]);
  const reset = () => {
    sequenceRef.current = [];
  };
  const append = (key) => {
    sequenceRef.current.push(key);
  };
  const test = () => {
    return sequenceRef.current.join(",") === targetSequence.join(",");
  };
  useEffect(() => {
    const keyboardHandler = ({ key }) => {
      key = key.toLowerCase();
      if (targetSequence[sequenceRef.current.length] === key) {
        append(key);
        if (test())
          callbackFn();
      } else {
        reset();
      }
    };
    document.body.addEventListener("keyup", keyboardHandler);
    return () => {
      document.body.removeEventListener("keyup", keyboardHandler);
    };
  });
}
export { useKonamiCode };
