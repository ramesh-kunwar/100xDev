import { useContext, useState } from "react";
import { CountContext } from "./context";
import {
  RecoilRoot,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}
function Count() {
  console.log("re-render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  // const [message, setMessage] = useState("");
  // if (count % 2 === 0) {
  //   setMessage("Even");
  // } else {
  //   setMessage("Odd");
  // }

  return (
    <div>
      <b>{count}</b>
      {/* <p>{message}</p> */}
    </div>
  );
}

function Buttons() {
  console.log("button re-rendered");
  // const setCount = useSetRecoilState(countAtom);
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
