export const artPieces = [
  {
    id: 1,
    title: "Near Glarus, Switzerland",
    artist: "John Warwick Smith",
    year: 1950,
    technique: "Aquarela sobre papel",
    dimensions: "85 x 73 cm",
    location: "Museu de Arte Contemporânea de São Paulo (MAC-SP)",
    description:
      "Uma visão arrebatadora dos Alpes suíços, capturada pela sensibilidade de John Warwick Smith. As montanhas, colossos de rocha e cinza, erguem-se majestosamente, suas formas angulares rasgando o azul etéreo do céu, pontuado por nuvens dispersas que parecem acariciar os picos. Abaixo, a terra se veste em uma tapeçaria de tons outonais – verdes profundos e marrons avermelhados – com o toque sombrio de árvores que se adensam à direita. Um caminho, quase um convite silencioso, serpenteia pelo primeiro plano, chamando o observador a imergir na grandiosidade e na paz selvagem deste cenário alpino, onde a natureza dita as regras e a beleza reside na sua escala monumental.",
    image:
      `${process.env.PUBLIC_URL}/assets/images/arte-01.png`,
  tags: ["Paisagem", "Montanhas", "Glarus", "Suíça", "John Warwick Smith", "Alpes", "Aquarela", "Natureza", "Paz", "Solidão"],
  },
  {
    id: 2,
    title: "Flower Still Life with a Watch",
    artist: "Willem van Aelst",
    year: 1963,
    technique: "Óleo sobre tela",
    dimensions: "150 x 205 cm",
    location: "Mauritshui",
    description:
      "Uma sinfonia floral em óleo, onde a efemeridade da beleza é magistralmente capturada por Willem van Aelst. Em um arranjo exuberante, as flores desabrocham em uma paleta vibrante de vermelhos ardentes, laranjas ensolarados, brancos imaculados, azuis celestiais e rosas delicados, cada pétala e folha retratada com uma precisão quase tátil. O vaso suntuoso, em tons de prata, serve de base a esta celebração botânica. Em primeiro plano, sobre uma bancada marmorizada que reflete a luz, um relógio de bolso antigo, atado por uma fita azul sedosa, sussurra sobre o tempo que passa, enquanto duas borboletas, em sua delicadeza alada, dançam em torno da composição, um lembrete da fragilidade e da beleza transitória da vida, tudo isso emergindo de um fundo de veludo noturno que realça cada tonalidade.",
    image:
      `${process.env.PUBLIC_URL}/assets/images/arte-02.png`,
    tags: ["Natureza-morta", "Flores", "Willem van Aelst", "Relógio", "Barroco", "Século XVII", "Borboletas"," Composição floral", "Efemeridade"],
  },
  {
    id: 3,
    title: "The River Severn at Shrewsbury",
    artist: "Paul Sandby",
    year: 1970,
    technique: "Aquarela sobre papel",
    dimensions: "60 x 73 cm",
    location: "Coleção Particular",
    description:
      "Uma ode à serenidade campestre, onde o Rio Severn serpenteia com graça por Shrewsbury, Shropshire. À direita, a natureza se eleva em majestosas árvores de folhagem densa, guardiãs silenciosas de um rochedo em primeiro plano que convida ao repouso. O olhar é guiado pelas águas calmas que refletem um céu vasto, pontuado por nuvens algodonosas, até o horizonte onde a silhueta de uma cidade emerge, tecida por pontes e edifícios que se fundem à paisagem. Pequenas embarcações, com suas figuras humanas em repouso ou em suave movimento, pontuam a superfície aquática, conferindo vida e narrativa a este cenário de tranquilidade bucólica.",
    image:
      `${process.env.PUBLIC_URL}/assets/images/arte-03.png`,
    tags: ["Paisagem", "Rio Severn","Paul Sandby", "Inglaterra", "Século XVIII", "Aquarela", "Barcos", "Natureza", "Panorâmica", "Serenidade"],
  },
];

export const audioContent = [
 {
    id: 4,
    title: "Near Glarus, Switzerland",
    artist: "John Warwick Smith",
    duration: "01:18",
    artId: null,
    src: `${process.env.PUBLIC_URL}/assets/audio/descricao-arte-01.mp3`
  },
  {
    id: 5,
    title: "Flower Still Life with a Watch",
    artist: "Willem van Aelst",
    duration: "01:18",
    artId: null,
    src: `${process.env.PUBLIC_URL}/assets/audio/descricao-arte-02.mp3`
  },
  {
    id: 6,
    title: "The River Severn at Shrewsbury",
    artist: "Paul Sandby",
    duration: "01:25",
    artId: null,
    src: `${process.env.PUBLIC_URL}/assets/audio/descricao-arte-03.mp3`
  },
];

export const videoContent = [
 {
    id: 7,
    title: "Impressionism How It Changed the Rules of Art",
    artist: "Curious Muse",
    duration: "08:51",
    artId: null,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/arte-01.png`,
    videoUrl: `${process.env.PUBLIC_URL}/assets/video/Impressionism-How-It-Changed-the-Art.mp4`  
  },
  {
     id: 8,
    title: "History of the Still Life",
    artist: "Susan Euler",
    duration: "10:30",
    artId: null,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/arte-02.png`,
    videoUrl: `${process.env.PUBLIC_URL}/assets/video/History-of-the-Still-Life.mp4`
    
  },{
    id: 9,
    title: "Watercolor A short (but fascinating!) history",
    artist: "Dena Ackerman",
    duration: "10:19",
    artId: null,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/arte-03.png`,
    videoUrl: `${process.env.PUBLIC_URL}/assets/video/Watercolor-A-Short-history.mp4`
  }
];