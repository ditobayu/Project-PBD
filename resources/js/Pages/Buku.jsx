import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Buku({ auth, buku, message }) {
    const MySwal = withReactContent(Swal);
    console.log(buku);

    const editButton = async (e) => {
        await MySwal.fire({
            title: "Update buku",
            html: (
                <div className="w-full flex flex-col text-sm">
                    {/* <div className="flex flex-row h-16 w-full items-center">
                        <label
                            className="w-[25%] text-left text-sm"
                            htmlFor="kode_eksemplar"
                        >
                            Kode Eksemplar
                        </label>
                        <input
                            className=" pl-4 flex flex-1 border-none rounded-lg border-4 ring-offset-2 ring-2 mr-2 border-slate-500 h-12"
                            id="kode_eksemplar"
                        />
                    </div> */}
                    <div className="flex flex-row h-16 w-full items-center">
                        <label
                            className="w-[25%] text-left text-sm"
                            htmlFor="penerbit"
                        >
                            Penerbit
                        </label>

                        <select
                            className="flex flex-1 border-none rounded-lg border-4 ring-offset-2 ring-2 mr-2 border-slate-500 h-12"
                            name="penerbit"
                            id="penerbit"
                        >
                            <option value={1}>Andi Offset</option>
                            <option value={2}>Pustaka Pelajar</option>
                            <option value={3}>UIN Malang</option>
                            <option value={4}>Mediakom</option>
                            <option value={5}>Informatika</option>
                            <option value={6}>Mediatera</option>
                        </select>
                    </div>
                    <div className="flex flex-row h-16 w-full items-center">
                        <label
                            className="w-[25%] text-left text-sm"
                            htmlFor="judul"
                        >
                            Judul
                        </label>
                        <input
                            className=" pl-4 flex flex-1 border-none rounded-lg border-4 ring-offset-2 ring-2 mr-2 border-slate-500 h-12"
                            id="judul"
                        />
                    </div>
                </div>
            ),
            focusConfirm: false,
            preConfirm: () => {
                return [
                    // document.getElementById("kode_eksemplar").value,
                    document.getElementById("penerbit").value,
                    document.getElementById("judul").value,
                ];
            },
        }).then(({ value: formValues }) => {
            let data = {
                kode_eksemplar: "",
                id_penerbit: "",
                judul: "",
                updated_by: "",
            };

            data["kode_eksemplar"] = JSON.parse(e.target.name).kode_eksemplar;
            data["id_penerbit"] = formValues[0];
            data["judul"] = formValues[1];
            data["updated_by"] = auth.user.nama;

            router.put(route("buku.update"), data);
            // router.post(route("buku.create"), data);
        });
        // .then(({ value: formValues }) => {
        //     let data = {
        //         id_buku: "",
        //         id_seleksi_masuk: 0,
        //         id_program_studi: 0,
        //         nama_buku: "",
        //         updated_by: "",
        //     };

        //     data["id_buku"] = e.target.name;
        //     data["id_seleksi_masuk"] = formValues[0];
        //     data["id_program_studi"] = formValues[1];
        //     data["nama_buku"] = formValues[2];
        //     data["updated_by"] = auth.user.nama;
        //     console.log(auth.user.name);

        //     if (
        //         !(
        //             data["id_buku"] == "" ||
        //             data["id_seleksi_masuk"] == 0 ||
        //             data["id_program_studi"] == 0 ||
        //             data["nama_buku"] == "" ||
        //             data["updated_by"] == ""
        //         )
        //     ) {
        //         router.put(route("buku.update"), data);
        //         MySwal.fire({
        //             title: <strong>Good job!</strong>,
        //             html: <i>Data diubah!</i>,
        //             icon: "success",
        //         });
        //     } else {
        //         MySwal.fire({
        //             title: <strong>Gagal!</strong>,
        //             html: <i>Gagal Mengubah Data!</i>,
        //             icon: "error",
        //         });
        //     }
        // });
    };
    const deleteButton = async (e) => {
        MySwal.fire({
            title: "Apakah Anda Yakin?",
            showDenyButton: true,
            showCancelButton: true,
            showConfirmButton: false,
            denyButtonText: `Delete`,
        })
            .then((result) => {
                if (result.isDenied) {
                    // let dataDeleted = {
                    //     kode_eksemplar: "",
                    //     id_penerbit: "",
                    //     judul: "",
                    //     deleted_by: "",
                    // };
                    // dataDeleted["kode_eksemplar"] = JSON.parse(
                    //     e.target.name
                    // ).kode_eksemplar;
                    // dataDeleted["id_penerbit"] = JSON.parse(
                    //     e.target.name
                    // ).id_penerbit;
                    // dataDeleted["judul"] = JSON.parse(e.target.name).judul;
                    // dataDeleted["deleted_by"] = auth.user.nama;

                    // if (
                    //     !(
                    //         dataDeleted["kode_eksemplar"] == "" ||
                    //         dataDeleted["id_penerbit"] == "" ||
                    //         dataDeleted["judul"] == "" ||
                    //         dataDeleted["deleted_by"] == ""
                    //     )
                    // ) {
                    router.delete(
                        `/buku/${JSON.parse(e.target.name).kode_eksemplar}/${
                            auth.user.nama
                        }`
                        // dataDeleted
                    );
                    MySwal.fire({
                        title: <strong>Berhasil!</strong>,
                        html: <i>Data Berhasil Dihapus</i>,
                        icon: "success",
                    });

                    // }
                }
            })
            .then((message) => {});
    };
    const createButton = async (e) => {
        await MySwal.fire({
            title: "Create buku",
            html: (
                <div className="w-full flex flex-col text-sm">
                    <div className="flex flex-row h-16 w-full items-center">
                        <label
                            className="w-[25%] text-left text-sm"
                            htmlFor="kode_eksemplar"
                        >
                            Kode Eksemplar
                        </label>
                        <input
                            className=" pl-4 flex flex-1 border-none rounded-lg border-4 ring-offset-2 ring-2 mr-2 border-slate-500 h-12"
                            id="kode_eksemplar"
                        />
                    </div>
                    <div className="flex flex-row h-16 w-full items-center">
                        <label
                            className="w-[25%] text-left text-sm"
                            htmlFor="penerbit"
                        >
                            Penerbit
                        </label>

                        <select
                            className="flex flex-1 border-none rounded-lg border-4 ring-offset-2 ring-2 mr-2 border-slate-500 h-12"
                            name="penerbit"
                            id="penerbit"
                        >
                            <option value={1}>Andi Offset</option>
                            <option value={2}>Pustaka Pelajar</option>
                            <option value={3}>UIN Malang</option>
                            <option value={4}>Mediakom</option>
                            <option value={5}>Informatika</option>
                            <option value={6}>Mediatera</option>
                        </select>
                    </div>
                    <div className="flex flex-row h-16 w-full items-center">
                        <label
                            className="w-[25%] text-left text-sm"
                            htmlFor="judul"
                        >
                            Judul
                        </label>
                        <input
                            className=" pl-4 flex flex-1 border-none rounded-lg border-4 ring-offset-2 ring-2 mr-2 border-slate-500 h-12"
                            id="judul"
                        />
                    </div>
                </div>
            ),
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById("kode_eksemplar").value,
                    document.getElementById("penerbit").value,
                    document.getElementById("judul").value,
                ];
            },
        })
            .then(({ value: formValues }) => {
                let data = {
                    kode_eksemplar: "",
                    id_penerbit: "",
                    judul: "",
                    created_by: "",
                };

                data["kode_eksemplar"] = formValues[0];
                data["id_penerbit"] = formValues[1];
                data["judul"] = formValues[2];
                data["created_by"] = auth.user.nama;
                router.post(route("buku.create"), data);
            })
            .then((message) => {
                console.log(message);
            });
    };
    if (message) {
        if ("success_message" in message[0]) {
            MySwal.fire({
                title: <strong>Berhasil!</strong>,
                html: <i>{message[0].success_message}!</i>,
                icon: "success",
            });
        } else {
            MySwal.fire({
                title: <strong>Gagal!</strong>,
                html: <i>{message[0].error_message}</i>,
                icon: "error",
            });
        }
    }
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="buku" />

            <div className="bg-white w-full p-4 mx-auto shadow-sm sm:rounded-lg">
                <div className="flex flex-row items-center gap-2">
                    <button
                        onClick={createButton}
                        className="bg-green-500 h-12 py-1 px-8 text-white hover:scale-105 duration-300 rounded-full shadow-md "
                    >
                        Create
                    </button>
                    <form action="" className="flex flex-1">
                        <input
                            type="text"
                            placeholder="Search..."
                            name="search"
                            className="pl-6 w-full border-2 h-12 border-slate-300 rounded-full"
                        />
                    </form>
                    <Link
                        href={route("buku.index")}
                        className="hover:bg-slate-200 duration-200 rounded-full h-10 w-10 items-center justify-center flex bg-slate-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-[50%] w-[50%]"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </Link>
                </div>

                {buku?.length == 0 ? (
                    <div className="p-4">Data Tidak Ada</div>
                ) : (
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th>Kode Eksemplar</th>
                                <th>Penerbit</th>
                                <th>Judul</th>
                            </tr>
                        </thead>
                        <tbody>
                            {buku?.map((item, index) => (
                                <tr key={index} className="text-gray-900">
                                    <td>{item.kode_eksemplar}</td>
                                    <td>{item.penerbit}</td>
                                    <td>{item.judul}</td>
                                    <td className="flex gap-2">
                                        <button
                                            name={JSON.stringify(item)}
                                            onClick={editButton}
                                            className="bg-green-500 py-1 px-2 text-white hover:scale-105 duration-300 rounded-md shadow-md "
                                        >
                                            Edit
                                        </button>
                                        <button
                                            name={JSON.stringify(item)}
                                            onClick={deleteButton}
                                            className="bg-red-500 py-1 px-2 text-white hover:scale-105 duration-300 rounded-md shadow-md "
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
