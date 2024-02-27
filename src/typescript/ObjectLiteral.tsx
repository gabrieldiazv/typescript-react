interface Person {
  name: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  city: string;
  zip: number;
  lat: number;
  lng: number;
}

export const ObjectLiteral = () => {
  const person: Person = {
    name: "Gabo",
    age: 25,
    address: {
      city: "Chile",
      zip: 545454,
      lat: 14.3232,
      lng: 34.9233,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
