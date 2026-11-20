import React from "react";
import Link from "next/link";
import { ArrowRight, CodeIcon, ZapIcon, ShieldIcon } from "../icons";
import { Badge } from "../ui/Badge";
import { SOFTWARE_PRODUCTS } from "@/lib/services-data";

export function PowerfulSoftwareSection() {
  const iconConfig = {
    erp: {
      component: ZapIcon,
      bg: "bg-[#E0F2FE] text-[#0284C7]",
      hoverBg: "group-hover:bg-[#0284C7] group-hover:text-white",
    },
    crm: {
      component: CodeIcon,
      bg: "bg-[#F3E8FF] text-[#7E22CE]",
      hoverBg: "group-hover:bg-[#7E22CE] group-hover:text-white",
    },
    finance: {
      component: ShieldIcon,
      bg: "bg-[#FCE7F3] text-[#BE185D]",
      hoverBg: "group-hover:bg-[#BE185D] group-hover:text-white",
    },
  };

  return (
    <section id="products" className="py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-16">
          <Badge variant="cyan" showLines={true}>
            SOLUTIONS & PRODUCTS
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
            Powerful Software for Every <br className="hidden sm:inline" />
            Business Need
          </h2>

          <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto leading-relaxed">
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
                className="group bg-white rounded-2xl p-8 border border-brand-border/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Circular Icon matching slice_3_powerful_software.png */}
                  <div
                    className={`w-13 h-13 rounded-full ${IconData.bg} ${IconData.hoverBg} flex items-center justify-center font-bold transition-colors duration-200 shadow-xs`}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    {prod.title}
                  </h3>

                  <p className="text-sm text-brand-muted leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-brand-border/60">
                  <Link
                    href={prod.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy group-hover:text-brand-pink transition-colors"
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
