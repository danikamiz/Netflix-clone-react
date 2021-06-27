export function seedDatabase(firebase) {
    function getUUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const piece = (Math.random() * 16) | 0;
          const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
          return elem.toString(16);
      });
    }

    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Rick y Morty',
      description: 'Rick, un científico alcohólico, secuestra a su influenciable nieto, Morty, para vivir peligrosas aventuras a través de nuestro cosmos y universos paralelos.',
      genre: 'comedia',
      maturity: '16',
      slug: 'rick-morty',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'El espectacular Spiderman',
      description: 'En esta versión animada estrenada en 2008, Peter Parker vive un montón de aventuras tras convertirse en Spiderman por la picadura de una araña radioactiva.',
      genre: 'infantil',
      maturity: '7',
      slug: 'spiderman',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Garfield',
      description: 'Garfield, el perezoso gato al que le encanta la lasaña, vive a su manera. Y esto incluye chincharle a su dueño, Jon, y atormentar a Odie, un perro no muy avispado.',
      genre: 'infantil',
      maturity: '7',
      slug: 'garfield',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Antes de que anochezca',
      description: 'Durante los años 70 y 80, el periodista y activista siciliano Giuseppe Fava llega al extremo para exponer a la mafia y sus crímenes. Basada en una historia real.',
      genre: 'crime',
      maturity: '12',
      slug: 'antes-de-que-anochezca',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'El Ángel',
      description: 'En 1971 en Buenos Aires, Carlitos, un joven con cara angelical, pasa de ladrón a asesino en serie tras conocer a Ramón, un alma gemela. Inspirada en hechos reales.',
      genre: 'crime',
      maturity: '16',
      slug: 'el-angel',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Betty en NY',
      description: 'Una joven mexicana en Nueva York lucha por hacerse un hueco en el mundo de la moda, pero se enfrenta a un desafío mayor: encontrar el amor.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'betty-en-ny',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: '100 días para enamorarnos',
      description: 'Cuando Connie se harta de que su marido la ignore y nunca haga nada en casa, acuerdan separarse 100 días para ver si así surge de nuevo la chispa entre ellos.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'cien-dias',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'La II Guerra Mundial en color',
      description: 'Para esta serie documental se han restaurado imágenes en color y alta definición de algunos de los momentos más dramáticos de la Segunda Guerra Mundial',
      genre: 'documental',
      maturity: '12',
      slug: 'la-II-guerra-mundial', 
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Dawn Wall',
      description: 'Tommy Caldwell y Kevin Jorgeson afrontan un desafío colosal: subir la formación rocosa más espectacular de Yosemite en la modalidad de escalada libre.',
      genre: 'documental',
      maturity: '7',
      slug: 'the-dawn-wall',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Rey Tigre',
      description: 'Una exploración de la cría de grandes felinos y su extraño inframundo, poblado por personajes excéntricos.',
      genre: 'documental',
      maturity: '18',
      slug: 'tiger-king',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Amanda Knox',
      description: 'Amanda Marie Knox es una mujer estadounidense que pasó casi cuatro años en una prisión italiana.',
      genre: 'documental',
      maturity: '12',
      slug: 'amanda-knox',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Citizenfour',
      description:
        'Citizenfour es una película documental de 2014 dirigida por Laura Poitras, sobre Edward Snowden y el escándalo de espionaje de la NSA.',
      genre: 'documental',
      maturity: '12',
      slug: 'citizenfour',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Engórdame',
      description:
        'El experimento social del director Morgan Spurlock en gastronomía de comida rápida muestra la subsistencia con únicamente la comida de McDonalds.',
      genre: 'documental',
      maturity: '12',
      slug: 'super-size-me',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'El hombre en el cable',
      description:
        'El cineasta James Marsh recrea magistralmente la acrobacia de 1974 del temerario Philippe Petit caminando sobre un cable a través de las Torres Gemelas.',
      genre: 'documental',
      maturity: '12',
      slug: 'man-on-wire',
    });
  
    // Comedies
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Office',
      description:
        'Un variopinto grupo de oficinistas atraviesa divertidísimas desventuras en la sucursal de Scranton, Pensilvania, de Dunder Mifflin Paper Company.',
      genre: 'comedia',
      maturity: '15',
      slug: 'the-office',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Arrested Development',
      description:
        'La familia Bluth, la cual se ha ganado un nombre en el negocio, lo pierde todo después de que el patriarca principal es condenado por fraude.',
      genre: 'comedia',
      maturity: '15',
      slug: 'arrested-development',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Frena tu entusiasmo',
      description:
        'Larry David, un famoso escritor y productor de televisión, se mete en varias desventuras con sus amigos y colegas famosos en Los Ángeles.',
      genre: 'comedia',
      maturity: '15',
      slug: 'curb-your-enthusiasm',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Padre de familia',
      description:
        'Peter Griffin y su familia compuesta por dos adolescentes, un perro inteligente, un malvado bebé y su mujer se encuentran en los escenarios más variopintos.',
      genre: 'comedia',
      maturity: '15',
      slug: 'family-guy',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'South Park',
      description:
        'Cuatro estudiantes, Stan Marsh, Kyle Broflovski, Eric Cartman y Kenny McCormick, se encuentran las más locas aventuras en South Park.',
      genre: 'comedia',
      maturity: '15',
      slug: 'south-park',
    });
  
    // Children
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Peppa Pig',
      description:
        'La cerdita Peppa, una estudiante aventurera, aprende algo nuevo cada día y disfruta con su familia y amigos.',
      genre: 'infantil',
      maturity: '0',
      slug: 'peppa-pig',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Dora La Exploradora',
      description:
        'Dora, una niña de siete años, se embarca en numerosas aventuras en la selva con su amigo Botas, y una mochila llena de herramientas.',
      genre: 'infantil',
      maturity: '0',
      slug: 'dora-the-explorer',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'La Patrulla Canina',
      description:
        'Seis valientes cachorros y Ryder, un chico de diez años con aptitudes tecnológicas trabajarán juntos en peligrosas misiones de rescate para salvaguardar Adventure Bay.',
      genre: 'infantil',
      maturity: '0',
      slug: 'paw-patrol',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Arthur',
      description:
        'El oso hormiguero con anteojos Arthur Read demuestra a los niños cómo lidiar con traumas y desafíos de la niñez como la tarea, los maestros y los matones.',
      genre: 'infantil',
      maturity: '0',
      slug: 'arthur',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Bob Esponja',
      description:
        'Una esponja de mar amarilla llamada Bob Esponja vive en la ciudad de Fondo de Bikini en las profundidades del Océano Pacífico.',
      genre: 'infantil',
      maturity: '0',
      slug: 'spongebob',
    });
  
    // Crime
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Making a Murderer',
      description:
        'Exonerado después de pasar casi dos décadas en prisión por un crimen que no cometió, Steven Avery presentó una demanda contra el condado de Manitowoc, Wisconsin, y varias personas involucradas en su arresto.',
      genre: 'crime',
      maturity: '18',
      slug: 'making-a-murderer',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Long Shot',
      description:
        'Un hombre inocente es acusado de asesinato, lo que lleva a su abogado a una persecución salvaje para confirmar su coartada utilizando imágenes sin procesar de un programa de televisión.',
      genre: 'crime',
      maturity: '18',
      slug: 'long-shot',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Confession Killer',
      description:
        'Henry Lee Lucas fue un asesino en serie convicto estadounidense cuyos delitos abarcaron desde 1960 hasta 1983. Fue declarado culpable de asesinar a once personas y condenado a muerte por el asesinato de Debra Jackson, aunque su sentencia sería conmutada por cadena perpetua en 1998.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-confession-killer',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Innocent Man',
      description:
        'Henry Lee Lucas fue un asesino en serie convicto estadounidense cuyos delitos abarcaron desde 1960 hasta 1983. Fue declarado culpable de asesinar a once personas y condenado a muerte por el asesinato de Debra Jackson, aunque su sentencia sería conmutada por cadena perpetua en 1998.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-innocent-man',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Staircase',
      description:
        'En 2001, murió la esposa del novelista Michael Peterson, quien afirmó que ella falleció después de caer por las escaleras en su casa. Sin embargo, el médico forense determinó que había sido golpeada con un arma.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-staircase',
    });
  
    // Feel-good
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'El Indomable Will Hunting',
      description:
        'Will Hunting, un genio de las matemáticas, resuelve todos los difíciles problemas matemáticos. Cuando se enfrenta a una crisis emocional, recibe la ayuda del psiquiatra Dr. Sean Maguireto, quien lo ayuda a recuperarse.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'good-will-hunting',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Forrest Gump',
      description:
        'Forrest Gump, un hombre con un coeficiente intelectual bajo, se une al ejército para el servicio donde conoce a Dan y Bubba. Sin embargo, no puede dejar de pensar en su novia de la infancia, Jenny Curran, cuya vida está arruinada.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'forrest-gump',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Juno',
      description:
        'Juno, una inadaptada social, se protege con un ingenio cáustico, pero su embarazo no planificado hace que la adolescente se involucre más en la vida de los padres adoptivos de su bebé de lo que esperaba.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'juno',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Medianoche en Paris',
      description:
        'Gil llega con su prometida y su familia a París de vacaciones, incluso mientras intenta terminar su primera novela. La ciudad lo seduce, lo que lo lleva a un tiempo pasado, lejos de su prometida.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'midnight-in-paris',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Escuela de Rock',
      description:
        'Dewey Finn, un entusiasta del rock aficionado, astutamente asume el trabajo de maestro suplente de su amigo. Al no tener calificaciones para ello, en su lugar comienza a entrenar a los estudiantes para formar una banda.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'school-of-rock',
    });
  
    /* Films
      ============================================ */
    // Drama
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'El Truco Final',
      description:
        'Dos amigos y compañeros magos se convierten en enemigos acérrimos después de una tragedia repentina. Al dedicarse a esta rivalidad, hacen sacrificios que les dan fama pero con terribles consecuencias.',
      genre: 'drama',
      maturity: '15',
      slug: 'the-prestige',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'El Club de la Lucha',
      description:
        'Descontento con su estilo de vida capitalista, un insomne ​​de cuello blanco forma un club de lucha clandestino con Tyler, un descuidado vendedor de jabón. El proyecto pronto se convierte en algo siniestro.',
      genre: 'drama',
      maturity: '15',
      slug: 'fight-club',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'El discurso del Rey',
      description:
        'El rey Jorge VI intenta superar su problema de tartamudeo con la ayuda del logopeda Lionel Logue y se hace lo suficientemente digno para guiar a su país a través de la Segunda Guerra Mundial.',
      genre: 'drama',
      maturity: '15',
      slug: 'kings-speech',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'El Renacido',
      description:
        'Hugh Glass, un legendario soldado de frontera, resulta gravemente herido en un pelea con un oso y es abandonado por su equipo de caza. Utiliza sus habilidades para sobrevivir y vengarse de su compañero, que lo traicionó.',
      genre: 'drama',
      maturity: '15',
      slug: 'the-revenant',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'La Red Social',
      description:
        'Mark Zuckerberg crea un sitio de redes sociales, Facebook, con la ayuda de su amigo Eduardo Saverin. Pero pronto, una serie de mentiras destroza su relación mientras Facebook une a las personas.',
      genre: 'drama',
      maturity: '12',
      slug: 'the-social-network',
    });
  
    // Suspense
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Shutter Island',
      description:
        'Teddy Daniels y Chuck Aule, dos alguaciles estadounidenses, son enviados a un asilo en una isla remota para investigar la desaparición de un paciente, donde Teddy descubre una verdad impactante sobre el lugar.',
      genre: 'suspense',
      maturity: '15',
      slug: 'shutter-island',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Perdida',
      description:
        'Nick Dunne descubre que todos los medios se han centrado en él cuando su esposa Amy Dunne desaparece el día de su quinto aniversario de bodas.',
      genre: 'suspense',
      maturity: '15',
      slug: 'gone-girl',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Prisioneros',
      description:
        'Cuando la policía se toma demasiado tiempo para encontrar a la hija de Keller Dover y a su amiga, él decide realizar una búsqueda por su cuenta. Su desesperación lo llevará cerca de encontrar la verdad y también de poner en peligro su propia vida.',
      genre: 'suspense',
      maturity: '15',
      slug: 'prisoners',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Seven',
      description:
        'Un asesino en serie comienza a asesinar a personas de acuerdo con los siete pecados capitales. Dos detectives, uno nuevo en la ciudad y el otro a punto de jubilarse, tienen la tarea de detener al criminal.',
      genre: 'suspense',
      maturity: '15',
      slug: 'seven',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Zodiac',
      description:
        'Robert Graysmith, caricaturista de profesión, se encuentra pensando obsesivamente en el asesino del Zodíaco. Utiliza sus habilidades para resolver acertijos para acercarse a revelar la identidad del asesino.',
      genre: 'suspense',
      maturity: '15',
      slug: 'zodiac',
    });
  
    // Children
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Hotel Transylvania',
      description:
        'Drácula, dueño de un resort de lujo para monstruos, intenta evitar que su hija se enamore de Jonathan, un humano.',
      genre: 'infantil',
      maturity: '0',
      slug: 'hotel-transylvania',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Mi Villano Favorito',
      description:
        'Gru, un genio criminal, adopta a tres huérfanas como peones para llevar a cabo el mayor atraco de la historia. Su vida da un giro inesperado cuando las niñas lo ven como su padre potencial.',
      genre: 'infantil',
      maturity: '0',
      slug: 'despicable-me',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Frozen',
      description:
        'Anna emprende un viaje con un hombre de hielo, Kristoff, y su reno, Sven, para encontrar a su hermana, Elsa, que tiene el poder de convertir cualquier objeto o persona en hielo.',
      genre: 'infantil',
      maturity: '0',
      slug: 'frozen',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'El viaje de Chihiro',
      description:
        'En esta película animada del destacado director japonés Hayao Miyazaki, Chihiro (Rumi Hiiragi), de 10 años, y sus padres (Takashi Naitô, Yasuko Sawaguchi) se topan con un parque de atracciones aparentemente abandonado.',
      genre: 'infantil',
      maturity: '0',
      slug: 'spirited-away',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Up',
      description:
        'Carl, un anciano viudo, emprende una aventura en su casa voladora en busca de Paradise Falls, el destino soñado de su esposa.',
      genre: 'infantil',
      maturity: '0',
      slug: 'up',
    });
  
    // Thriller
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Joker',
      description:
        'Siempre solo entre la multitud, el fracasado comediante Arthur Fleck busca conectar mientras camina por las calles de Gotham City.',
      genre: 'thriller',
      maturity: '15',
      slug: 'joker',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Un lugar tranquilo',
      description:
        'La familia Abbott ahora debe enfrentar los terrores del mundo exterior mientras luchan por sobrevivir en silencio. Obligados a aventurarse en lo desconocido, se dan cuenta de que las criaturas que cazan por el sonido no son las únicas amenazas que acechan más allá del camino de arena.',
      genre: 'thriller',
      maturity: '15',
      slug: 'a-quiet-place',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Cisne Negro',
      description:
        'Nina, una bailarina, tiene la oportunidad de interpretar al cisne blanco, la princesa Odette. Pero se encuentra cayendo en la locura cuando Thomas, el director artístico, decide que Lily podría encajar mejor en el papel.',
      genre: 'thriller',
      maturity: '15',
      slug: 'black-swan',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Nightcrawler',
      description:
        'Louis Bloom, un pequeño ladrón, se da cuenta de que puede ganar dinero capturando fotografías de actividades delictivas y comienza a recurrir a tácticas extremas para conseguirlas.',
      genre: 'thriller',
      maturity: '15',
      slug: 'nightcrawler',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'El silencio de los corderos',
      description:
        'Clarice Starling, una agente del FBI, busca la ayuda de Hannibal Lecter, un asesino en serie psicópata y ex psiquiatra, para detener a otro asesino en serie que ha estado reclamando víctimas femeninas.',
      genre: 'thriller',
      maturity: '15',
      slug: 'the-silence-of-the-lambs',
    });
  
    // Romance
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Ha Nacido Una Estrella',
      description:
        'Después de enamorarse de la artista en apuros Ally, Jackson, un músico, la convence para que siga sus sueños, mientras él lucha contra el alcoholismo y sus demonios personales.',
      genre: 'romance',
      maturity: '15',
      slug: 'a-star-is-born',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Blue Valentine',
      description:
        'Dean y Cynthia están casados ​​y tienen una hija y su matrimonio está a punto de desmoronarse. Ambos provienen de familias disfuncionales y luchan por darle sentido a su relación.',
      genre: 'romance',
      maturity: '15',
      slug: 'blue-valentine',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'La La Land',
      description:
        'Sebastian (Ryan Gosling) y Mia (Emma Stone) se sienten atraídos por su deseo común de hacer lo que aman. Pero a medida que aumenta el éxito, se enfrentan a decisiones duras ...',
      genre: 'romance',
      maturity: '15',
      slug: 'la-la-land',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'El diario de Noah',
      description:
        'Duke lee la historia de Allie y Noah, dos amantes que fueron separados por el destino, a la Sra. Hamilton, una anciana que sufre de Alzheimer, todos los días en su cuaderno.',
      genre: 'romance',
      maturity: '15',
      slug: 'the-notebook',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Titanic',
      description:
        'Rose, de diecisiete años, proviene de una familia aristocrática y está lista para casarse. Cuando sube al Titanic, conoce a Jack Dawson, un artista, y se enamora de él.',
      genre: 'romance',
      maturity: '15',
      slug: 'titanic',
    });
  }