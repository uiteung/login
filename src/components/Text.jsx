import React from "react";

const Text = () => {
  return (
    // <ol className="space-y-6 w-3/4 lg:w-1/2 lg:px-8 order-2 md:order-1 scale-[0.8]">
    //   <li className="space-y-[0.7rem]">
    //     <h4 className="font-bold text-xl">Layanan Login ITB</h4>
    //     <p className="text-justify">
    //       Layanan Login ITB merupakan aplikasi berbasis SSO (Single Sign On)
    //       yang memungkinkan civitas akademika ITB untuk mengakses beberapa
    //       aplikasi pendukung kegiatan ITB dengan menggunakan satu akun saja
    //       yaitu ITB Account.
    //     </p>
    //   </li>
    //   <li className="space-y-[0.7rem]">
    //     <h4 className="font-bold text-xl">Daftar Akun</h4>
    //     <p className="text-justify">
    //       Untuk menggunakan Login ITB, Anda harus memiliki ITB Account terlebih
    //       dahulu. ITB Account dapat dimiliki oleh:
    //     </p>
    //     <ul className="list-disc pl-5 space-y-1">
    //       <li>Mahasiswa</li>
    //       <li>Staf/Dosen yang memiliki NIP</li>
    //       <li>Staf/Dosen/Peneliti yang tidak memiliki NIP</li>
    //     </ul>
    //   </li>
    //   <li className="space-y-[0.7rem]">
    //     <h4 className="font-bold text-xl">Lupa Password</h4>
    //     <p>
    //       Jika lupa password,
    //       <button target="_blank" className="text-sky-500 underline">
    //         silahkan klik link berikut
    //       </button>
    //       .
    //     </p>
    //   </li>
    //   <li>
    //     <h4 className="font-bold text-xl">Peringatan Keamanan</h4>
    //     <p className="text-justify">
    //       Demi keamanan, mohon selalu logout dari login.itb.ac.id dan mematikan
    //       browser jika telah selesai mengakses layanan internet ITB.
    //     </p>
    //   </li>
    // </ol>
    <div className="flex flex-col justify-center w-3/4 lg:max-w-sm md:order-1 order-2">
      <h1 className="text-5xl font-extrabold text-center lg:text-left">
        do.my.id (DoMyIkaDo)
      </h1>
      <h2 className="text-2xl font-extralight py-6">
        anti mainstream project management original made in Indonesia
      </h2>
      <p className="text-justify">
        Indonesia, rich in culture, ethnicity, and language, boasts a unique
        work ethic and communication style. Wrapped in the spirit of mutual
        cooperation, respect, and high tolerance, DoMyIkaDo embodies these
        values. While you may have tried various foreign products, don't forget
        the legendary TV ad's words: "Love Indonesian products."
      </p>
    </div>
  );
};

export default Text;
