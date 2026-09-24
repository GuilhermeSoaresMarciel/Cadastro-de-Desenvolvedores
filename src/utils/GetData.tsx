type DevData = {
  Nome: string;
  Sobrenome: string;
  Email: string;
  Area: string;
  Senioridade: string;
  Tecnologias: string[];
  Experiencia: string;
};

export default function GetData(): DevData | null {
  const data = sessionStorage.getItem("DataSettings");

  if (!data) {
    return null;
  }

  return JSON.parse(data);
}
