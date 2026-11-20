import React from "react";
import Link from "next/link";
import { ArrowRight, CodeIcon, ZapIcon, ShieldIcon } from "../icons";
import { Badge } from "../ui/Badge";
import { SOFTWARE_PRODUCTS } from "@/lib/services-data";

export function PowerfulSoftwareSection() {
  const iconConfig = {
    erp: {
      component: ZapIcon,
      bg: "bg-brand-cyan/15 text-brand-cyan",
    },
    crm: {
      component: CodeIcon,
      bg: "bg-brand-purple/15 text-brand-purple",
    },
    finance: {
      component: ShieldIcon,
      bg: "bg-brand-pink/15 text-brand-pink",
    },
  };

  return (
    <section id="products" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <Badge variant="cyan">SOLUTIONS & PRODUCTS</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Powerful Software for Every <br className="hidden sm:inline" />
            Business Need
          </h2>
          <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto">
            From streamlined operations to customer experience, our modular platforms give your teams the exact tools they need to succeed.
          </p>
        </div>

        {/* 3 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOFTWARE_PRODUCTS.map((prod, idx) => {
            const IconData = iconConfig[prod.iconType];
            const Icon = IconData.component;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-brand-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Circular Icon */}
                  <div
                    className={`w-12 h-12 rounded-full ${IconData.bg} flex items-center justify-center font-bold`}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy">
                    {prod.title}
                  </h3>

                  <p className="text-sm text-brand-muted leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-border/60">
                  <Link
                    href={prod.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy hover:text-brand-pink transition-colors group"
                  >
                    <span>{prod.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
