"use client"

import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setEnviado(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setEnviado(false), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-24 overflow-x-hidden bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500 font-medium text-sm tracking-wider uppercase">
              Contato
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Vamos conversar sobre seu{" "}
              <span className="text-orange-500">projeto</span>
            </h2>

            <div className="w-16 h-1 bg-orange-500 rounded-full mb-8" />

            <p className="text-gray-600 leading-relaxed mb-10 max-w-lg">
              Entre em contato conosco para discutir seu projeto.
              Nossa equipe está pronta para oferecer as melhores
              soluções em engenharia e arquitetura.
            </p>

            <div className="space-y-6">
              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                  <p className="text-gray-600 text-sm">
                    Rua São Luís, 116 - 5º Andar
                    <br />
                    Centro, Caieiras - SP
                  </p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                  <p className="text-gray-600 text-sm">
                    (11) 93422-0919
                    <br />
               (11) 3660-1080
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                  <p className="text-gray-600 text-sm">
                    contato@spadoniprojetos.com.br
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Envie sua mensagem
              </h3>

              {enviado && (
                <div className="mb-6 flex items-center gap-2 text-green-600 text-sm">
                  <CheckCircle className="w-5 h-5" />
                  Mensagem enviada com sucesso!
                </div>
              )}

              <div className="space-y-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Descreva seu projeto..."
                  className="w-full rounded-lg border  border-gray-300 px-4 py-2 text-sm resize-none focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
