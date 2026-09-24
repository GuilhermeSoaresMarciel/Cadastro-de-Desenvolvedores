import GetData from "./../utils/GetData.tsx";

const standardSettings = {
  bgV1: "bg-sky-950",
  bgV2: "bg-sky-900",
  bgV3: "bg-sky-800",
  hover: "hover:bg-sky-700",
  textColor: "text-white",
  fontType: "font-sans",
  p: "p-2.5",
  gap: "gap-2.5",
};

export default function Display() {
  const inf = GetData();

  if (!inf) {
    return (
      <main
        className={`min-h-screen flex flex-col ${standardSettings.bgV1} ${standardSettings.textColor} ${standardSettings.fontType}`}
      >
        <header
          className={`${standardSettings.bgV2} ${standardSettings.p} text-center`}
        >
          <h1 className="text-4xl font-bold">Cadastro de DEVs</h1>
        </header>

        <section className="flex-1 flex justify-center items-center">
          <p className="text-xl font-bold">Nenhuma informação encontrada.</p>
        </section>
      </main>
    );
  }

  return (
    <main
      className={`min-h-screen flex flex-col ${standardSettings.bgV1} ${standardSettings.textColor} ${standardSettings.fontType}`}
    >
      <header
        className={`${standardSettings.bgV2} ${standardSettings.p} text-center`}
      >
        <h1 className="text-4xl font-bold">Cadastro de DEVs</h1>
      </header>

      <section
        className={`flex-1 flex flex-col justify-center items-center ${standardSettings.gap} ${standardSettings.p}`}
      >
        <h2 className="text-2xl font-bold">Informações cadastradas</h2>

        <div
          className={`w-full md:w-[60%] ${standardSettings.bgV2} rounded border ${standardSettings.p} flex flex-col ${standardSettings.gap}`}
        >
          <p>
            <strong>Nome:</strong> {inf.Nome}
          </p>

          <p>
            <strong>Sobrenome:</strong> {inf.Sobrenome}
          </p>

          <p>
            <strong>Email:</strong> {inf.Email}
          </p>

          <p>
            <strong>Área:</strong> {inf.Area}
          </p>

          <p>
            <strong>Senioridade:</strong> {inf.Senioridade}
          </p>

          <div>
            <strong>Tecnologias:</strong>

            {inf.Tecnologias.length > 0 ? (
              <ul className="list-disc list-inside">
                {inf.Tecnologias.map((technology: string) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            ) : (
              <p>Nenhuma tecnologia selecionada.</p>
            )}
          </div>

          <div>
            <strong>Experiência:</strong>

            <p className="mt-1 whitespace-pre-wrap">
              {inf.Experiencia || "Nenhuma experiência informada."}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
