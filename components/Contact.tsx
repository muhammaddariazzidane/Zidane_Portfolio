import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { SiYoutube, SiInstagram, SiFacebook, SiGithub, SiTelegram } from "react-icons/si";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const Swal = require("sweetalert2");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Message: message,
    };
    axios.post("https://sheet.best/api/sheets/f261f240-55ce-4281-93a0-c76d1119845d", data).then((response) => {
      Swal.fire({
        icon: "success",
        title: "Pesan Berhasil Terkirim",
        background: "#6366F1",
        color: "white",
        showConfirmButton: false,
        showCloseButton: true,
        timerProgressBar: true,
        timer: "4000",
      });
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="w-full lg:h-screen lg:scroll-mt-24 mb-2" id="contact">
      <div className="max-w-[1240px] m-auto px-2 py-26 w-full mb-12">
        <p className="text-xl tracking-widest uppercase text-dark dark:text-white text-center pb-16">Contact</p>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* kiri */}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl dark:shadow-white/20 rounded-xl px-4 bg-abu/20">
            <div className="lg:p-4 h-full">
              <div>
                <Image className="rounded-xl hover:scale-105 ease-in-out duration-300" src="/../public/img/dzdong.png" width={200} height={200} />
              </div>
              <div className="dark:text-white text-dark">
                <h2 className="py-2">Muhammad Dariaz Zidane</h2>
                <p>Mahasiswa | Programmer lite</p>
                <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eius? Sit, fugit?</p>
              </div>
              <div className="dark:text-white text-dark">
                <p className="uppercase pt-8">Follow me</p>
                <div className="flex -items-center justify-between py-4">
                  <div className="rounded-full bg-slate-300 shadow-gray-400 shadow-lg dark:shadow-white/30 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
                    <SiGithub size={25} />
                  </div>
                  <div className="rounded-full bg-slate-300 shadow-gray-400 shadow-lg dark:shadow-white/30 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
                    <SiYoutube size={25} />
                  </div>
                  <div className="rounded-full bg-slate-300 shadow-gray-400 shadow-lg dark:shadow-white/30 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
                    <SiTelegram size={25} />
                  </div>
                  <div className="rounded-full bg-slate-300 shadow-gray-400 shadow-lg dark:shadow-white/30 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
                    <SiInstagram size={25} />
                  </div>
                  <div className="rounded-full bg-slate-300 shadow-gray-400 shadow-lg dark:shadow-white/30 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300">
                    <SiFacebook size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* kanan */}
          <div className="col-span-3 w-full h-auto shadow-xl dark:shadow-white/20 bg-abu/20 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2 dark:text-white text-dark">
                      Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      name="name"
                      className="border-2 p-3 rounded-lg flex border-[#0060DF]/30 bg-slate-300 text-dark dark:bg-dark/70 dark:text-white "
                      type="text"
                      placeholder="Nama kamu"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="uppercase text-sm py-2 dark:text-white text-dark">
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      name="email"
                      className="border-2 p-3 rounded-lg flex border-[#0060DF]/30 bg-slate-300 text-dark dark:bg-dark/70 dark:text-white "
                      type="email"
                      placeholder="email kamu"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2 dark:text-white text-dark">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    name="message"
                    className="border-2 rounded-lg p-3 flex border-[#0060DF]/30 bg-slate-300 text-dark dark:bg-dark/70 dark:text-white"
                    rows={10}
                    placeholder="message kamu"
                    required
                  ></textarea>
                </div>
                <button
                  className="w-full p-3 mt-4 bg-emerald-500 text-white hover:bg-emerald-600 font-bold px-4 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
