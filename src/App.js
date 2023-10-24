import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGEnerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()+/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGEnerator();
  }, [length, numAllowed, charAllowed, passwordGEnerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  bg-gray-700 text-black">
        <h1 className="text-white text-center">Password genrator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            className="outline-none w-full py-1 my-1 rounded-lg px-3"
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyPasswordToClipBoard}
            className="bg-white mx-2 text-black outline-none py-1 my-1 rounded-lg px-3"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 text-white">
          <div className="flex items-center gap-x-1  mb-3">
            <input
              className="cursor-pointer my-1"
              id="length"
              type="range"
              min={6}
              max={60}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 mb-3">
            <input
              className="cursor-pointer my-1 "
              id="numAllowed"
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numAllowed">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1  mb-3">
            <input
              className="cursor-pointer my-1"
              id="numAllowed"
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numAllowed">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
