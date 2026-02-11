function classificarNivel(xp) {
  if (xp <= 1000) return "Ferro";
  if (xp <= 2000) return "Bronze";
  if (xp <= 5000) return "Prata";
  if (xp <= 7000) return "Ouro";
  if (xp <= 8000) return "Platina";
  if (xp <= 9000) return "Ascendente";
  if (xp <= 10000) return "Imortal";
  return "Radiante";
}

function imprimirResultado(nome, xp) {
  const nivel = classificarNivel(xp);
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

const [, , nomeArg, xpArg] = process.argv;
const xpNum = xpArg !== undefined ? Number(xpArg) : undefined;

if (nomeArg && Number.isFinite(xpNum)) {
  imprimirResultado(nomeArg, xpNum);
} else {
  const casos = [
    { nome: "Artemis", xp: 800 },
    { nome: "Baldur", xp: 1000 },
    { nome: "Cassandra", xp: 1500 },
    { nome: "Darius", xp: 2000 },
    { nome: "Evelyn", xp: 2001 },
    { nome: "Fiora", xp: 5000 },
    { nome: "Garen", xp: 5001 },
    { nome: "Hector", xp: 7000 },
    { nome: "Irelia", xp: 7001 },
    { nome: "Jaina", xp: 8000 },
    { nome: "Kayn", xp: 8001 },
    { nome: "Leona", xp: 9000 },
    { nome: "Morgana", xp: 9001 },
    { nome: "Nautilus", xp: 10000 },
    { nome: "Ornn", xp: 10001 },
  ];

  for (const { nome, xp } of casos) {
    imprimirResultado(nome, xp);
  }
}
