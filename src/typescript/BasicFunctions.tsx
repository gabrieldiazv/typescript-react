export const BasicFunctions = () => {
  const addTwoNumber = (a: number, b: number) => a + b;

  return (
    <>
      <div>BasicFunctions</div>
      <span>EL resultado es {addTwoNumber(10, 1)}</span>
    </>
  );
};
