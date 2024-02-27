export const BasicTypes = () => {
  const name: string = "Gabo";
  const age: number = 25;
  const isActive: boolean = true;
  const powers: string[] = ["Velocidad", "Volar", "Respirar en el agua"];
  powers.push("comer");
  return (
    <>
      <h3>Tipos Basicos</h3>
      {name} {age} {isActive ? "Activo" : "Inactivo"}
      <br />
      {powers.join(", ")}
    </>
  );
};
