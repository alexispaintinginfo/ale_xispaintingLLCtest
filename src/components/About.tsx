import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-10">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 font-bold text-xl">
                    20+
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-slate-900">Years of Experience</p>
                    <p className="text-sm text-slate-500">Trusted by hundreds</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">About Us</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Quality Craftsmanship, Exceptional Service
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-3xl mx-auto">
              Ale-Xis Painting has been proudly serving Tucson for nearly 25 years. We are a family owned business that takes pride in helping people make their visions a reality. Our focus is providing you top-tier painting services and helping get more value out of their home. Whether it is a bathroom renovation or a full home make over, give us a call so we can help make it happen.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Our team of skilled professionals treats every home and business as if it were our own. From the initial consultation to the final walkthrough, we ensure a seamless, stress-free experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              {[
                'Locally owned and operated',
                'Fully licensed and insured professionals',
                'Premium quality paints and materials',
                'Clean, respectful, and timely service',
                'ROC 348403',
                'ROC 348429',
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all"
              >
                Get to Know Us Better
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
