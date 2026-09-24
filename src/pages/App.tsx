import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "./../components/Input";

import SaveData from "./../utils/SaveData.tsx";

const standardSettings = {
  bgV1: "bg-sky-950",
  bgV2: "bg-sky-900",
  bgV3: "bg-sky-800",
  hover: "hover:bg-sky-700",
  textColor: "text-white",
  fontType: "font-sans",
  p: "p-2.5",
  gap: "gap-2.5",
  inputStyle: "bg-sky-900 rounded border outline-none text-center italic p-1",
  selectStyle: "bg-sky-900 rounded border outline-none text-center italic p-1",
  focus: "focus:bg-sky-700",
};

const areas = [
  { value: "frontend", label: "Front-end" },
  { value: "backend", label: "Back-end" },
  { value: "fullstack", label: "FullStack" },
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "C#",
  "Python",
  "Java",
  "TypeScript",
];

export default function App() {
  const seNavigate = useNavigate();

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [senioridade, setSenioridade] = useState("junior");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    [],
  );
  const [experiencia, setExperiencia] = useState("");

  const handleTechnologyChange = (technology: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(technology)
        ? prev.filter((item) => item !== technology)
        : [...prev, technology],
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inf = {
      Nome: nome,
      Sobrenome: sobrenome,
      Email: email,
      Area: area,
      Senioridade: senioridade,
      Tecnologias: selectedTechnologies,
      Experiencia: experiencia,
    };

    SaveData(inf);
    seNavigate("/Display");
  };

  return (
    <main
      className={`min-h-screen flex flex-col ${standardSettings.bgV1} ${standardSettings.textColor} ${standardSettings.fontType}`}
    >
      <header
        className={`${standardSettings.bgV2} ${standardSettings.p} text-center`}
      >
        <h1 className="text-4xl font-bold">Cadastro de DEVs</h1>
      </header>

      <form
        onSubmit={handleSubmit}
        className={`flex-1 flex flex-col justify-center items-center ${standardSettings.gap} ${standardSettings.p}`}
      >
        <p className="text-lg font-bold">Complete suas informações</p>

        <section
          className={`w-full md:w-[60%] grid grid-cols-1 md:grid-cols-2 ${standardSettings.gap} place-items-center`}
        >
          <div>
            <label className="font-bold">Nome: </label>
            <Input
              type="text"
              placeholder="Guilherme"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              className={`w-full ${standardSettings.inputStyle} ${standardSettings.focus}`}
            />
          </div>

          <div>
            <label className="font-bold">Sobrenome: </label>
            <Input
              type="text"
              placeholder="Soares"
              value={sobrenome}
              onChange={(event) => setSobrenome(event.target.value)}
              className={`w-full ${standardSettings.inputStyle} ${standardSettings.focus}`}
            />
          </div>

          <div>
            <label className="font-bold">Email: </label>
            <Input
              type="email"
              placeholder="Example@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={`w-full ${standardSettings.inputStyle} ${standardSettings.focus}`}
            />
          </div>
        </section>

        <section
          className={`w-full md:w-[60%] flex flex-col ${standardSettings.gap}`}
        >
          <h2 className="text-lg font-bold">
            De qual lado da programação você desenvolve?
          </h2>

          <div className="flex flex-col">
            {areas.map((item) => (
              <label key={item.value}>
                <input
                  type="radio"
                  name="area"
                  value={item.value}
                  checked={area === item.value}
                  onChange={(event) => setArea(event.target.value)}
                />{" "}
                {item.label}
              </label>
            ))}
          </div>
        </section>

        <section
          className={`w-full md:w-[60%] flex flex-col ${standardSettings.gap}`}
        >
          <h2 className="text-lg font-bold">Senioridade</h2>

          <select
            className={`${standardSettings.selectStyle} ${standardSettings.focus}`}
            name="senioridade"
            value={senioridade}
            onChange={(event) => setSenioridade(event.target.value)}
          >
            <option value="junior">Júnior</option>
            <option value="pleno">Pleno</option>
            <option value="senior">Sênior</option>
          </select>
        </section>

        <section
          className={`w-full md:w-[60%] flex flex-col ${standardSettings.gap}`}
        >
          <h2 className="text-lg font-bold">
            Selecione as tecnologias que utiliza:
          </h2>

          <div className="w-full grid grid-cols-2 md:grid-cols-3">
            {technologies.map((technology) => (
              <label key={technology}>
                <input
                  type="checkbox"
                  value={technology}
                  checked={selectedTechnologies.includes(technology)}
                  onChange={() => handleTechnologyChange(technology)}
                />{" "}
                {technology}
              </label>
            ))}
          </div>
        </section>

        <section
          className={`w-full md:w-[60%] flex flex-col ${standardSettings.gap}`}
        >
          <h2 className="text-lg font-bold">
            Conte um pouco mais sobre sua experiência:
          </h2>

          <textarea
            value={experiencia}
            onChange={(event) => setExperiencia(event.target.value)}
            className={`min-h-50 border rounded outline-none resize-none ${standardSettings.p} ${standardSettings.focus}`}
          />
        </section>

        <footer className={`${standardSettings.p} text-center w-full`}>
          <button
            type="submit"
            className={`${standardSettings.bgV3} ${standardSettings.p} ${standardSettings.hover} text-2xl font-bold rounded border`}
          >
            Concluído
          </button>
        </footer>
      </form>
    </main>
  );
}
