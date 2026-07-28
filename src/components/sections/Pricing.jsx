import { useState } from "react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    id: "starter",
    name: "Starter Edge",
    monthlyPrice: 129,
    annualPrice: 103,
    description: "For teams building their first intelligent edge deployments",
    badge: null,
    accentColor: "#8800BB",
    accentGlow: "rgba(136,0,187,0.5)",
    features: [
      "Up to 25 connected edge devices",
      "Basic device fleet management",
      "AI model deployment tools",
      "Edge performance monitoring",
      "Sensor data visualization",
      "Standard API access",
      "Community support",
    ],
    ctaText: "Get Started",
    ctaStyle: "border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
    ctaLink: "#contact",
  },
  {
    id: "enterprise",
    name: "Enterprise Edge",
    monthlyPrice: 299,
    annualPrice: 239,
    description: "For organizations managing large-scale AI-powered operations",
    badge: "Most Popular",
    accentColor: "#D414FF",
    accentGlow: "rgba(212,20,255,0.6)",
    features: [
      "Up to 500 connected edge devices",
      "Advanced fleet orchestration",
      "Computer vision analytics",
      "Real-time AI workload management",
      "Device health monitoring",
      "Advanced dashboards & reporting",
      "Priority technical support",
      "Enterprise integrations",
    ],
    ctaText: "Choose Enterprise",
    ctaStyle: "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_20px_rgba(212,20,255,0.4)] hover:shadow-[0_0_30px_rgba(212,20,255,0.7)]",
    ctaLink: "#contact",
  },
  {
    id: "autonomous",
    name: "Autonomous Edge",
    monthlyPrice: null,
    annualPrice: null,
    description: "For global infrastructure requiring unlimited scalability",
    badge: null,
    accentColor: "#4A00E0",
    accentGlow: "rgba(74,0,224,0.5)",
    features: [
      "Unlimited device fleet management",
      "Custom AI deployment workflows",
      "Multi-location edge operations",
      "Dedicated infrastructure support",
      "Custom API & SDK integrations",
      "Advanced security controls",
      "Private deployment options",
      "Dedicated enterprise success team",
    ],
    ctaText: "Contact Sales",
    ctaStyle: "border border-secondary/50 text-white hover:bg-secondary/20 hover:border-secondary",
    ctaLink: "#contact",
  },
];

function CheckIcon({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="relative py-24 border-t border-white/5 bg-transparent overflow-hidden" id="pricing">

      {/* Background glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] -translate-y-1/2 -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 pointer-events-none" />

      {/* Background diagonal lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none -z-10">
        <svg width="100%" height="100%">
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="rgba(212,20,255,0.3)" strokeWidth="1" />
          <line x1="10%" y1="100%" x2="100%" y2="10%" stroke="rgba(74,0,224,0.15)" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Bounding Box */}
        <div className="relative w-full border border-primary/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm bg-background/60 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden moving-border">

          {/* Section Header */}
          <div className="text-center mb-14 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,20,255,0.8)]" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(212,20,255,0.3)]">
              Flexible Plans for Intelligent<br className="hidden md:block" /> Edge Operations
            </h2>
            <p className="text-white/50 text-sm max-w-xl text-center leading-relaxed">
              Scale from a single intelligent device to a global edge network with infrastructure designed for continuous AI operations.
            </p>

            {/* Toggle pill */}
            <div className="flex items-center gap-4 mt-8 bg-white/5 border border-white/10 rounded-full px-6 py-3">
              <span className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-white" : "text-white/40"}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-14 h-7 rounded-full bg-white/10 border border-white/20 flex items-center p-1 transition-all"
              >
                <motion.div
                  animate={{ x: isAnnual ? 28 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_10px_rgba(212,20,255,0.6)]"
                />
              </button>
              <span className={`text-sm font-semibold transition-colors flex items-center gap-2 ${isAnnual ? "text-white" : "text-white/40"}`}>
                Annually
                <span className="text-[10px] bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded-full">Save 20%</span>
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 relative z-10 items-stretch">
            {pricingPlans.map((plan, index) => {
              const isHighlighted = index === 1;
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 h-full
                    ${isHighlighted
                      ? "border-2 border-primary/60 shadow-[0_0_40px_rgba(212,20,255,0.25)] lg:-translate-y-3"
                      : "border border-white/10 hover:border-white/25"
                    }`}
                  style={{
                    background: isHighlighted
                      ? "linear-gradient(160deg, rgba(212,20,255,0.12) 0%, rgba(11,5,24,0.95) 50%, rgba(74,0,224,0.08) 100%)"
                      : "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {/* Colored top accent bar */}
                  <div
                    className="h-1 w-full flex-shrink-0"
                    style={{ background: `linear-gradient(to right, ${plan.accentColor}, transparent)` }}
                  />

                  {/* Most Popular badge */}
                  {plan.badge && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-[0_0_14px_rgba(212,20,255,0.6)]">
                      {plan.badge}
                    </div>
                  )}

                  {/* Card Header */}
                  <div className="px-7 pt-7 pb-6 border-b border-white/[0.08]">
                    <p
                      className="text-xs font-black uppercase tracking-[0.18em] mb-4"
                      style={{ color: plan.accentColor, textShadow: `0 0 12px ${plan.accentGlow}` }}
                    >
                      {plan.name}
                    </p>

                    {/* Price row */}
                    <div className="flex items-end gap-1 mb-4" style={{ minHeight: "60px" }}>
                      {plan.monthlyPrice === null ? (
                        <span className="text-3xl font-black text-white leading-none self-center">Custom Pricing</span>
                      ) : (
                        <>
                          <span className="text-xl font-bold text-white/50 mb-0.5">$</span>
                          <span className="text-5xl font-black text-white leading-none tracking-tight">
                            {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                          </span>
                          <span className="text-white/40 text-sm mb-1 ml-1">/ month</span>
                        </>
                      )}
                    </div>

                    <p className="text-white/50 text-sm leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="px-7 py-6 flex flex-col gap-3.5 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background: `radial-gradient(circle, ${plan.accentColor}33, transparent)`,
                            border: `1px solid ${plan.accentColor}66`,
                            boxShadow: `0 0 8px ${plan.accentGlow}`,
                          }}
                        >
                          <CheckIcon color={plan.accentColor} />
                        </div>
                        <span className="text-sm text-white/80 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button — pinned to bottom */}
                  <div className="px-7 pb-8 pt-2 mt-auto">
                    <motion.a
                      href={plan.ctaLink || "#contact"}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`block text-center w-full py-3.5 rounded-tl-[24px] rounded-br-[24px] rounded-tr-[4px] rounded-bl-[4px] font-bold text-sm tracking-wider transition-all ${plan.ctaStyle}`}
                    >
                      {plan.ctaText}
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
