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
    coolingLabel: { ro: "om viu", en: "living person" },
    summary: {
      ro: "Înainte de modernitate, omul era vizibil doar local și parțial: gospodărie, brațe de muncă, contribuabili. Niciun sistem central nu încerca să obțină o imagine completă. Puterea opera prin comunitate, nu prin individ.",
      en: "Before modernity, a person was visible only locally and partially: household, labor, taxpayer. No central system sought a complete image. Power operated through community, not through the individual.",
    },
    thesis: {
      ro: "Libertatea premodernă nu era garantată de lege — era produsă de opacitate. Nu puteai fi urmărit pentru că nu puteai fi văzut.",
      en: "Pre-modern freedom was not guaranteed by law — it was produced by opacity. You could not be tracked because you could not be seen.",
    },
    antithesis: {
      ro: "Invizibilitatea nu protejează — abandonează. Fără înregistrare, dreptul la proprietate, la identitate juridică, la moștenire nu există. Nu ești liber — ești absent.",
      en: "Invisibility does not protect — it abandons. Without registration, the right to property, to legal identity, to inheritance does not exist. You are not free — you are absent.",
    },
    synthesis: {
      ro: "Opacitatea premodernă nu era o libertate garantată — era o limită a puterii.",
      en: "Pre-modern opacity was not guaranteed freedom — it was a limitation of power.",
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
        ro: "Registre parohiale (sec. XVII–XIX) — singura formă extinsă de înregistrare; fără centralizare de stat, fără identificator comun, fără opozabilitate dincolo de parohie.",
        en: "Parish registers (17th–19th c.) — the only extended form of record; no state centralization, no common identifier, no opposability beyond the parish.",
      },
      {
        ro: "Drept cutumiar / hrisoave — reglementează posesia şi proprietatea fără cadastru unificat şi fără titlu opozabil.",
        en: "Customary law / charters — regulate possession and property without unified cadastre and without opposable title.",
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
        ro: "Un stat fără date nu e un stat — e o pretenție. Nu poți taxa, recruta sau planifica fără să știi câți oameni ai și unde se află.",
        en: "A state without data is not a state — it is a pretense. You cannot tax, recruit or plan without knowing how many people you have and where they are.",
      },
    },
    rebelView: {
      title: { ro: "Opacitate protectoare", en: "Protective opacity" },
      body: {
        ro: "Puterea trebuia să te găsească pentru a opera asupra ta. Asta era o distanță reală. Nu o grație — o limitare structurală pe care modernitatea a eliminat-o sistematic.",
        en: "Power had to find you to operate upon you. That was a real distance. Not a grace — a structural limitation that modernity eliminated systematically.",
      },
    },
    whyItMatters: {
      ro: "Fiecare sistem de evidență creat după 1838 este un răspuns la această limitare. Modernizarea administrativă a României este, în esență, istoria eliminării acestei opacități.",
      en: "Every records system created after 1838 is a response to this limitation. Romania's administrative modernization is, in essence, the history of eliminating this opacity.",
    },
    consequences: [
      {
        ro: "Absența evidenței centrale face imposibilă fiscalitatea uniformă, recrutarea sistematică și orice drept garantat dincolo de comunitate. Puterea depinde de intermediari locali pe care nu îi controlează.",
        en: "The absence of central records makes uniform taxation, systematic conscription and any right guaranteed beyond the community impossible. Power depends on local intermediaries it does not control.",
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
      ro: "De acum, a trăi într-un teritoriu înseamnă a fi numărat.",
      en: "From now on, to live in a territory means to be counted.",
    },
    coolingLabel: { ro: "numărare", en: "counting" },
    summary: {
      ro: "Între 1838 și 1860, Principatele Române introduc primele operațiuni sistematice de numărare și clasificare a populației. Recensământul nu e doar statistică — e primul moment în care statul declară că vrea să știe cine locuiește pe teritoriul său.",
      en: "Between 1838 and 1860, the Romanian Principalities introduce the first systematic operations to count and classify the population. The census is not just statistics — it is the first moment when the state declares it wants to know who lives on its territory.",
    },
    thesis: {
      ro: "Recensământul reduce oameni la categorii: contribuabili, nesupuși, nobili, iobagi. Ești inventariat, nu văzut.",
      en: "The census reduces people to categories: taxpayers, non-subjects, nobles, serfs. You are inventoried, not seen.",
    },
    antithesis: {
      ro: "Fără date despre populație, statul e orb față de propriul teritoriu. Nu poate aloca resurse, nu poate organiza apărarea, nu poate construi școli sau spitale unde sunt necesare. Vizibilitatea statistică nu e putere — e condiția minimă pentru guvernare.",
      en: "Without population data, the state is blind to its own territory. It cannot allocate resources, organize defense, or build schools and hospitals where needed. Statistical visibility is not power — it is the minimum condition for governance.",
    },
    synthesis: {
      ro: "Prezența geografică devine prezență în registru.",
      en: "Geographic presence becomes presence in a register.",
    },
    factualLayer: [
      {
        ro: "Regulamentul Organic (1831-1832) creează cadrul administrativ centralizat și obligă la colectarea sistematică de date.",
        en: "The Organic Regulation (1831-1832) creates the centralized administrative framework and mandates systematic data collection.",
      },
      {
        ro: "Recensământul din 1838 în Valahia — primul care încearcă să numere întreaga populație, nu doar contribuabilii direcți.",
        en: "The 1838 census in Wallachia — the first attempting to count the entire population, not just direct taxpayers.",
      },
    ],
    legalLayer: [
      {
        ro: "Regulamentul Organic / 1831 — instituie obligația evidenței administrative centralizate la nivelul Principatelor.",
        en: "Organic Regulation / 1831 — establishes the obligation of centralised administrative records across the Principalities.",
      },
      {
        ro: "Recensământ / 1838 — introduce prima operație sistematică de înregistrare a populației ca resursă fiscală și militară.",
        en: "Census / 1838 — introduces the first systematic operation of recording the population as a fiscal and military resource.",
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
        ro: "Nu poți guverna un teritoriu pe care nu îl poți cuantifica. Recensământul e instrumentul prin care un principat devine un stat capabil să planifice, să taxeze uniform și să mobilizeze forță militară.",
        en: "You cannot govern a territory you cannot quantify. The census is the instrument through which a principality becomes a state capable of planning, taxing uniformly and mobilizing military force.",
      },
    },
    rebelView: {
      title: { ro: "Primul inventar", en: "The first inventory" },
      body: {
        ro: "Suntem numărați, clasificați, împinși în categorii. Nu contezi ca om liber — contezi ca resursă fiscală sau militară. Statul nu te cunoaște, te numără.",
        en: "We are counted, classified, pushed into categories. You don't count as a free person — you count as a fiscal or military resource. The state doesn't know you, it counts you.",
      },
    },
    whyItMatters: {
      ro: "Statul român nu a încetat să numere de la 1838 încoace. Fiecare reformă de evidență ulterioară a adăugat un strat nou pe același act fondator: cunoașterea populației devine condiție permanentă a guvernării.",
      en: "Romania has not stopped counting since 1838. Every subsequent records reform added a new layer to the same founding act: knowledge of the population becomes a permanent condition of governance.",
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
    legalRefIds: ["regulamentul-organic-1831", "recensamantul-1838"],
    sourceIds: [],
    regimeId: "principate",
    tags: ["recensamant", "statistica", "populatie"],
    relatedIds: ["dot-pre-modern", "dot-starea-civila-1864"],
    published: true,
  },

  // ─── DOT 3: Starea civilă de stat 1864 ───────────────────────
  {
    id: "dot-starea-civila-1864",
    slug: { ro: "starea-civila-1864", en: "civil-registry-1864" },
    title: {
      ro: "Cuza / Starea civilă devine de stat",
      en: "Cuza / Civil status becomes state-managed",
    },
    periodLabel: { ro: "1864–1865", en: "1864–1865" },
    sortYear: 1864,
    endYear: 1865,
    shortLine: {
      ro: "Nu mai exiști doar în memoria comunității. Exiști și în registrul statului.",
      en: "You no longer exist only in community memory. You exist also in the state register.",
    },
    coolingLabel: { ro: "registru civil", en: "civil registry" },
    summary: {
      ro: "Sub Cuza, persoana civilă începe să iasă din evidența locală și confesională și să intre într-o formă administrativă unificată. Nu este încă un identificator unic. Este însă prima mare tentativă de serializare administrativă a identității civile.",
      en: "Under Cuza, the civil person begins to exit local and confessional records and enter a unified administrative form. It is not yet a unique identifier. But it is the first major attempt at administrative serialisation of civil identity.",
    },
    thesis: {
      ro: "Starea civilă de stat nu eliberează de vechiul regim — fixează în cel nou. Nașterea, căsătoria și moartea devin acte ale statului, nu ale comunității.",
      en: "State civil registry does not free from the old regime — it fixes into the new one. Birth, marriage and death become acts of the state, not of the community.",
    },
    antithesis: {
      ro: "Fără stare civilă de stat, libertatea rămâne fragilă și locală. Un stat modern nu poate garanta filiația, succesiunea, capacitatea juridică sau identitatea persoanei dacă acestea rămân dispersate în registre neuniforme, confesionale sau strict comunitare. Trecerea la evidențe civile controlate de autoritatea publică nu este doar fixare administrativă; este condiția prin care drepturile devin verificabile și opozabile dincolo de sat, familie sau parohie.",
      en: "Without state civil registry, freedom remains fragile and local. A modern state cannot guarantee filiation, succession, legal capacity or the identity of a person if these remain scattered across non-uniform, confessional or strictly communal registers. The transition to civil records controlled by public authority is not just administrative fixing; it is the condition through which rights become verifiable and enforceable beyond village, family or parish.",
    },
    synthesis: {
      ro: "Câștigul de libertate și câștigul de lizibilitate cresc din același act.",
      en: "Freedom and legibility grow from the same act.",
    },
    factualLayer: [
      {
        ro: "Legea comunală (31 martie 1864) și Codul civil din 1864 marchează pasul prin care statul intră în administrarea identității civile; Codul civil a fost promulgat la 4 decembrie 1864 și pus în aplicare la 1 decembrie 1865.",
        en: "The Communal Law (31 March 1864) and the Civil Code of 1864 mark the step by which the state enters the management of civil identity; the Civil Code was promulgated on 4 December 1864 and came into force on 1 December 1865.",
      },
      {
        ro: "De la 1 ianuarie 1865, vechile registre parohiale încep să fie transformate în registre comunale de stare civilă, verificate, certificate și centralizate de primar.",
        en: "From 1 January 1865, old parish registers begin to be converted into communal civil status registers, verified, certified and centralised by the mayor.",
      },
      {
        ro: "Mutația nu introduce încă un număr personal unic, dar mută persoana din memoria comunității într-o evidență civilă standardizată și controlată public.",
        en: "The mutation does not yet introduce a unique personal number, but moves the person from community memory into a standardised and publicly controlled civil record.",
      },
    ],
    legalLayer: [
      {
        ro: "Legea comunală / 1864 — mută administrarea vieții civile în cadrul autorității locale și pregătește controlul public asupra registrelor de stare civilă.",
        en: "Communal Law / 1864 — transfers management of civil life into local authority and prepares public control over civil status registers.",
      },
      {
        ro: "Codul civil / 1864–1865 — fixează cadrul juridic modern al stării și capacității persoanei și face posibilă uniformizarea actelor civile la scară de stat.",
        en: "Civil Code / 1864–1865 — establishes the modern legal framework of a person's civil status and capacity, enabling uniform civil records at state scale.",
      },
    ],
    systemLayer: [
      {
        ro: "Persoana apare acum ca obiect civil standardizat, comparabil și verificabil în afara comunității imediate.",
        en: "The person now appears as a standardised, comparable and verifiable civil object outside the immediate community.",
      },
      {
        ro: "Identitatea civilă poate fi reprodusă administrativ și transportată juridic între instituții și localități.",
        en: "Civil identity can be reproduced administratively and transported legally between institutions and localities.",
      },
      {
        ro: "Filiația, succesiunea și capacitatea juridică devin verificabile la scara statului, nu doar la nivelul comunității locale.",
        en: "Filiation, succession and legal capacity become verifiable at state scale, not only at local community level.",
      },
    ],
    systemView: {
      title: { ro: "Ordinea juridică are nevoie de identitate civilă stabilă", en: "Legal order requires stable civil identity" },
      body: {
        ro: "Fără registre civile uniforme, statul modern rămâne o intenție, nu o infrastructură. Nu poți administra egal persoane, bunuri, succesiuni și raporturi juridice dacă identitatea lor depinde de memorie locală sau de evidențe paralele. Starea civilă de stat oferă persoanei o formă juridică stabilă, recognoscibilă și transportabilă între comunități și instituții.",
        en: "Without uniform civil registers, the modern state remains an intention, not an infrastructure. You cannot equally administer persons, goods, successions and legal relations if their identity depends on local memory or parallel records. State civil status gives the person a stable, recognisable and transportable legal form across communities and institutions.",
      },
    },
    rebelView: {
      title: { ro: "Fiecare libertate nouă vine cu un format nou de intrare", en: "Every new freedom comes with a new entry format" },
      body: {
        ro: "Când lumea vorbește despre reformă și modernizare, statul începe și munca mai tăcută: să te scrie, să te fixeze, să te facă repetabil în registre. Nu mai ești doar fiul cuiva, cunoscut de sat și de preot. Devii un caz civil standardizat. Pentru unii, asta era emancipare. Pentru alții, era începutul coliviei administrative.",
        en: "When the world speaks of reform and modernisation, the state also begins its quieter work: to write you down, to fix you, to make you repeatable in registers. You are no longer just someone's son, known by village and priest. You become a standardised civil case. For some, that was emancipation. For others, it was the beginning of the administrative cage.",
      },
    },
    whyItMatters: {
      ro: "Între omul numărat și omul urmărit continuu lipsea o verigă: persoana civilă fixată de stat. Fără acest pas, 1949 ar părea o ruptură prea bruscă, iar CNP-ul ar veni peste un vid. Cuza nu introduce încă identificatorul personal. Introduce infrastructura în care o astfel de logică devine, mai târziu, posibilă.",
      en: "Between the counted person and the continuously tracked person, a link was missing: the civil person fixed by the state. Without this step, 1949 would look like too abrupt a break and the personal numeric code would come over an emptiness. Cuza does not yet introduce the personal identifier. He introduces the infrastructure in which such a logic later becomes possible.",
    },
    consequences: [
      {
        ro: "Nașterea, căsătoria și moartea încep să circule într-o formă administrativă mai uniformă, nu doar într-o memorie local-confesională.",
        en: "Birth, marriage and death begin to circulate in a more uniform administrative form, not only in local-confessional memory.",
      },
      {
        ro: "Filiația, succesiunea și capacitatea juridică pot fi verificate mai stabil dincolo de comunitatea imediată, în cadrul unui stat care caută să se unifice administrativ.",
        en: "Filiation, succession and legal capacity can be verified more stably beyond the immediate community, within a state seeking administrative unification.",
      },
      {
        ro: "Persoana devine mai ușor de fixat, comparat și transportat juridic între instituții. Nu este încă serializare numerică tare, dar este prima mare serializare administrativă a identității civile.",
        en: "The person becomes easier to fix, compare and legally transport between institutions. Not yet hard numeric serialisation, but the first major administrative serialisation of civil identity.",
      },
    ],
    themeSlugs: ["identitate", "administratie", "lege", "vizibilitate"],
    legalRefIds: ["legea-comunala-1864", "codul-civil-1864"],
    sourceIds: [],
    regimeId: "principate",
    tags: ["stare-civila", "cuza", "cod-civil", "registre"],
    relatedIds: ["dot-recensamant-1838", "dot-evidenta-1949"],
    published: true,
  },

  // ─── DOT 4: Evidența centrală 1949 ───────────────────────────
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
      ro: "Dosarul tău nu se mai închide. Rămâne deschis toată viața.",
      en: "Your file no longer closes. It stays open for life.",
    },
    coolingLabel: { ro: "dosar permanent", en: "permanent file" },
    summary: {
      ro: "Regimul comunist instaurează evidența continuă a populației. Nu mai e vorba de recensământ periodic — fiecare mișcare, schimbare de domiciliu, stare civilă sau profesie intră în fișa permanentă de evidență. Statul socialist vrea să știe unde ești permanent, nu doar la momente discrete.",
      en: "The communist regime establishes continuous population surveillance. It is no longer about periodic census — every movement, change of address, civil status or profession enters the permanent record file. The socialist state wants to know where you are permanently, not just at discrete moments.",
    },
    thesis: {
      ro: "Dosarul tău nu te descrie — te reduce. Ești suma a ceea ce statul a decis să noteze despre tine.",
      en: "Your file does not describe you — it reduces you. You are the sum of what the state decided to note about you.",
    },
    antithesis: {
      ro: "Statul social cere continuitate. Pensia se calculează pe ani de muncă, alocația cere dovada copilului, tratamentul medical cere istoricul bolii. Fără evidență permanentă nu există drepturi garantate — există doar promisiuni.",
      en: "The social state demands continuity. Pensions are calculated on years of work, allowances require proof of child, medical treatment requires disease history. Without permanent records there are no guaranteed rights — only promises.",
    },
    synthesis: {
      ro: "Evidența continuă a eliminat pauzele. Nu mai există interval în care să nu fii în registru.",
      en: "Continuous records eliminated the gaps. There is no longer an interval in which you are not on record.",
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
        ro: "Decret / 1949 — instituie evidența continuă şi permanentă a populației ca obligație administrativă a statului.",
        en: "Decree / 1949 — establishes continuous and permanent population records as a state administrative obligation.",
      },
      {
        ro: "Regulamentul de evidență / 1949 — stabileşte categoriile obligatorii de date: domiciliu, profesie, stare civilă.",
        en: "Population records regulation / 1949 — sets mandatory data categories: address, occupation, civil status.",
      },
      {
        ro: "Decretul 25/1952 — consacră buletinul de identitate cu fotografie ca document unic obligatoriu de identificare a persoanei pe întreg teritoriul național.",
        en: "Decree 25/1952 — enshrines the photo identity card as the sole mandatory document of personal identification across the national territory.",
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
        ro: "Statul social nu poate funcționa fără să știe cine are dreptul la ce. Fișa permanentă nu e supraveghere — e infrastructura prin care drepturile sociale devin aplicabile, nu doar declarate.",
        en: "The social state cannot function without knowing who has the right to what. The permanent file is not surveillance — it is the infrastructure through which social rights become enforceable, not merely declared.",
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
      ro: "Sistemul de evidență continuă creat în 1949 e infrastructura pe care se sprijină azi RNEP-ul. Dosarul care nu se închide din 1949 a devenit profilul digital care nu se șterge.",
      en: "The continuous records system created in 1949 is the infrastructure that supports RNEP today. The file that never closes since 1949 became the digital profile that never deletes.",
    },
    consequences: [
      {
        ro: "Mobilitatea internă devine condiționată de aprobarea statului.",
        en: "Internal mobility becomes conditioned on state approval.",
      },
      {
        ro: "Creează infrastructura sociotehnică pentru CNP — identificatorul unic personal care vine în 1978.",
        en: "Creates the sociotechnical infrastructure for the personal numeric code that comes in 1978.",
      },
    ],
    themeSlugs: ["identitate", "vizibilitate", "administratie"],
    legalRefIds: ["decretul-evidenta-1949", "legea-evidentei-1996"],
    sourceIds: [],
    regimeId: "comunism",
    tags: ["evidenta", "dosar", "supraveghere", "buletin"],
    relatedIds: ["dot-starea-civila-1864", "dot-cnp-1978"],
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
      ro: "Omul devine serie. 13 cifre — imuabile, totale, atribuite la naștere.",
      en: "The person becomes a series. 13 digits — immutable, total, assigned at birth.",
    },
    coolingLabel: { ro: "serie", en: "series" },
    summary: {
      ro: "Decretul nr. 97/1978 introduce Codul Numeric Personal — un identificator unic, imuabil, atribuit la naștere și valabil toată viața. Pentru prima dată în istoria României, o persoană poate fi identificată univoc de orice instituție a statului prin același număr.",
      en: "Decree no. 97/1978 introduces the Personal Numeric Code — a unique, immutable identifier assigned at birth and valid for life. For the first time in Romanian history, a person can be univocally identified by any state institution through the same number.",
    },
    thesis: {
      ro: "Nu mai ești o persoană cu un nume — ești o serie cu 13 cifre. Numărul nu te cunoaște; te indexează.",
      en: "You are no longer a person with a name — you are a 13-digit series. The number does not know you; it indexes you.",
    },
    antithesis: {
      ro: "Fără un cod comun, sistemul nu poate garanta nimic. Nu poate plăti pensia corect, nu poate identifica pacientul, nu poate executa o hotărâre judecătorească. Numărul nu e un instrument de control — e dovada că dreptul tău depinde de verificabilitatea ta.",
      en: "Without a common code, the system cannot guarantee anything. It cannot pay the right pension, identify the patient, execute a court ruling. The number is not a control instrument — it is proof that your right depends on your verifiability.",
    },
    synthesis: {
      ro: "CNP-ul a rupt condiția cunoașterii: de atunci, e suficient să fii indexat.",
      en: "The personal ID number broke the condition of knowledge: since then, it is enough to be indexed.",
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
        ro: "CNP-ul devine identificatorul comun al infrastructurii publice: registre, dosare medicale, acte juridice, baze de date administrative.",
        en: "The personal ID number becomes the common identifier of public infrastructure: registries, medical records, legal documents, administrative databases.",
      },
    ],
    legalLayer: [
      {
        ro: "Decretul 97/1978 — instituie codul numeric personal: unic, imuabil, atribuit la naştere, valabil pe viață.",
        en: "Decree 97/1978 — establishes the personal numeric code: unique, immutable, assigned at birth, valid for life.",
      },
      {
        ro: "Decretul 97/1978 — obligă toate instituțiile statului să înregistreze şi să utilizeze CNP ca identificator primar.",
        en: "Decree 97/1978 — obliges all state institutions to record and use the personal ID as primary identifier.",
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
        ro: "Fără identificator unic, același om apare diferit în fiecare registru. Erorile generează injustiție. Codul numeric personal nu rezolvă o problemă de eficiență — rezolvă o problemă de justiție.",
        en: "Without a unique identifier, the same person appears differently in each register. Errors generate injustice. The personal numeric code does not solve an efficiency problem — it solves a justice problem.",
      },
    },
    rebelView: {
      title: { ro: "Reducerea la serie", en: "Reduction to a series" },
      body: {
        ro: "Numărul a desprins operabilitatea de cunoaștere. Poți fi procesat, corelat, executat fără să fi fost văzut vreodată. E prima infrastructură de operare la distanță.",
        en: "The number separated operability from knowledge. You can be processed, correlated, executed without ever having been seen. It is the first infrastructure for remote operation.",
      },
    },
    whyItMatters: {
      ro: "CNP-ul este cheia primară a infrastructurii publice române. Fiecare bază de date a statului din 2025 pornește de la un număr atribuit la naștere în 1978.",
      en: "The personal ID number is the primary key of Romanian public infrastructure. Every state database in 2025 starts from a number assigned at birth in 1978.",
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
    relatedIds: ["dot-evidenta-1949", "dot-forma-juridica-1990"],
    published: true,
  },

  // ─── DOT 5a: Forma juridică 1990 ────────────────────────────
  {
    id: "dot-forma-juridica-1990",
    slug: { ro: "libertatea-in-carcasa", en: "freedom-in-form" },
    title: {
      ro: "Libertatea în carcasă",
      en: "Freedom in form",
    },
    periodLabel: { ro: "1990", en: "1990" },
    sortYear: 1990,
    shortLine: {
      ro: "Unitatea de stat se rupe în regie autonomă și societate comercială.",
      en: "The state unit breaks into autonomous undertaking and commercial company.",
    },
    coolingLabel: { ro: "formă juridică", en: "legal form" },
    summary: {
      ro: "Prin Legea nr. 15/1990 și Legea nr. 31/1990, vechea unitate economică de stat este reorganizată în regii autonome și societăți comerciale. Societatea comercială devine persoană juridică prin înmatriculare. Persoana intră în noua ordine economică nu ca actor liber în spațiu gol, ci imediat încadrată în forme juridice precise: act constitutiv, registru, capital, asociat, răspundere.",
      en: "Through Law no. 15/1990 and Law no. 31/1990, the old state economic unit is reorganised into autonomous undertakings and commercial companies. A commercial company acquires legal personality through registration. The person enters the new economic order not as a free actor in empty space, but immediately framed in precise legal forms: constitutive act, registry, capital, associate, liability.",
    },
    thesis: {
      ro: "1990 deschide noua ordine prin mutația de formă: ierarhia nu cade, ci începe să opereze prin forma juridică constituită și înmatriculată.",
      en: "1990 opens the new order through the mutation of form: hierarchy does not fall, it begins to operate through constituted and registered legal form.",
    },
    antithesis: {
      ro: "Libertatea nu apare ca spațiu gol. Apare deja încadrată, clasificată și pusă în vehicule juridice precise. Nu ieși din vechea ordine în aer liber — intri imediat în regie, act constitutiv și registrul comerțului.",
      en: "Freedom does not appear as empty space. It appears already framed, classified and placed in precise legal vehicles. You do not exit the old order into open air — you enter immediately into an undertaking, constitutive act and trade registry.",
    },
    synthesis: {
      ro: "Cetățeanul nu dispare; devine insuficient. Persoana devine lizibilă și operabilă și ca actor economic formal constituit.",
      en: "The citizen does not disappear; it becomes insufficient. The person becomes legible and operable also as a formally constituted economic actor.",
    },
    factualLayer: [
      {
        ro: "Legea nr. 15/1990 — unitățile economice de stat se reorganizează, prin art. 1, în regii autonome sau societăți comerciale.",
        en: "Law no. 15/1990 — state economic units are reorganised, by art. 1, into autonomous undertakings or commercial companies.",
      },
      {
        ro: "Legea nr. 31/1990 — introduce formele societare (SNC, SCS, SA, SCA, SRL) și fixează că societatea dobândește personalitate juridică de la data înmatriculării în registrul comerțului.",
        en: "Law no. 31/1990 — introduces company forms (SNC, SCS, SA, SCA, SRL) and establishes that a company acquires legal personality from the date of registration in the trade registry.",
      },
      {
        ro: "Ambele legi sunt promulgate în temeiul Decretului-lege nr. 92/1990, anterior referendumului constituțional. Parlamentul funcționa simultan ca adunare legislativă și Adunare Constituantă.",
        en: "Both laws are promulgated under Decree-Law no. 92/1990, before the constitutional referendum. Parliament functioned simultaneously as legislative assembly and Constituent Assembly.",
      },
    ],
    legalLayer: [
      {
        ro: "Legea nr. 15/1990 + 1990 + reorganizează + unitățile economice de stat în regii autonome și societăți comerciale.",
        en: "Law no. 15/1990 + 1990 + reorganises + state economic units into autonomous undertakings and commercial companies.",
      },
      {
        ro: "Legea nr. 31/1990 + 1990 + înmatriculează + societatea comercială ca persoană juridică și fixează asocierea în formă opozabilă.",
        en: "Law no. 31/1990 + 1990 + registers + the commercial company as a legal person and fixes association in an opposable form.",
      },
    ],
    systemLayer: [
      {
        ro: "Registrul comerțului devine primul punct de vizibilitate economică a persoanei: actul constitutiv, asociații, capitalul și obiectul de activitate sunt publice și opozabile.",
        en: "The trade registry becomes the first point of economic visibility of the person: the constitutive act, associates, capital and object of activity are public and opposable.",
      },
      {
        ro: "Forma juridică devine condiție de acces: fără înmatriculare, activitatea economică nu produce efecte opozabile terților.",
        en: "Legal form becomes a condition of access: without registration, economic activity produces no effects opposable to third parties.",
      },
      {
        ro: "Ordinea economică devine lizibilă prin formă: statul, băncile și partenerii comerciali pot identifica, verifica și executa față de o entitate formalizată.",
        en: "The economic order becomes legible through form: the state, banks and commercial partners can identify, verify and enforce against a formalised entity.",
      },
    ],
    systemView: {
      title: { ro: "Infrastructura ordinii de piață", en: "Infrastructure of the market order" },
      body: {
        ro: "Fără forme juridice precise nu există piață funcțională. Regia și societatea comercială sunt vehiculele prin care capitalul, munca și răspunderea pot fi alocate, transferate și executate. Formele nu sunt birocrație — sunt condițiile de bază ale economiei private.",
        en: "Without precise legal forms there is no functioning market. The undertaking and the commercial company are the vehicles through which capital, labour and liability can be allocated, transferred and enforced. Forms are not bureaucracy — they are the basic conditions of the private economy.",
      },
    },
    rebelView: {
      title: { ro: "Libertatea vine în carcasă", en: "Freedom arrives in a casing" },
      body: {
        ro: "Ceea ce era prezentat ca eliberare economică venea deja formatat: regie, societate, act constitutiv, registru. Nu erai liber să exiști economic în afara formei. Libertatea nouă era disponibilă — dar numai dacă intrai în vehiculul juridic pregătit pentru tine.",
        en: "What was presented as economic liberation came already formatted: undertaking, company, constitutive act, registry. You were not free to exist economically outside of form. The new freedom was available — but only if you entered the legal vehicle prepared for you.",
      },
    },
    whyItMatters: {
      ro: "1990 este pragul în care libertatea economică devine disponibilă — dar numai prin formă juridică. Nu mai ești doar administrat; poți intra și ca actor economic formal constituit. Condiția: să exiști într-o formă pe care legea o recunoaște și o poate opera.",
      en: "1990 is the threshold at which economic freedom becomes available — but only through legal form. You are no longer only administered; you may also enter as a formally constituted economic actor. The condition: to exist in a form the law recognises and can operate.",
    },
    consequences: [
      {
        ro: "Registrul comerțului devine infrastructura de bază a economiei private: fără înmatriculare nu există persoană juridică, nu există cont bancar, nu există contract opozabil.",
        en: "The trade registry becomes the basic infrastructure of the private economy: without registration there is no legal person, no bank account, no opposable contract.",
      },
      {
        ro: "Ordinea economică devine trasabilă: statul, autoritățile fiscale și creditorii pot identifica și executa față de entități formalizate. Activitatea economică informală pierde orice protecție juridică.",
        en: "The economic order becomes traceable: the state, fiscal authorities and creditors can identify and enforce against formalised entities. Informal economic activity loses all legal protection.",
      },
    ],
    themeSlugs: ["identitate", "lege", "vizibilitate", "administratie"],
    legalRefIds: ["legea-15-1990", "legea-31-1990"],
    sourceIds: [],
    regimeId: "tranzitie",
    tags: ["forma-juridica", "societate", "regie", "inmatriculare", "tranzitie"],
    relatedIds: ["dot-cnp-1978", "dot-titlu-juridic-1991"],
    published: true,
  },

  // ─── DOT 5b: Titlul juridic 1991 ─────────────────────────────
  {
    id: "dot-titlu-juridic-1991",
    slug: { ro: "dreptul-intra-in-titlu", en: "right-enters-title" },
    title: {
      ro: "Dreptul intră în titlu",
      en: "Right enters title",
    },
    periodLabel: { ro: "1991", en: "1991" },
    sortYear: 1991,
    shortLine: {
      ro: "Dreptul nou se fixează prin cerere, titlu de proprietate și poziție juridică opozabilă.",
      en: "The new right is fixed through application, title deed and opposable legal position.",
    },
    coolingLabel: { ro: "titlu de proprietate", en: "title deed" },
    summary: {
      ro: "Prin Legea nr. 18/1991 și Constituția României din 1991, ordinea nouă deschisă în 1990 se stabilizează și se extinde: proprietatea privată primește regim de titlu, dreptul de proprietate se reconstituie la cerere, iar economia de piață și dubla structură a proprietății — publică și privată — sunt consacrate constituțional. În același interval, Legea nr. 28/1991 marchează și legarea ordinii interne de o infrastructură financiară internațională.",
      en: "Through Law no. 18/1991 and the 1991 Constitution of Romania, the new order opened in 1990 is stabilised and extended: private property receives a title regime, property rights are reconstituted upon application, and the market economy and the dual structure of property — public and private — are constitutionally enshrined. In the same interval, Law no. 28/1991 also marks the linking of the domestic order to an international financial infrastructure.",
    },
    thesis: {
      ro: "1991 stabilizează ordinea nouă prin titularizare: aceeași gramatică juridică coboară până în persoană ca titular identificabil al unei poziții opozabile.",
      en: "1991 stabilises the new order through titularisation: the same legal grammar descends into the person as the identifiable holder of an opposable position.",
    },
    antithesis: {
      ro: "Dreptul nu vine singur. El trebuie cerut, dovedit, fixat și recunoscut într-o formă care poate produce efecte juridice. Legea nr. 18/1991 spune explicit că stabilirea dreptului de proprietate se face la cerere. Cel care nu cere, nu dovedește, nu primește titlu — rămâne în afara ordinii juridice noi.",
      en: "The right does not come on its own. It must be requested, proven, fixed and recognised in a form capable of producing legal effects. Law no. 18/1991 states explicitly that the establishment of property rights is made upon application. Those who do not apply, do not prove, do not receive title — remain outside the new legal order.",
    },
    synthesis: {
      ro: "Persoana nu mai apare doar ca subiect abstract de drept, ci ca titular identificabil al unei poziții juridice formalizate: proprietar, creditor, debitor, asociat — poziții cu titlu, opozabile și executabile.",
      en: "The person no longer appears only as an abstract subject of law, but as an identifiable holder of a formalised legal position: owner, creditor, debtor, associate — positions with title, opposable and enforceable.",
    },
    factualLayer: [
      {
        ro: "Legea nr. 18/1991 — legea fondului funciar: reconstituie dreptul de proprietate asupra terenului la cerere, prin eliberarea unui titlu de proprietate.",
        en: "Law no. 18/1991 — the land fund law: reconstitutes property rights over land upon application, through the issuance of a title deed.",
      },
      {
        ro: "Constituția României, adoptată de Adunarea Constituantă la 21 noiembrie 1991, intrată în vigoare după referendumul din 8 decembrie 1991 — consacră proprietatea privată, economia de piață și dubla structură publică/privată a proprietății.",
        en: "The Romanian Constitution, adopted by the Constituent Assembly on 21 November 1991, entering into force after the referendum of 8 December 1991 — enshrines private property, the market economy and the dual public/private structure of property.",
      },
      {
        ro: "Legea nr. 28/1991 — România acceptă Statutul Corporației Financiare Internaționale (Grupul Băncii Mondiale), adoptată cu luni înainte de referendumul constituțional.",
        en: "Law no. 28/1991 — Romania accepts the Articles of Agreement of the International Finance Corporation (World Bank Group), adopted months before the constitutional referendum.",
      },
    ],
    legalLayer: [
      {
        ro: "Legea nr. 18/1991 + 1991 + stabilește + dreptul de proprietate asupra terenurilor la cerere, prin eliberarea unui titlu de proprietate.",
        en: "Law no. 18/1991 + 1991 + establishes + property rights over land upon application, through the issuance of a title deed.",
      },
      {
        ro: "Constituția României + 1991 + consacră + economia de piață și regimul proprietății publice și private ca gramatică a noii ordini.",
        en: "Romanian Constitution + 1991 + enshrines + the market economy and the regime of public and private property as the grammar of the new order.",
      },
      {
        ro: "Legea nr. 28/1991 + 1991 + acceptă + Statutul Corporației Financiare Internaționale — ordinea internă se leagă de infrastructura capitalului transnațional înainte de referendumul constituțional.",
        en: "Law no. 28/1991 + 1991 + accepts + the Articles of Agreement of the IFC — the domestic order ties itself to transnational capital infrastructure before the constitutional referendum.",
      },
    ],
    systemLayer: [
      {
        ro: "Proprietatea privată devine poziție juridică opozabilă: poate fi dovedită, apărată, transferată și executată silit.",
        en: "Private property becomes an opposable legal position: it can be proven, defended, transferred and enforced.",
      },
      {
        ro: "Cererea devine mecanism de acces la drept: cel care nu formulează cererea și nu dovedește îndreptățirea rămâne în afara redistribuirii.",
        en: "Application becomes the mechanism of access to rights: those who do not file an application and do not prove entitlement remain outside the redistribution.",
      },
      {
        ro: "Constituția închide forma deschisă în 1990: noua gramatică juridică nu mai e legislație tranzitorie — devine ordine constituțională.",
        en: "The Constitution closes the form opened in 1990: the new legal grammar is no longer transitional legislation — it becomes constitutional order.",
      },
    ],
    systemView: {
      title: { ro: "Consacrarea statului de drept", en: "Enshrinement of the rule of law" },
      body: {
        ro: "Constituția și titlul de proprietate nu sunt formalități — sunt infrastructura de bază a ordinii juridice. Fără consacrare constituțională, drepturile noi rămân fragile, revocabile, dependente de voința legislativă a momentului. Titlul nu e hârtie — e certitudine juridică.",
        en: "The Constitution and the property title are not formalities — they are the basic infrastructure of the legal order. Without constitutional enshrinement, new rights remain fragile, revocable, dependent on the legislative will of the moment. The title is not paper — it is legal certainty.",
      },
    },
    rebelView: {
      title: { ro: "Dreptul nu vine singur", en: "The right does not come on its own" },
      body: {
        ro: "1991 nu distribuie drepturi — administrează accesul la ele. Dreptul de proprietate există dacă ai cerut, ai dovedit și ai primit titlu. Constituția garantează proprietatea, nu și faptul că o ai. Gramatica nouă e și mai clară acum: dreptul e real numai dacă ai intrat în formatul lui.",
        en: "1991 does not distribute rights — it administers access to them. Property rights exist if you have applied, proven and received title. The Constitution guarantees property, not the fact that you have it. The new grammar is even clearer now: the right is real only if you have entered its format.",
      },
    },
    whyItMatters: {
      ro: "1991 este pragul în care ordinea deschisă în 1990 se fixează: proprietatea privată prinde titlu, economia de piață prinde Constituție, iar persoana intră în noua ordine ca titular identificabil al unei poziții juridice. Același limbaj de ordonare se răsfrânge acum integral în persoană, patrimoniu și titlu.",
      en: "1991 is the threshold at which the order opened in 1990 becomes fixed: private property acquires title, the market economy acquires a Constitution, and the person enters the new order as an identifiable holder of a legal position. The same ordering language now fully reflects itself in person, patrimony and title.",
    },
    consequences: [
      {
        ro: "Titlul de proprietate devine document de bază al relației cu statul, băncile și piața imobiliară. Fără titlu nu există ipotecă, nu există credit, nu există transfer opozabil.",
        en: "The title deed becomes the basic document in the relationship with the state, banks and the real estate market. Without title there is no mortgage, no credit, no opposable transfer.",
      },
      {
        ro: "Constituția stabilizează mutațiile din 1990–1991: ele nu mai pot fi revocate prin lege ordinară. Noua ordine economică și juridică primește protecție constituțională.",
        en: "The Constitution stabilises the mutations of 1990–1991: they can no longer be revoked by ordinary law. The new economic and legal order receives constitutional protection.",
      },
    ],
    themeSlugs: ["identitate", "proprietate", "lege", "vizibilitate"],
    legalRefIds: ["legea-18-1991", "constitutia-1991", "legea-28-1991"],
    sourceIds: [],
    regimeId: "tranzitie",
    tags: ["titlu", "proprietate", "cerere", "constitutie", "tranzitie"],
    relatedIds: ["dot-forma-juridica-1990", "dot-rnep-2005"],
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
    periodLabel: { ro: "2004–2005", en: "2004–2005" },
    sortYear: 2004,
    endYear: 2005,
    shortLine: {
      ro: "N dosare separate devin un singur profil. Fără știrea ta.",
      en: "N separate files become a single profile. Without your knowledge.",
    },
    coolingLabel: { ro: "interoperabilitate", en: "interoperability" },
    summary: {
      ro: "Legea 290/2004 creează Registrul Național de Evidență a Persoanelor — o bază de date unificată care conectează toate înregistrările anterioare prin CNP. Nu mai sunt dosare separate — acum există un profil digital unic, accesibil instituțiilor autorizate ale statului.",
      en: "Law 290/2004 creates the National Register of Population Records — a unified database that connects all previous records through the personal ID number. There are no longer separate files — now there is a single digital profile, accessible to authorised state institutions.",
    },
    thesis: {
      ro: "RNEP nu e un serviciu — e o infrastructură de control. Datele tale sunt acum accesibile oricărei instituții autorizate, fără ca tu să știi când și de ce.",
      en: "RNEP is not a service — it is a control infrastructure. Your data is now accessible to any authorized institution, without you knowing when and why.",
    },
    antithesis: {
      ro: "Birocrația ucide prin fricțiune. Fiecare act care trebuie copiat, certificat, tradus și depus din nou e o barieră pentru cetățeni și o sursă de corupție. Interoperabilitatea nu e control — e eliminarea unei forme de violență administrativă cotidiene.",
      en: "Bureaucracy kills through friction. Every document that must be copied, certified, translated and re-filed is a barrier for citizens and a source of corruption. Interoperability is not control — it is the elimination of a form of daily administrative violence.",
    },
    synthesis: {
      ro: "Nu mai ești în N dosare separate. Ești un singur profil corelat.",
      en: "You are no longer in N separate files. You are a single correlated profile.",
    },
    factualLayer: [
      {
        ro: "Legea 290/2004 creează RNEP — Registrul Național de Evidență a Persoanelor.",
        en: "Law 290/2004 creates the RNEP — National Register of Population Records.",
      },
      {
        ro: "Informatizarea Ministerului de Interne — digitalizarea tuturor evidențelor de stare civilă și domiciliu.",
        en: "Digitization of the Ministry of Internal Affairs — digitalization of all civil status and address records.",
      },
      {
        ro: "Cărțile de identitate emise din 2001 conțin date digitale citibile de mașini — precondiție tehnică pentru interoperabilitatea RNEP.",
        en: "Identity cards issued from 2001 contain machine-readable digital data — a technical precondition for RNEP interoperability.",
      },
    ],
    legalLayer: [
      {
        ro: "Legea 677/2001 — introduce cadrul legal pentru prelucrarea datelor personale şi condiționează accesul instituțional.",
        en: "Law 677/2001 — introduces the legal framework for personal data processing and conditions institutional access.",
      },
      {
        ro: "Legea 290/2004 — instituie Registrul Național de Evidență a Persoanelor ca bază de date unificată a populației.",
        en: "Law 290/2004 — establishes the National Population Register as the unified database of the population.",
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
        ro: "Statul eficient nu cere cetățeanului să îi poarte datele de la o instituție la alta. Interoperabilitatea e condiția de bază pentru servicii publice reale — nu o facilitate tehnică, ci o datorie administrativă.",
        en: "An efficient state does not ask citizens to carry their own data from one institution to another. Interoperability is the basic condition for real public services — not a technical feature, but an administrative duty.",
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
    legalRefIds: ["legea-677-2001", "legea-rnep-2004"],
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
    periodLabel: { ro: "2021–2026", en: "2021–2026" },
    sortYear: 2021,
    shortLine: {
      ro: "Nu mai trebuie să dovedești cine ești — poți fi accesat și operat digital.",
      en: "You no longer need to prove who you are — you can be accessed and operated digitally.",
    },
    coolingLabel: { ro: "operabilitate la distanță", en: "remote operability" },
    summary: {
      ro: "Cartea de identitate electronică (CEI), eID-ul și portofelul digital european (eIDAS 2.0) fuzionează identitatea fizică cu cea digitală. Persoana devine un nod în rețeaua de sisteme interoperabile europene. Autentificarea biometrică, semnătura electronică și credențialele digitale creează un nou strat de lizibilitate: distanță zero.",
      en: "The electronic identity card (CEI), eID and the European digital wallet (eIDAS 2.0) fuse physical with digital identity. The person becomes a node in the network of interoperable European systems. Biometric authentication, electronic signature and digital credentials create a new layer of legibility: zero distance.",
    },
    thesis: {
      ro: "Identitatea digitală nu e un serviciu — e o infrastructură de operabilitate. Cu eID-ul poți fi procesat, verificat și executat fără prezență fizică, fără hârtii, fără martor.",
      en: "Digital identity is not a service — it is an operability infrastructure. With eID you can be processed, verified and executed without physical presence, without papers, without witness.",
    },
    antithesis: {
      ro: "Corupția la ghișeu trăiește din asimetria de informație: funcționarul știe mai mult decât tine și profită de asta. Identitatea digitală elimină ghișeul. Elimină discreția, negocierea, intermediarul. Dacă asta înseamnă mai puțin spațiu pentru abuz, atunci vizibilitatea e și un instrument de protecție.",
      en: "Counter corruption lives on information asymmetry: the official knows more than you and profits from that. Digital identity eliminates the counter. It eliminates discretion, negotiation, the intermediary. If that means less space for abuse, then visibility is also a protection instrument.",
    },
    synthesis: {
      ro: "CEI a rupt condiția prezenței fizice: identitatea ta poate fi procesată fără să fii prezent.",
      en: "The electronic ID broke the condition of physical presence: your identity can be processed without you being present.",
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
        ro: "OUG 97/2005 (republicată) — stabileşte regimul național al documentelor de identitate electronice ale cetățenilor.",
        en: "GEO 97/2005 (republished) — sets the national regime for electronic identity documents of citizens.",
      },
      {
        ro: "Regulamentul UE 910/2014 eIDAS — consacră identificarea electronică şi serviciile de încredere ca instrumente juridice recunoscute.",
        en: "EU Regulation 910/2014 eIDAS — enshrines electronic identification and trust services as recognised legal instruments.",
      },
      {
        ro: "Regulamentul UE 2024/1183 eIDAS 2.0 — instituie portofelul digital european ca infrastructură comună de identitate, obligatorie din 2026.",
        en: "EU Regulation 2024/1183 eIDAS 2.0 — establishes the European digital wallet as a common identity infrastructure, mandatory from 2026.",
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
        ro: "Acum poți fi și operat digital. Procesul care a început cu recensământul din 1838 a ajuns la o primă formă completă: ești nu doar vizibil, ci și la distanță zero față de sistem. Prezența fizică nu mai e necesară nici pentru a fi servit, nici pentru a fi executat.",
        en: "Now you can also be operated digitally. The process that began with the 1838 census has reached a first complete form: you are not just visible, but at zero distance from the system. Physical presence is no longer necessary to be served — or to be executed.",
      },
    },
    whyItMatters: {
      ro: "Portofelul digital european (eIDAS 2.0) intră în faza de implementare obligatorie din 2026. Cetățenii UE intră treptat într-un cadru comun de identitate interoperabilă. Nu e o predicție — e un calendar.",
      en: "The European digital wallet (eIDAS 2.0) enters mandatory implementation from 2026. EU citizens gradually move into a shared interoperable identity framework. This is not a prediction — it is a calendar.",
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
    legalRefIds: ["oug-97-2005", "eidas-910-2014", "eidas-2-2024"],
    sourceIds: [],
    regimeId: "digital",
    tags: ["eID", "CEI", "eIDAS", "identitate-digitala", "biometric"],
    relatedIds: ["dot-rnep-2005", "dot-cnp-1978"],
    published: true,
  },
];
