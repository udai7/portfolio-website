import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "MongoDB.png",
    "azure.svg",
    "git.svg",
    "Scikit.png",
    "javascript.svg",
    "react.svg",
    "sqlite.svg",
    "nodejs.svg",
    "Cloudflare_Logo.png",
    "python.png",
    "TensorFlow.png",
    "postgres.png",
    "huggingface.png",
    "docker.png",
    "kubernetes.png",
    "chroma.png",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
