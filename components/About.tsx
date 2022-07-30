import Image from "next/image";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center pt-32">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="text-3xl py-2">Who I am</h2>
          <p className="py-2">Yang pasti bukan kamuuu</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe sit tenetur deleniti nobis, corrupti minus reiciendis voluptate accusamus vitae maxime temporibus, voluptatem placeat, officiis exercitationem at alias ipsa
            dolores distinctio maiores beatae reprehenderit aliquam. Distinctio amet laboriosam molestiae a ipsum necessitatibus perspiciatis qui odio quis quidem doloribus dolores quod, cum suscipit! Perferendis voluptate corporis odio,
            quaerat minus tempore debitis eligendi adipisci reprehenderit iusto excepturi quo aspernatur ex voluptatum sequi?
          </p>
          <Link href="#projects">
            <p className="underline py-4 cursor-pointer">Cek Project terbaru saya.</p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src="/../public/img/z-removebg-preview.png" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default About;
