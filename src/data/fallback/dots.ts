import type { DotRecord } from "@/lib/types";

export const seedDots: DotRecord[] = [
  // ─── DOT 1: Pre-modern ───────────────────────────────────────
  {
    id: "dot-pre-modern",
    slug: { ro: "omul-invizibil", en: "the-invisible-person" },
    title: {
      ro: "Omul înainte de evidență",
      en: "The person before records",
    },
    periodLabel: { ro: "Înainte de sec. XIX", en: "Before the 19th century" },
    sortYear: 1800,
    endYear: 1837,
    shortLine: {
      ro: "Puterea nu știa cine ești. Aceasta nu era o grație — era o limită a puterii.",
      en: "Power did not know who you were. That was not a grace — it was a limit of power.",
    },
    summary: {
      ro: "Înainte de modernitate, omul era vizibil doar local și parțial: gospodărie, brațe de muncă, contribuabili. Niciun sistem central nu încerca să obțină o imagine completă. Puterea opera prin comunitate, nu prin individ.",
      en: "Before modernity, a person was visible only locally and partially: household, labor, taxpayer. No central system sought a complete image. Power operated through community, not through the individual.",
    },
    thesis: {
      ro: "Libertatea vine din invizibilitate. Când sistemul nu te poate vedea complet, nu te poate controla complet.",
      en: "Freedom comes from invisibility. When the system cannot see you completely, it cannot control you completely.",
    },
    antithesis: {
      ro: "Invizibilitatea înseamnă și inexistență juridică. Fără înregistrare nu există protecție, proprietate sau drept.",
      en: "Invisibility also means legal nonexistence. Without registration there is no protection, property, or right.",
    },
    synthesis: {
      ro: "Înainte de modernitate nu exista un sistem care să vrea să vadă complet. Aceasta era o limită a puterii, nu o garanție a libertății.",
      en: "Before modernity there was no system that wanted to see completely. This was a limitation of power, not a guarantee of freedom.",
    },
    factualLayer: [
      {
        ro: "Nu exista stare civilă centralizată — nașterea, moartea și căsătoria erau înregistrate de biserici, local.",
        en: "There was no centralized civil status — births, deaths and marriages were recorded by churches, locally.",
      },
      {
        ro: "Fiscalitatea opera prin intermediari: sate, bresle, boieri. Statul central nu număra oameni direct.",
        en: "Taxation operated through intermediaries: villages, guilds, boyars. The central state did not count people directly.",
      },
      {
        ro: "Proprietatea pământului era întemeiată pe posesie și tradiție, nu pe titlu juridic documentat.",
        en: "Land ownership was based on possession and tradition, not on a documented legal title.",
      },
    ],
    legalLayer: [
      {
        ro: "Registrele parohiale sunt singura formă de evidență a persoanei. Nu există cod de identificare, nu există registru național.",
        en: "Parish registers are the only form of personal record. There is no identification code, no national register.",
      },
      {
        ro: "Dreptul cutumiar și hrisoavele domneşti reglementează relațiile de proprietate fără un cadastru unificat.",
        en: "Customary law and princely charters regulate property relations without a unified cadastre.",
      },
    ],
    systemLayer: [
      {
        ro: "Sistemul central nu poate executa direct — depinde de intermediari locali.",
        en: "The central system cannot execute directly — it depends on local intermediaries.",
      },
      {
        ro: "Imposibil de corelat datele despre o persoană între instituții: nu există identificator comun.",
        en: "Impossible to correlate data about a person between institutions: there is no common identifier.",
      },
    ],
    systemView: {
      title: { ro: "Limitare administrativă", en: "Administrative limitation" },
      body: {
        ro: "Absența evidenței centrale înseamnă că statul nu poate administra eficient, nu poate colecta impozite uniform, nu poate mobiliza resurse naționale.",
        en: "The absence of central records means the state cannot administer efficiently, collect taxes uniformly, or mobilize national resources.",
      },
    },
    rebelView: {
      title: { ro: "Opacitate protectoare", en: "Protective opacity" },
      body: {
        ro: "Invizibilitatea față de stat este o formă de libertate reală. Când sistemul nu te vede, nu te poate urmări, taxa sau executa.",
        en: "Invisibility from the state is a form of real freedom. When the system cannot see you, it cannot track, tax, or execute against you.",
      },
    },
    whyItMatters: {
      ro: "Acesta este punctul zero. Toate mutațiile ulterioare sunt pași dinspre această invizibilitate spre o lizibilitate tot mai completă.",
      en: "This is point zero. All subsequent mutations are steps away from this invisibility toward increasingly complete legibility.",
    },
    consequences: [
      {
        ro: "Nicio consecință instituțională directă — dar stabilește baza de referință față de care orice mutație ulterioară se măsoară.",
        en: "No direct institutional consequence — but establishes the baseline against which all subsequent mutations are measured.",
      },
    ],
    themeSlugs: ["identitate", "vizibilitate", "administratie"],
    legalRefIds: [],
    sourceIds: [],
    regimeId: "pre-modern",
    tags: ["invizibilitate", "pre-modern", "evidenta"],
    relatedIds: ["dot-recensamant-1838"],
    published: true,
  },

  // ─── DOT 2: Recensământul 1838 ───────────────────────────────
  {
    id: "dot-recensamant-1838",
    slug: { ro: "recensamantul-1838", en: "census-1838" },
    title: {
      ro: "Primul recensământ sistematic",
      en: "The first systematic census",
    },
    periodLabel: { ro: "1838–1860", en: "1838–1860" },
    sortYear: 1838,
    endYear: 1860,
    shortLine: {
      ro: "De acâm, a trăi într-un teritoriu înseamnă a fi numărat.",
      en: "From now on, to live in a territory means to be counted.",
    },
    summary: {
      ro: "Între 1838 și 1860, Principatele Române introduc primele operațiuni sistematice de numărare și clasificare a populației. Recensământul nu e doar statistică — e primul moment în care statul declară că vrea să știe cine locuiește pe teritoriul său.",
      en: "Between 1838 and 1860, the Romanian Principalities introduce the first systematic operations to count and classify the population. The census is not just statistics — it is the first moment when the state declares it wants to know who lives on its territory.",
    },
    thesis: {
      ro: "Recensământul reduce oameni la categorii: contribuabili, nesupuși, nobili, iobagi. Ești inventariat, nu văzut.",
      en: "The census reduces people to categories: taxpayers, non-subjects, nobles, serfs. You are inventoried, not seen.",
    },
    antithesis: {
      ro: "Recensământul e baza oricărei planificări publice: spitale, școli, drumuri presupun să știi câți oameni ai și unde.",
      en: "The census is the basis of any public planning: hospitals, schools, roads require knowing how many people you have and where.",
    },
    synthesis: {
      ro: "Recensământul inaugurează o relație nouă dintre stat și persoană: vizibilitatea statistică precede orice formă de drept sau obligație. Nu am trecut dintr-o singură zi de la om liber la număr.",
      en: "The census inaugurates a new relationship between state and person: statistical visibility precedes any form of right or obligation. We did not pass in a single day from free person to number.",
    },
    factualLayer: [
      {
        ro: "Regulamentul Organic (1831-1832) creează cadrul administrativ centralizat și obligă la colectarea sistematică de date.",
        en: "The Organic Regulation (1831-1832) creates the centralized administrative framework and mandates systematic data collection.",
      },
      {
        ro: "Recensământul din 1838 în Valahia — primul care încearcă să numere întreaga populație, nu doar contribuabilii directi.",
        en: "The 1838 census in Wallachia — the first attempting to count the entire population, not just direct taxpayers.",
      },
    ],
    legalLayer: [
      {
        ro: "Regulamentele Organice introduc obligativitatea evidenței administrative centralizate.",
        en: "The Organic Regulations introduce mandatory centralized administrative records.",
      },
      {
        ro: "Primele registre fiscale centralizate — datele despre persoană încep să existe în afara comunității locale.",
        en: "First centralized fiscal registers — data about a person begins to exist outside the local community.",
      },
    ],
    systemLayer: [
      {
        ro: "Statul poate acum cuantifica resursele umane la nivel național.",
        en: "The state can now quantify human resources at the national level.",
      },
      {
        ro: "Devine posibilă comparația, clasificarea și ierarhizarea populației.",
        en: "Comparison, classification and hierarchization of population becomes possible.",
      },
      {
        ro: "Baza pentru fiscalitate uniformă și recrutare militară sistematică.",
        en: "Foundation for uniform taxation and systematic military recruitment.",
      },
    ],
    systemView: {
      title: { ro: "Modernizare necesară", en: "Necessary modernization" },
      body: {
        ro: "Fără date despre populație nu poți construi un stat modern. Știința statistică este instrumentul prin care un principat slab devine o națiune administrativ capabilă.",
        en: "Without population data you cannot build a modern state. Statistical science is the instrument through which a weak principality becomes an administratively capable nation.",
      },
    },
    rebelView: {
      title: { ro: "Primul inventar", en: "The first inventory" },
      body: {
        ro: "Suntem numărați, clasificați, împinși în categori. Nu contezi ca om liber — contezi ca resursă fiscală sau militară. Statul nu te cunoaște, te numără.",
        en: "We are counted, classified, pushed into categories. You don't count as a free person — you count as a fiscal or military resource. The state doesn't know you, it counts you.",
      },
    },
    whyItMatters: {
      ro: "Este primul pas al lizibilității. Statul nu mai operează prin intermediari locali — vrea să vadă direct.",
      en: "It is the first step of legibility. The state no longer operates through local intermediaries — it wants to see directly.",
    },
    consequences: [
      {
        ro: "Creează precedentul că statul are dreptul și obligația de a cunoaște compoziția populației sale.",
        en: "Creates the precedent that the state has the right and obligation to know the composition of its population.",
      },
      {
        ro: "Datele devin instrument de planificare fiscală — fiscalitatea poate deveni mai uniformă și mai eficientă.",
        en: "Data becomes a fiscal planning instrument — taxation can become more uniform and efficient.",
      },
    ],
    themeSlugs: ["identitate", "fiscal", "administratie", "vizibilitate"],
    legalRefIds: ["regulamentul-organic-1831", "decretul-censura-1838"],
    sourceIds: [],
    regimeId: "principate",
    tags: ["recensamant", "statistica", "populatie"],
    relatedIds: ["dot-pre-modern", "dot-evidenta-1949"],
    published: true,
  },

  // ─── DOT 3: Evidența centrală 1949 ──────────────────────────
  {
    id: "dot-evidenta-1949",
    slug: { ro: "evidenta-persoanelor-1949", en: "population-records-1949" },
    title: {
      ro: "Evidența persoanelor devine continuă și centrală",
      en: "Population records become continuous and central",
    },
    periodLabel: { ro: "1949", en: "1949" },
    sortYear: 1949,
    shortLine: {
      ro: "Doșarul tău nu se mai închide. Rămâne deschis toată viața.",
      en: "Your file no longer closes. It stays open for life.",
    },
    summary: {
      ro: "Regimul comunist instaurează evidența continuă a populației. Nu mai e vorba de recensământ periodic — fiecare mișcare, schimbare de domiciliu, stare civilă sau profesie intră în fișa permanentă de evidență. Statul socialist vrea să știe unde ești în orice moment.",
      en: "The communist regime establishes continuous population surveillance. It is no longer about periodic census — every movement, change of address, civil status or profession enters the permanent record file. The socialist state wants to know where you are at any moment.",
    },
    thesis: {
      ro: "Dosarul tău nu te descrie — te reduce. Ești suma a ceea ce statul a decis să noteze despre tine.",
      en: "Your file does not describe you — it reduces you. You are the sum of what the state decided to note about you.",
    },
    antithesis: {
      ro: "Evidența continuă permite prestații sociale: pensii, alocații, asistență medicală presupun să știi cine ești și istoricul ta.",
      en: "Continuous records enable social benefits: pensions, allowances, healthcare require knowing who you are and your history.",
    },
    synthesis: {
      ro: "Evidența continuă transformă persoana din subiect al unor momente de vizibilitate (recensământ) în obiect al unei supravegheri permanente. Diferența nu e de grad — e de natură.",
      en: "Continuous records transform the person from a subject of visibility moments (census) into an object of permanent surveillance. The difference is not of degree — it is of nature.",
    },
    factualLayer: [
      {
        ro: "1949 — Ministerul de Interne instaurează sistemul de evidență continuă a populației.",
        en: "1949 — The Ministry of Internal Affairs establishes the continuous population surveillance system.",
      },
      {
        ro: "Fiecare cetățean primește un dosar de evidență. Schimbările de domiciliu, starea civilă, locul de muncă sunt înregistrate și actualizate permanent.",
        en: "Each citizen receives a record file. Changes of address, civil status, workplace are permanently recorded and updated.",
      },
      {
        ro: "Buletin de identitate obligatoriu — primul document de identitate modern cu fotografie din România.",
        en: "Mandatory identity card — the first modern photo identity document in Romania.",
      },
    ],
    legalLayer: [
      {
        ro: "Legea evidenței militare și civile creează obligativitatea înregistrării permanente.",
        en: "The law on military and civil records creates the obligation of permanent registration.",
      },
      {
        ro: "Regulamentul de evidență a populației definește categoriile de date care trebuie colectate și actualizate.",
        en: "The population records regulation defines the categories of data to be collected and updated.",
      },
    ],
    systemLayer: [
      {
        ro: "Prima dată sistemul poate urmări o persoană în timp, nu doar o poate număra la un moment dat.",
        en: "For the first time the system can track a person over time, not just count them at a given moment.",
      },
      {
        ro: "Mobilitatea geografică devine controlabilă: mutarea de domiciliu necesită aprobare.",
        en: "Geographic mobility becomes controllable: changing address requires approval.",
      },
      {
        ro: "Dosarul de evidență devine instrument de verificare politică și control social.",
        en: "The record file becomes an instrument of political verification and social control.",
      },
    ],
    systemView: {
      title: { ro: "Administrație socială modernă", en: "Modern social administration" },
      body: {
        ro: "Statul social necesită evidență continuă pentru a putea oferi pensii, ajutoare, servicii medicale și educație. Fără dosarul permanent nu poți administra o societate modernă.",
        en: "The social state requires continuous records to provide pensions, welfare, healthcare and education. Without the permanent file you cannot administer a modern society.",
      },
    },
    rebelView: {
      title: { ro: "Supravegherea permanentă", en: "Permanent surveillance" },
      body: {
        ro: "Nu mai ești văzut la momente discrete — ești urmărit continuu. Dosarul tău devine mai real decât tine. Statul nu mai are nevoie să te cunoască — are dosarul.",
        en: "You are no longer seen at discrete moments — you are tracked continuously. Your file becomes more real than you. The state no longer needs to know you — it has the file.",
      },
    },
    whyItMatters: {
      ro: "Primul sistem de supraveghere continuă a persoanei în România. Nu mai e evidență — e urmărire structurală.",
      en: "The first system of continuous personal surveillance in Romania. It is no longer records — it is structural tracking.",
    },
    consequences: [
      {
        ro: "Mobilitatea internă devine condiționată de aprobarea statului.",
        en: "Internal mobility becomes conditioned on state approval.",
      },
      {
        ro: "Creează infrastructura sociotehnica pentru CNP — identificatorul unic personal care vine în 1978.",
        en: "Creates the sociotechnical infrastructure for the personal numeric code that comes in 1978.",
      },
    ],
    themeSlugs: ["identitate", "vizibilitate", "administratie"],
    legalRefIds: ["legea-evidentei-1996"],
    sourceIds: [],
    regimeId: "comunism",
    tags: ["evidenta", "dosar", "supraveghere", "buletin"],
    relatedIds: ["dot-recensamant-1838", "dot-cnp-1978"],
    published: true,
  },

  // ─── DOT 4: CNP 1978 ─────────────────────────────────────────
  {
    id: "dot-cnp-1978",
    slug: { ro: "cnp-1978", en: "personal-id-number-1978" },
    title: {
      ro: "CNP-ul — persoana devine serie",
      en: "The personal ID number — the person becomes a series",
    },
    periodLabel: { ro: "1978", en: "1978" },
    sortYear: 1978,
    shortLine: {
      ro: "Aici omul intră în logică de serie. 13 cifre — imuabile, totale, pe viață.",
      en: "Here the person enters the logic of series. 13 digits — immutable, total, for life.",
    },
    summary: {
      ro: "Decretul nr. 97/1978 introducere Codul Numeric Personal — un identificator unic, imuabil, atribuit la naștere și valabil toată viața. Pentru prima dată în istoria României, o persoană poate fi identificată univoc de orice instituție a statului prin același număr.",
      en: "Decree no. 97/1978 introduces the Personal Numeric Code — a unique, immutable identifier assigned at birth and valid for life. For the first time in Romanian history, a person can be univocally identified by any state institution through the same number.",
    },
    thesis: {
      ro: "Nu mai ești o persoană cu un nume și o poveste — ești o serie cu 13 cifre. Numărul te-a făcut mai puțin om și mai operabil.",
      en: "You are no longer a person with a name and a story — you are a 13-digit series. The number made you less human and more operable.",
    },
    antithesis: {
      ro: "Identificatorul unic este baza oricărui drept documentat: fără el nu poți dovedi cine ești în fața nicio instituții.",
      en: "The unique identifier is the foundation of any documented right: without it you cannot prove who you are before any institution.",
    },
    synthesis: {
      ro: "Numărul te-a făcut mai puțin om față de sistem, dar nu mai puțin om față de alți oameni. A făcut ca sistemul să poată opera asupra ta fără să te mai cunoască.",
      en: "The number made you less human to the system, but not less human to other people. It made it possible for the system to operate upon you without having to know you.",
    },
    factualLayer: [
      {
        ro: "Decretul nr. 97/1978 — fiecare persoană primește un cod numeric personal de 13 cifre, unic și imuabil pe durata vieții.",
        en: "Decree no. 97/1978 — each person receives a 13-digit personal numeric code, unique and immutable for life.",
      },
      {
        ro: "Codul conține: sex, dată naștere, județ, număr de ordine, cifră de control.",
        en: "The code contains: sex, date of birth, county, sequence number, check digit.",
      },
      {
        ro: "Toate instituțiile statului adoptă CNP-ul ca identificator primar.",
        en: "All state institutions adopt the personal ID number as the primary identifier.",
      },
    ],
    legalLayer: [
      {
        ro: "Decretul nr. 97/1978 al Consiliului de Stat al RSR.",
        en: "Decree no. 97/1978 of the State Council of the Socialist Republic of Romania.",
      },
      {
        ro: "Obligativitatea înscrierii CNP pe toate documentele oficiale.",
        en: "Mandatory inclusion of the personal ID number on all official documents.",
      },
    ],
    systemLayer: [
      {
        ro: "Orice instituție poate identifica univoc orice persoană fără contact cu altă instituție.",
        en: "Any institution can univocally identify any person without contact with another institution.",
      },
      {
        ro: "Datele despre o persoană din instituții diferite pot fi corelate prin identificatorul comun.",
        en: "Data about a person from different institutions can be correlated through the common identifier.",
      },
      {
        ro: "Baza interoperabilității — orice sistem viitor de evidență poate folosi CNP-ul ca cheie primară.",
        en: "The foundation of interoperability — any future records system can use the personal ID number as a primary key.",
      },
    ],
    systemView: {
      title: { ro: "Identificare univocă", en: "Univocal identification" },
      body: {
        ro: "Eficiența administrativă necesită un identificator unic. Fără el, aceeași persoană apare în mod diferit în fiecare registru — erorile, duplicatele și fraudele sunt inevitabile.",
        en: "Administrative efficiency requires a unique identifier. Without it, the same person appears differently in each register — errors, duplicates and fraud are inevitable.",
      },
    },
    rebelView: {
      title: { ro: "Reducerea la serie", en: "Reduction to a series" },
      body: {
        ro: "Numărul te-a făcut mai operabil. Acum poți fi procesat, corelat, executat fără ca cineva să te cunoască. CNP-ul nu e un serviciu — e o cheie pentru sistemul care operează asupra ta.",
        en: "The number made you more operable. Now you can be processed, correlated, executed without anyone knowing you. The personal ID number is not a service — it is a key for the system that operates upon you.",
      },
    },
    whyItMatters: {
      ro: "CNP-ul este momentul când interoperabilitatea viitoare devine posibilă. Toate sistemele digitale de azi operează cu CNP-ul drept cheie primară.",
      en: "The personal ID number is the moment when future interoperability becomes possible. All digital systems today operate with it as the primary key.",
    },
    consequences: [
      {
        ro: "Face posibilă corelarea datelor despre o persoană din surse diferite fără contactul sau consimțământul persoanei.",
        en: "Makes it possible to correlate data about a person from different sources without the person's contact or consent.",
      },
      {
        ro: "Baza tehnică pentru RNEP și pentru orice sistem informatic public din România.",
        en: "The technical foundation for the National Population Register and any public IT system in Romania.",
      },
    ],
    themeSlugs: ["identitate", "vizibilitate", "administratie", "digital"],
    legalRefIds: ["legea-cnp-1978"],
    sourceIds: [],
    regimeId: "comunism",
    tags: ["CNP", "identificator", "serie", "interoperabilitate"],
    relatedIds: ["dot-evidenta-1949", "dot-gramatica-juridica-1990"],
    published: true,
  },

  // ─── DOT 5: Gramatica juridică 1990-1991 ─────────────────────
  {
    id: "dot-gramatica-juridica-1990",
    slug: { ro: "gramatica-juridica-1990", en: "legal-grammar-1990" },
    title: {
      ro: "Schimbarea gramaticii juridice",
      en: "The change of legal grammar",
    },
    periodLabel: { ro: "1990–1991", en: "1990–1991" },
    sortYear: 1990,
    endYear: 1991,
    shortLine: {
      ro: "Ai primit dreptul la titlu. Ai intrat în registrul deținătorilor.",
      en: "You received the right to title. You entered the registry of holders.",
    },
    summary: {
      ro: "Prăbușirea comunismului aduce o revoluție juridică: legile proprietății private, ale societăților comerciale, ale contractelor libere rescriu raportul dintre persoană și sistem. Statul nu mai e singurul proprietar — oamenii intră în registre noi: imobiliare, comerciale, fiscale private.",
      en: "The collapse of communism brings a legal revolution: laws on private property, commercial companies, free contracts rewrite the relationship between person and system. The state is no longer the sole owner — people enter new registries: real estate, commercial, private fiscal.",
    },
    thesis: {
      ro: "Contractul și titlul de proprietate nu sunt libertate — sunt noi forme de vizibilitate și trasabilitate. Ești acum în registrul de proprietari, de asociați, de debitori.",
      en: "Contract and property title are not freedom — they are new forms of visibility and traceability. You are now in the registry of owners, associates, debtors.",
    },
    antithesis: {
      ro: "Fără proprietate privată documentată nu există economie de piață, nu există antreprenoriat, nu există drepturi reale protejabile.",
      en: "Without documented private property there is no market economy, no entrepreneurship, no real protectable rights.",
    },
    synthesis: {
      ro: "Schimbarea gramaticii juridice extinde libertatea reală — dar o face prin adăugarea unui nou strat de vizibilitate. Libertatea de a deține vine cu obligația de a fi văzut ca deținător.",
      en: "The change of legal grammar extends real freedom — but does so by adding a new layer of visibility. The freedom to own comes with the obligation to be seen as an owner.",
    },
    factualLayer: [
      {
        ro: "Legea 15/1990 — reorganizarea unităților economice de stat în regii autonome și societăți comerciale.",
        en: "Law 15/1990 — reorganization of state economic units into autonomous undertakings and commercial companies.",
      },
      {
        ro: "Legea 31/1990 — legea societăților comerciale. Prima lege care permite persoanelor fizice să constituie societăți.",
        en: "Law 31/1990 — the companies law. The first law allowing natural persons to form companies.",
      },
      {
        ro: "Legea fondului funciar 18/1991 — restituirea parțială a proprietăților agricole.",
        en: "Land fund law 18/1991 — partial restitution of agricultural properties.",
      },
    ],
    legalLayer: [
      {
        ro: "Constituția din 1991 garantează proprietatea privată și consacră economia de piață.",
        en: "The 1991 Constitution guarantees private property and enshrines the market economy.",
      },
      {
        ro: "Registrul Comerțului devine obligatoriu — orice societate comercială trebuie înregistrată și publicată.",
        en: "The Trade Registry becomes mandatory — any commercial company must be registered and published.",
      },
      {
        ro: "Cartea funciară și cadastrul revin ca instrumente juridice active.",
        en: "The land book and cadastre return as active legal instruments.",
      },
    ],
    systemLayer: [
      {
        ro: "Statul câștigă noi puncte de vizibilitate: registrul comerțului, cadastrul, ANAF.",
        en: "The state gains new visibility points: trade registry, cadastre, fiscal authority.",
      },
      {
        ro: "Persoana cu proprietate privată devine automat subiect fiscal identificabil.",
        en: "A person with private property automatically becomes an identifiable fiscal subject.",
      },
      {
        ro: "Activitatea economică privată devine trasabilă legal pentru prima dată.",
        en: "Private economic activity becomes legally traceable for the first time.",
      },
    ],
    systemView: {
      title: { ro: "Construcția statului de drept", en: "Building the rule of law" },
      body: {
        ro: "Statul democratic modern necesită evidența clară a drepturilor de proprietate, a obligațiilor fiscale și a persoanelor juridice. Fără aceste registre nu există securitate juridică și nici investiție.",
        en: "The modern democratic state requires clear records of property rights, fiscal obligations and legal persons. Without these registries there is no legal security and no investment.",
      },
    },
    rebelView: {
      title: { ro: "Noi registre, nouă vizibilitate", en: "New registries, new visibility" },
      body: {
        ro: "Am primit libertatea de a deține — dar odată cu ea, am intrat în noi inventare. Acum ești în registrul de proprietari, de asociați, de datornici. Libertatea vine cu un nou strat de trasabilitate.",
        en: "We received the freedom to own — but along with it, we entered new inventories. Now you are in the registry of owners, associates, debtors. Freedom comes with a new layer of traceability.",
      },
    },
    whyItMatters: {
      ro: "Gramatica juridică nouă creează un nou tip de vizibilitate: nu mai e evidența persoanei ca cetățean, ci ca actor economic, proprietar, debitor.",
      en: "The new legal grammar creates a new type of visibility: no longer the record of the person as citizen, but as economic actor, owner, debtor.",
    },
    consequences: [
      {
        ro: "Creează baza pentru piața imobiliară, sistemul bancar și fiscalitatea modernă.",
        en: "Creates the foundation for the real estate market, banking system and modern taxation.",
      },
      {
        ro: "Multiplică numărul de registre în care o persoană apare — acum ești vizibil simultan în mai multe sisteme.",
        en: "Multiplies the number of registries in which a person appears — now you are visible simultaneously in multiple systems.",
      },
    ],
    themeSlugs: ["proprietate", "fiscal", "lege", "vizibilitate"],
    legalRefIds: ["constitutia-1866"],
    sourceIds: [],
    regimeId: "tranzitie",
    tags: ["proprietate", "contract", "titlu", "societate", "tranzitie"],
    relatedIds: ["dot-cnp-1978", "dot-rnep-2005"],
    published: true,
  },

  // ─── DOT 6: RNEP + informatizare 1990-2005 ────────────────────
  {
    id: "dot-rnep-2005",
    slug: { ro: "rnep-informatizare-2005", en: "rnep-digitization-2005" },
    title: {
      ro: "RNEP și informatizarea — date legibile între sisteme",
      en: "RNEP and digitization — data legible between systems",
    },
    periodLabel: { ro: "1990–2005", en: "1990–2005" },
    sortYear: 1990,
    endYear: 2005,
    shortLine: {
      ro: "N dosare separate devin un singur profil. Fără știrea ta.",
      en: "N separate files become a single profile. Without your knowledge.",
    },
    summary: {
      ro: "Legea 290/2004 creează Registrul Național de Evidență a Persoanelor — o bază de date unificată care conectează toate înregistrările anterioare prin CNP. Nu mai sunt dosare separate — acum există un profil digital unic, accesibil tuturor instituțiilor de stat.",
      en: "Law 290/2004 creates the National Register of Population Records — a unified database that connects all previous records through the personal ID number. There are no longer separate files — now there is a single digital profile, accessible to all state institutions.",
    },
    thesis: {
      ro: "RNEP nu e un serviciu — e o infrastructură de control. Datele tale sunt acum accesibile oricărei instituții autorizate, fără ca tu să știi când și de ce.",
      en: "RNEP is not a service — it is a control infrastructure. Your data is now accessible to any authorized institution, without you knowing when and why.",
    },
    antithesis: {
      ro: "Interoperabilitatea reduce birocrația masiv. Nu mai trebuie să aduci hârtii de la o instituție la alta — sistemul știe deja.",
      en: "Interoperability massively reduces bureaucracy. You no longer have to bring papers from one institution to another — the system already knows.",
    },
    synthesis: {
      ro: "RNEP transformă suma dosarelor separate într-un profil integrat. Diferența nu e de cantitate — e de natură. Un sistem care corelează e calitativ diferit de N sisteme izolate.",
      en: "RNEP transforms the sum of separate files into an integrated profile. The difference is not of quantity — it is of nature. A system that correlates is qualitatively different from N isolated systems.",
    },
    factualLayer: [
      {
        ro: "Legea 290/2004 creează RNEP — Registrul Național de Evidență a Persoanelor.",
        en: "Law 290/2004 creates the RNEP — National Register of Population Records.",
      },
      {
        ro: "Informatizarea Ministerului de Interne — digitaliz area tuturor evidențelor de stare civilă și domiciliu.",
        en: "Digitization of the Ministry of Internal Affairs — digitalization of all civil status and address records.",
      },
      {
        ro: "Noua carte de identitate electronică (din 2001) conține date digitale citibile de mașini.",
        en: "The new electronic identity card (from 2001) contains machine-readable digital data.",
      },
    ],
    legalLayer: [
      {
        ro: "Legea 677/2001 privind protecția datelor cu caracter personal (transpunerea Directivei europene 95/46/CE).",
        en: "Law 677/2001 on personal data protection (transposing the European Directive 95/46/CE).",
      },
      {
        ro: "Legea 290/2004 — cadrul legal al RNEP și condițiile de acces la date.",
        en: "Law 290/2004 — the legal framework of RNEP and conditions of data access.",
      },
    ],
    systemLayer: [
      {
        ro: "Interoperabilitatea între instituții: aceeași persoană poate fi verificată simultan în mai multe registre.",
        en: "Interoperability between institutions: the same person can be verified simultaneously in multiple registers.",
      },
      {
        ro: "Timp real: datele actualizate într-un registru se propagă imediat în toate sistemele conectate.",
        en: "Real time: data updated in one register propagates immediately to all connected systems.",
      },
      {
        ro: "Profilul digital al persoanei devine suma tuturor datelor din toate registrele — corelate prin CNP.",
        en: "The digital profile of the person becomes the sum of all data from all registries — correlated by the personal ID number.",
      },
    ],
    systemView: {
      title: { ro: "E-government și servicii integrate", en: "E-government and integrated services" },
      body: {
        ro: "Interoperabilitatea e singura cale spre servicii publice eficiente. Cetățeanul nu trebuie să care hârtii — sistemul trebuie să funcționeze pentru el.",
        en: "Interoperability is the only path to efficient public services. The citizen should not have to carry papers — the system should work for them.",
      },
    },
    rebelView: {
      title: { ro: "Profilul integrat", en: "The integrated profile" },
      body: {
        ro: "Când sistemele sunt izolate, fiecare știe doar o bucată din tine. Când sunt interoperabile, însumate prin CNP, sistemul știe mai mult despre tine decât știi tu. Nu mai e nevoie să te cunoască — te poate procesa.",
        en: "When systems are isolated, each knows only a piece of you. When they are interoperable, summed through the personal ID number, the system knows more about you than you know about yourself. It no longer needs to know you — it can process you.",
      },
    },
    whyItMatters: {
      ro: "Acesta este saltul de la lizibilitate la interoperabilitate. Nu mai ești vizibil în N sisteme separate — ești corelat într-un singur profil distribuit.",
      en: "This is the leap from legibility to interoperability. You are no longer visible in N separate systems — you are correlated into a single distributed profile.",
    },
    consequences: [
      {
        ro: "Viteza de execuție administrativă crește dramatic — blocajele birocratice legate de transferul de informații dispar.",
        en: "The speed of administrative execution increases dramatically — bureaucratic bottlenecks related to information transfer disappear.",
      },
      {
        ro: "Consimțământul persoanei devine practic irelevant pentru circulația datelor între instituțiile statului.",
        en: "The person's consent becomes practically irrelevant for data circulation between state institutions.",
      },
    ],
    themeSlugs: ["digital", "identitate", "vizibilitate", "administratie"],
    legalRefIds: ["legea-rnep-2004", "legea-evidentei-1996"],
    sourceIds: [],
    regimeId: "digital",
    tags: ["RNEP", "interoperabilitate", "date-personale", "e-government"],
    relatedIds: ["dot-cnp-1978", "dot-identitate-digitala-2025"],
    published: true,
  },

  // ─── DOT 7: Identitatea digitală 2025-2026 ────────────────────
  {
    id: "dot-identitate-digitala-2025",
    slug: { ro: "identitate-digitala-2025", en: "digital-identity-2025" },
    title: {
      ro: "Identitatea fizico-digitală",
      en: "The physico-digital identity",
    },
    periodLabel: { ro: "2025–2026", en: "2025–2026" },
    sortYear: 2025,
    shortLine: {
      ro: "Nu mai trebuie să dovedești cine ești — poți fi accesat și operat digital.",
      en: "You no longer need to prove who you are — you can be accessed and operated digitally.",
    },
    summary: {
      ro: "Cartea de identitate electronică (CEI), eID-ul și portofelul digital european (eIDAS 2.0) fuzionează identitatea fizică cu cea digitală. Persoana devine un nod în rețeaua de sisteme interoperabile europene. Autentificarea biometrică, semnătura electronică și credențialele digitale creează un nou strat de lizibilitate: distanță zero.",
      en: "The electronic identity card (CEI), eID and the European digital wallet (eIDAS 2.0) fuse physical with digital identity. The person becomes a node in the network of interoperable European systems. Biometric authentication, electronic signature and digital credentials create a new layer of legibility: zero distance.",
    },
    thesis: {
      ro: "Identitatea digitală nu e un serviciu — e o infrastructură de operabilitate. Cu eID-ul poți fi procesat, verificat și executat fără prezență fizică, fără hârtii, fără martor.",
      en: "Digital identity is not a service — it is an operability infrastructure. With eID you can be processed, verified and executed without physical presence, without papers, without witness.",
    },
    antithesis: {
      ro: "Identitatea digitală elimină corupția la ghișeu, reduce birocrația la zero, permite accesul la servicii publice din orice locație.",
      en: "Digital identity eliminates counter corruption, reduces bureaucracy to zero, allows access to public services from any location.",
    },
    synthesis: {
      ro: "Identitatea fizico-digitală este apogeul unui proces de 200 de ani. Nu am ajuns dintr-un salt — am fost făcuți treptat mai lizibili, mai indexabili, mai procesabili. Istoria modernă este povestea creșterii lizibilității persoanei în fața sistemului.",
      en: "The physico-digital identity is the culmination of a 200-year process. We did not get here in a leap — we were made gradually more legible, more indexable, more processable. Modern history is the story of the growing legibility of the person before the system.",
    },
    factualLayer: [
      {
        ro: "CEI — Cartea de Identitate Electronică introdusă prin OUG 97/2005, cu implementare graduală din 2021.",
        en: "CEI — the Electronic Identity Card introduced by GEO 97/2005, with gradual implementation from 2021.",
      },
      {
        ro: "Regulamentul eIDAS 2.0 (UE) — portofelul digital european, obligatoriu pentru statele membre din 2026.",
        en: "eIDAS 2.0 Regulation (EU) — the European digital wallet, mandatory for member states from 2026.",
      },
      {
        ro: "Chip biometric, semnătură electronică calificată și credențiale digitale — toate stocate pe un singur document.",
        en: "Biometric chip, qualified electronic signature and digital credentials — all stored on a single document.",
      },
    ],
    legalLayer: [
      {
        ro: "Regulamentul EU 910/2014 eIDAS (Electronic Identification and Authentication Services).",
        en: "EU Regulation 910/2014 eIDAS (Electronic Identification and Authentication Services).",
      },
      {
        ro: "Regulamentul EU 2024/1183 eIDAS 2.0 — portofelul de identitate digitală european.",
        en: "EU Regulation 2024/1183 eIDAS 2.0 — the European digital identity wallet.",
      },
      {
        ro: "OUG 97/2005 (republicată) — documentele de identitate ale cetățenilor români.",
        en: "GEO 97/2005 (republished) — identity documents of Romanian citizens.",
      },
    ],
    systemLayer: [
      {
        ro: "Zero distanță: sistemul poate opera asupra ta fără prezență fizică, fără intermediar, fără hârtii.",
        en: "Zero distance: the system can operate upon you without physical presence, without intermediary, without papers.",
      },
      {
        ro: "Interoperabilitate europeană: identitatea ta e valabilă în toate sistemele UE prin același identificator.",
        en: "European interoperability: your identity is valid in all EU systems through the same identifier.",
      },
      {
        ro: "Autentificarea biometrică elimină orice ambiguitate de identitate: nu mai poți nega că ai fost prezent digital.",
        en: "Biometric authentication eliminates any identity ambiguity: you can no longer deny having been digitally present.",
      },
    ],
    systemView: {
      title: { ro: "Servicii digitale la distanță zero", en: "Digital services at zero distance" },
      body: {
        ro: "eID-ul este infrastructura pentru servicii publice moderne — sănătate, educație, taxe, vot electronic, semnătură digitală. Fără el, statul digital e o promisiune goală.",
        en: "eID is the infrastructure for modern public services — health, education, taxes, e-voting, digital signature. Without it, the digital state is an empty promise.",
      },
    },
    rebelView: {
      title: { ro: "Operabilitate totală", en: "Total operability" },
      body: {
        ro: "Acum poți fi și operat digital. Procesul început cu recensământul din 1838 s-a încheiat: ești nu doar vizibil, ci și la distanță zero față de sistem. Nu mai trebuie să dovedești cine ești — poți fi accesat.",
        en: "Now you can also be operated digitally. The process that began with the 1838 census is complete: you are not just visible, but at zero distance from the system. You no longer need to prove who you are — you can be accessed.",
      },
    },
    whyItMatters: {
      ro: "Ultimul punct din timeline — deocamdată. Fuziunea identității fizice cu cea digitală este apogeul procesului de 200 de ani de creștere a lizibilității persoanei.",
      en: "The last point in the timeline — for now. The fusion of physical with digital identity is the culmination of the 200-year process of growing personal legibility.",
    },
    consequences: [
      {
        ro: "Persoana devine un nod în rețeaua europeană de sisteme interoperabile — vizibil și operat la scară continentală.",
        en: "The person becomes a node in the European network of interoperable systems — visible and operated at continental scale.",
      },
      {
        ro: "Absența identității digitale poate echivala cu excluderea din servicii publice, economie și drepturi.",
        en: "The absence of digital identity can equate to exclusion from public services, economy and rights.",
      },
    ],
    themeSlugs: ["digital", "identitate", "vizibilitate", "lege"],
    legalRefIds: [],
    sourceIds: [],
    regimeId: "digital",
    tags: ["eID", "CEI", "eIDAS", "identitate-digitala", "biometric"],
    relatedIds: ["dot-rnep-2005"],
    published: true,
  },
];
