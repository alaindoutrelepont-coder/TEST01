import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  Globe, 
  Settings, 
  Laptop, 
  ShieldCheck, 
  ExternalLink, 
  Info,
  GraduationCap,
  Users,
  LayoutDashboard,
  Sparkles,
  Brain,
  MessageSquare,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Step {
  id: number;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleStep = (id: number) => {
    if (completedSteps.includes(id)) {
      setCompletedSteps(completedSteps.filter(s => s !== id));
    } else {
      setCompletedSteps([...completedSteps, id]);
    }
  };

  const steps: Step[] = [
    {
      id: 0,
      title: "Introduction",
      icon: <BookOpen className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="prose prose-neutral max-w-none">
            <h2 className="text-2xl font-display font-bold text-secondary-dark">Google for Education : Explication générale</h2>
            <p className="text-secondary leading-relaxed">
              Google for Education se compose de différentes solutions et piliers essentiels pour transformer l'apprentissage numérique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Workspace Fundamentals",
                desc: "Suite gratuite d'outils de productivité et de collaboration sécurisée.",
                icon: <GraduationCap className="text-secondary" />,
                link: "https://edu.google.com/intl/ALL_be/workspace-for-education/editions/compare-editions/"
              },
              {
                title: "Chromebooks",
                desc: "Ordinateurs portables légers et sécurisés conçus pour l'éducation.",
                icon: <Laptop className="text-blue-600" />,
                link: "https://edu.google.com/intl/ALL_be/chromebooks/overview/"
              },
              {
                title: "Chrome Education Upgrade",
                desc: "Licence MDM pour gérer et contrôler les appareils de votre école.",
                icon: <ShieldCheck className="text-purple-600" />,
                link: "https://support.google.com/chrome/a/answer/1289314?hl=fr&sjid=14879271223720165918-EU"
              },
              {
                title: "Console d'administration",
                desc: "Outil centralisé pour gérer utilisateurs et appareils.",
                icon: <LayoutDashboard className="text-primary-dark" />,
                link: "https://knowledge.workspace.google.com/admin/getting-started/sign-in-to-your-admin-console?hl=fr"
              }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl border border-secondary/10 bg-secondary/5 hover:bg-white hover:shadow-sm transition-all group">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white shadow-sm">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-secondary-dark">{item.title}</h3>
                    <p className="text-sm text-secondary/70 mt-1">{item.desc}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-primary-dark mt-2 hover:underline">
                      En savoir plus <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl flex gap-3">
            <Info className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
            <p className="text-sm text-secondary-dark">
              <strong>Note :</strong> <a href="https://chromeos.google/intl/fr_fr/products/chromeos-flex/" target="_blank" rel="noopener noreferrer" className="text-primary-dark hover:underline font-semibold">ChromeOS Flex</a> permet également de prolonger la vie de PC/MAC devenus obsolètes en les transformant en Chromebooks.
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-lg font-display font-bold text-secondary-dark mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-dark" />
              Intelligence Artificielle pour l'Éducation
            </h3>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex gap-3 mb-6">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-secondary-dark">
                <strong>Protection des données :</strong> Bien que les outils d'IA de Google soient extrêmement performants, il est essentiel de les utiliser au sein de <strong>Google Workspace for Education</strong>. Cela garantit que vos données ne sont pas utilisées pour entraîner les modèles et restent protégées par les contrats de confidentialité scolaire.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Gemini",
                  desc: "L'assistant IA de Google pour booster la créativité et la productivité des enseignants et élèves.",
                  icon: <Sparkles className="text-indigo-600" />,
                  link: "https://gemini.google.com/"
                },
                {
                  title: "Gems",
                  desc: "Créez des versions personnalisées de Gemini pour des tâches spécifiques (ex: tuteur, correcteur).",
                  icon: <Users className="text-pink-600" />,
                  link: "https://gemini.google/ch/overview/gems/?hl=fr"
                },
                {
                  title: "NotebookLM",
                  desc: "Un assistant de recherche intelligent qui utilise vos propres documents comme source.",
                  icon: <Brain className="text-blue-600" />,
                  link: "https://notebooklm.google.com/"
                }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-secondary/10 bg-white hover:shadow-sm transition-all">
                  <div className="flex flex-col gap-2">
                    <div className="p-2 w-fit rounded-lg bg-secondary/5">{item.icon}</div>
                    <h4 className="font-bold text-secondary-dark text-sm">{item.title}</h4>
                    <p className="text-xs text-secondary/70 leading-relaxed">{item.desc}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-primary-dark mt-2 hover:underline">
                      Découvrir <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Étape 1 : Mise en route",
      icon: <Globe className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-bold text-secondary-dark">Avez-vous déjà un nom de domaine pour l'école ?</h2>
          
          <div className="space-y-4">
            <div className="p-5 rounded-xl border-2 border-secondary/10 bg-white">
              <h3 className="font-bold text-lg flex items-center gap-2 text-secondary-dark">
                <span className="w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-xs">NON</span>
                Je n'ai pas de domaine
              </h3>
              <p className="text-secondary mt-2 text-sm leading-relaxed">
                Il faut choisir un nom de domaine et un fournisseur. Vous pouvez l'acheter directement chez Google lors de votre inscription pour une validation automatique, ou passer par un fournisseur tiers.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="https://www.infomaniak.com/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-secondary/10 rounded-full text-xs font-medium text-secondary hover:bg-secondary/20 transition-colors">Infomaniak</a>
                <a href="https://www.gandi.net/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-secondary/10 rounded-full text-xs font-medium text-secondary hover:bg-secondary/20 transition-colors">Gandi.net</a>
                <a href="https://www.ovhcloud.com/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-secondary/10 rounded-full text-xs font-medium text-secondary hover:bg-secondary/20 transition-colors">OVH</a>
                <a href="https://www.godaddy.com/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-secondary/10 rounded-full text-xs font-medium text-secondary hover:bg-secondary/20 transition-colors">GoDaddy</a>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 border-primary/20 bg-primary/5">
              <h3 className="font-bold text-lg flex items-center gap-2 text-secondary-dark">
                <span className="w-6 h-6 rounded-full bg-primary text-secondary-dark flex items-center justify-center text-xs">OUI</span>
                J'ai déjà un domaine
              </h3>
              <p className="text-secondary mt-2 text-sm">
                Parfait ! Vous pouvez passer directement à l'étape suivante pour l'ouverture de votre compte Workspace.
              </p>
              <button 
                onClick={() => setActiveStep(2)}
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-dark hover:gap-3 transition-all"
              >
                Passer à l'étape 2 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Étape 2 : Ouverture du compte",
      icon: <CheckCircle2 className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-bold text-secondary-dark">Demande Google Workspace for Education</h2>
          
          <div className="space-y-6">
            <div className="relative pl-8 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5 before:bg-secondary/20">
              <div className="space-y-8">
                <section className="relative">
                  <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-primary text-secondary-dark flex items-center justify-center text-xs font-bold">1</div>
                  <h3 className="font-bold text-secondary-dark">Inscription initiale</h3>
                  <p className="text-sm text-secondary mt-1">Remplissez le formulaire de demande officielle.</p>
                  <div className="mt-3 flex gap-3">
                    <a href="https://workspace.google.com/edu/signup?hl=fr" target="_blank" rel="noopener noreferrer" className="link-btn">
                      Lien d'inscription <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href="https://youtu.be/w11UhlV1f2I?si=U8p7_nV3uf1ZngRY" target="_blank" rel="noopener noreferrer" className="link-btn">
                      Tutoriel vidéo <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </section>

                <section className="relative">
                  <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-primary text-secondary-dark flex items-center justify-center text-xs font-bold">2</div>
                  <h3 className="font-bold text-secondary-dark">Preuve d'établissement scolaire</h3>
                  <p className="text-sm text-secondary mt-1">
                    Vous recevrez un email pour prouver que vous êtes une école. Envoyez le lien vers votre établissement dans l'annuaire officiel.
                  </p>
                  <div className="mt-3">
                    <a href="http://www.enseignement.be/index.php?page=23836" target="_blank" rel="noopener noreferrer" className="link-btn">
                      Annuaire officiel FWB <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-xs text-secondary/60 mt-2 italic">Délai moyen : jusqu'à 3 semaines.</p>
                </section>

                <section className="relative">
                  <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-primary text-secondary-dark flex items-center justify-center text-xs font-bold">3</div>
                  <h3 className="font-bold text-secondary-dark">Finalisation</h3>
                  <p className="text-sm text-secondary mt-1">Une fois la demande finalisée, complétez le formulaire de suivi.</p>
                  <div className="mt-3">
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfdx0scA4OJ7DHDrB3EOKwt2ZTLBRs3M4clZfeJndlRLjAyfg/viewform?usp=sharing&ouid=105688004383899805791" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="link-btn"
                    >
                      Formulaire de suivi <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Étape 3 : Validation du domaine",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-bold text-secondary-dark">Valider la propriété du nom de domaine</h2>
          
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3">
            <Info className="w-5 h-5 text-amber-600 shrink-0" />
            <p className="text-sm text-amber-800">
              Si vous avez acheté votre domaine chez Google lors de l'inscription, cette étape est automatique.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-secondary">Si vous possédez déjà un domaine, suivez ces étapes :</p>
            <ol className="list-decimal list-inside space-y-3 text-secondary-dark text-sm">
              <li>Identifiez votre hébergeur (utilisez <a href="https://who.is/" target="_blank" className="text-primary-dark underline">WHOIS</a> si besoin).</li>
              <li>Connectez-vous à votre console d'hébergement.</li>
              <li>Ajoutez l'enregistrement TXT ou CNAME fourni par Google.</li>
            </ol>
            <div className="pt-4 flex gap-3">
              <a href="https://support.google.com/a/topic/1409901" target="_blank" rel="noopener noreferrer" className="link-btn">
                Aide en ligne Google <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/watch?v=Qf0y_wAaup0" target="_blank" rel="noopener noreferrer" className="link-btn">
                Vidéo explicative <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <p className="text-sm text-indigo-900">
              <span className="font-bold">Félicitations !</span> À la fin de cette étape, votre environnement Google Workspace est fonctionnel. Les étapes suivantes servent à vous accompagner dans la prise en main de l'écosystème Google for Education.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Étape 4 : Configuration de base",
      icon: <Settings className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-bold text-secondary-dark">Console d'administration</h2>
          <p className="text-secondary">
            Même sans Chromebooks, vous pouvez déjà configurer votre environnement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { 
                title: "Unités (UO)", 
                desc: "Structurez votre école (Profs, Élèves, Admin).", 
                icon: <Users className="w-5 h-5" />,
                link: "https://www.google.com/url?q=https://admin.google.com/ac/orgunits&sa=D&source=docs&ust=1773248075958530&usg=AOvVaw1Dgvl7HISPcRMu-QQWYzKV"
              },
              { 
                title: "Utilisateurs", 
                desc: "Créez les comptes nominatifs.", 
                icon: <CheckCircle2 className="w-5 h-5" />,
                link: "https://accounts.google.com/v3/signin/challenge/pwd?TL=AHU8sQuq4-7nUsLd2iJuJzERilkUWe6WaC0a606HpSgIsRRpLQvyycusH6b-rNls&authuser=0&cid=2&continue=https%3A%2F%2Fadmin.google.com%2Fac%2Fusers&dsh=S-284249966%3A1773244793375150&flowName=GlifWebSignIn&ifkv=ASfE1-oLKvZQ1KYYFZBKpgiVSyFCX3YFfobNX-ggmmgIphgv82fKsmrO12fcmgjUCbWRJqnFK_JdbA&osid=1&rart=ANgoxccIIrGeOuTScu62ixHWP2zXWB8yxc1-TznjsK702_m7myXfSblYzmjaz5oQS1pMRc17UgP1gzMFfh8hLBxEGkeSNfpzfQwjpoBzGRuBr0_0DMHr1Aw&rpbg=1&sarp=1"
              },
              { 
                title: "Groupes", 
                desc: "Gérez les listes de diffusion.", 
                icon: <Users className="w-5 h-5" />,
                link: "https://admin.google.com/ac/groups"
              }
            ].map((item, i) => {
              const CardContent = (
                <>
                  <div className="text-primary-dark mb-2">{item.icon}</div>
                  <h4 className="font-bold text-secondary-dark text-sm">{item.title}</h4>
                  <p className="text-xs text-secondary/70 mt-1">{item.desc}</p>
                </>
              );

              if (item.link) {
                return (
                  <a 
                    key={i} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-secondary/10 bg-white hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group"
                  >
                    {CardContent}
                    <div className="mt-2 text-[10px] font-bold text-primary-dark opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Ouvrir la console <ExternalLink className="w-2 h-2" />
                    </div>
                  </a>
                );
              }

              return (
                <div key={i} className="p-4 rounded-xl border border-secondary/10 bg-white">
                  {CardContent}
                </div>
              );
            })}
          </div>

          <div className="p-5 rounded-xl bg-secondary-dark text-white">
            <h3 className="font-bold flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Carnet de bord
            </h3>
            <p className="text-secondary/50 text-sm mt-2">
              Utilisez notre carnet de bord pour suivre vos configurations.
            </p>
            <a 
              href="https://docs.google.com/spreadsheets/d/1p3m4iIlvchRmpLIDi4FharntIKeYCjSkK-p9ca1DADA/copy?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-primary text-secondary-dark hover:bg-primary-dark rounded-lg text-sm font-bold transition-colors"
            >
              Faire une copie du carnet
            </a>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Étape 5 : Chromebooks & MDM",
      icon: <Laptop className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-bold text-secondary-dark">Gestion des appareils</h2>
          
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-primary bg-white shadow-sm">
              <h3 className="font-bold text-secondary-dark">Enrôlement automatique</h3>
              <p className="text-sm text-secondary mt-1">
                Votre fournisseur aura besoin d'un <strong>jeton d'enregistrement</strong>.
              </p>
              <a 
                href="https://admin.google.com/ac/chrome/chrome-os-tokens?journey=218&ac_ouid=03ph8a2z1fseygc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-xs bg-secondary/5 p-3 rounded font-mono text-secondary-dark hover:bg-primary/10 hover:text-primary-dark transition-colors border border-transparent hover:border-primary/20"
              >
                Menu : Appareils &gt; Chrome &gt; Appareils &gt; Générer un jeton
              </a>
              <div className="mt-3 flex items-start gap-2 text-xs bg-amber-50 border border-amber-200 text-amber-800 p-3 rounded-lg">
                <Info className="w-4 h-4 mt-0.5 shrink-0 text-amber-600" />
                <p>
                  <span className="font-bold uppercase text-[10px] tracking-wider block mb-1">Note importante</span>
                  Générez le jeton dans l'Unité Organisationnelle (UO) où vous souhaitez que les Chromebooks soient automatiquement rangés.
                </p>
              </div>
            </div>

            <div className="p-4 border-l-4 border-blue-500 bg-white shadow-sm">
              <h3 className="font-bold text-secondary-dark">Licences Chrome Education</h3>
              <p className="text-sm text-secondary mt-1">
                Pour vérifier le nombre de licences, choisissez une UO dans le menu <a href="https://admin.google.com/ac/chrome/devices/?journey=218&ac_ouid=03ph8a2z1fseygc&sf=2&so=2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">appareil</a> puis cliquez sur Licences.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <a href="https://support.google.com/chrome/a/answer/1360534" target="_blank" rel="noopener noreferrer" className="link-btn">
              Guide d'enrôlement <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Pour aller plus loin",
      icon: <GraduationCap className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-bold text-secondary-dark">Ressources et Communauté</h2>
          
          <div className="overflow-hidden rounded-xl border border-secondary/20">
            <table className="w-full text-sm text-left">
              <thead className="bg-secondary/5 text-secondary font-medium">
                <tr>
                  <th className="px-4 py-3">Sujet</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary/10">
                {[
                  { label: "GEG Belgique Francophone", link: "https://sites.google.com/edunum.be/geg-fwb/accueil" },
                  { label: "Certifications", link: "https://edu.google.com/learning-center/certifications/" },
                  { label: "Formations gratuites", link: "https://edu.google.com/intl/ALL_fr/resources/get-started/professional-development/" },
                  { label: "Accessibilité Chromebook", link: "https://support.google.com/chromebook/answer/177893" },
                  { label: "Guide Cybersécurité", link: "https://services.google.com/fh/files/misc/k12cybersecurityguide_fr.pdf" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-secondary/5 transition-colors">
                    <td className="px-4 py-3 font-medium text-secondary-dark">{row.label}</td>
                    <td className="px-4 py-3">
                      <a href={row.link} target="_blank" rel="noopener noreferrer" className="text-primary-dark hover:underline flex items-center gap-1">
                        Ouvrir <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded-2xl bg-primary text-secondary-dark text-center">
            <h3 className="text-xl font-bold">Besoin d'aide personnalisée ?</h3>
            <p className="mt-2 opacity-90">Contactez Alain Doutrelepont</p>
            <a href="mailto:alain@edunum.be" className="mt-4 inline-block px-6 py-2 bg-secondary-dark text-white rounded-full font-bold hover:bg-secondary transition-colors">
              alain@edunum.be
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-secondary/20 p-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-secondary-dark">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="font-display font-bold text-secondary-dark">EduNum Guide</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-secondary">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-0 z-40 md:relative md:z-0
        bg-white border-r border-secondary/20 w-full md:w-80 shrink-0
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          <div className="p-6 hidden md:block">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-secondary-dark shadow-lg shadow-primary/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h1 className="font-display font-bold text-xl text-secondary-dark">EduNum</h1>
            </div>
            <p className="text-xs text-secondary font-medium uppercase tracking-wider">Guide Google for Education</p>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStep(idx);
                  setIsSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left
                  ${activeStep === idx 
                    ? 'sidebar-item-active' 
                    : 'text-secondary hover:bg-secondary/5 hover:text-secondary-dark'}
                `}
              >
                <div className={`
                  shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                  ${activeStep === idx ? 'sidebar-icon-active' : 'bg-secondary/10 text-secondary'}
                `}>
                  {completedSteps.includes(step.id) ? <CheckCircle2 className="w-5 h-5" /> : step.icon}
                </div>
                <span className="text-sm font-semibold truncate">{step.title}</span>
                {activeStep === idx && <ChevronRight className="w-4 h-4 ml-auto" />}
              </button>
            ))}
          </nav>

          <div className="p-6 border-t border-secondary/10 bg-secondary/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-secondary uppercase">Progression</span>
              <span className="text-xs font-bold text-primary-dark">{Math.round((completedSteps.length / steps.length) * 100)}%</span>
            </div>
            <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-secondary/5 p-4 md:p-10">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="step-card"
            >
              {steps[activeStep].content}

              <div className="mt-10 pt-6 border-t border-secondary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => toggleStep(steps[activeStep].id)}
                  className={`
                    w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all
                    ${completedSteps.includes(steps[activeStep].id)
                      ? 'bg-primary/20 text-secondary-dark'
                      : 'bg-secondary-dark text-white hover:bg-secondary'}
                  `}
                >
                  {completedSteps.includes(steps[activeStep].id) ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Étape complétée
                    </>
                  ) : (
                    "Marquer comme terminé"
                  )}
                </button>

                <div className="flex gap-2 w-full sm:w-auto">
                  {activeStep > 0 && (
                    <button
                      onClick={() => setActiveStep(activeStep - 1)}
                      className="flex-1 sm:flex-none px-6 py-3 bg-white border border-secondary/20 text-secondary rounded-xl font-bold hover:bg-secondary/5 transition-all"
                    >
                      Précédent
                    </button>
                  )}
                  {activeStep < steps.length - 1 && (
                    <button
                      onClick={() => setActiveStep(activeStep + 1)}
                      className="flex-1 sm:flex-none primary-btn"
                    >
                      Suivant
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <footer className="mt-10 text-center text-secondary/50 text-xs">
            <p>© 2026 Guide Google for Education - Créé par Louise Van Lint & Alain Doutrelepont</p>
            <p className="mt-1">Cette application est un guide interactif basé sur le mode d'emploi officiel.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
