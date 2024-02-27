import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
  const { count, increaseBy } = useCounter({ initialValue: 10 });
  return (
    <>
      <h3>
        Contador con hook: <small>{count}</small>
      </h3>
      <div>
        <button className="btn btn-primary" onClick={() => increaseBy(+1)}>
          +1
        </button>
        &nbsp;
        <button className="btn btn-primary" onClick={() => increaseBy(-1)}>
          -1
        </button>
      </div>
    </>
  );
};
