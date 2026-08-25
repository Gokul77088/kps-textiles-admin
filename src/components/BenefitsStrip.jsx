import { Flower2, Leaf, Heart, Truck, ShieldCheck, Globe2 } from "lucide-react"

const benefits = [
  {
    icon: Flower2,
    title: "Pure Handloom",
    description: "Authentic & Original",
  },
  {
    icon: Leaf,
    title: "Natural Dyes",
    description: "Fabric Friendly",
  },
  {
    icon: Globe2,
    title: "Sustainable Fashion",
    description: "Better for Planet",
  },
  {
    icon: Heart,
    title: "Made in Chinthamaniyur",
    description: "Proudly Indian",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "100% Safe & Secure",
  },
  {
    icon: Truck,
    title: "Worldwide Shipping",
    description: "Delivering Happiness",
  },
]

function BenefitItem({ benefit }) {
  const Icon = benefit.icon

  return (
    <div className="benefit-item">
      <div className="benefit-icon">
        <Icon size={25} strokeWidth={1.5} />
      </div>

      <div className="benefit-content">
        <h3>{benefit.title}</h3>
        <p>{benefit.description}</p>
      </div>
    </div>
  )
}

function BenefitsStrip() {
  return (
    <section className="benefits-strip">
      <div className="benefits-container">
        <div className="benefits-track">
          {benefits.map((benefit) => (
            <BenefitItem key={benefit.title} benefit={benefit} />
          ))}

          <div className="benefits-mobile-copy">
            {benefits.map((benefit) => (
              <BenefitItem key={`copy-${benefit.title}`} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsStrip;
