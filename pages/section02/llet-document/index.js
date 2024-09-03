import { useState } from "react";

export default function counterLetDocumentPage() {
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    setCount(count + 1);
  }
  function onClickCountDown() {
    setCount(count - 1);
  }

  return (
    <div>
      <div id="qqq">{count}</div>
      <button onClick={onClickCountUp}>Count</button>
      <button onClick={onClickCountDown}>countDown</button>
    </div>
  );
}
