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

export default function Dashboard({ auth, anggota }) {
    const MySwal = withReactContent(Swal);

    const editButton = async (e) => {
        await MySwal.fire({
            title: "Update Anggota",
            html: (
                <div className="w-full flex flex-col text-sm">
                    <div className="flex flex-row h-16 w-full items-center">
                        <label
                            className="w-[25%] text-left text-sm"
                            htmlFor="input2"
                        >
                            Nama
                        </label>
                        <input
                            className=" pl-4 flex flex-1 border-none rounded-lg border-4 ring-offset-2 ring-2 mr-2 border-slate-500 h-12"
                            id="input2"
                        />
                    </div>
                    <div className="flex flex-row h-16 w-full items-center">
                        <label
                            className="w-[25%] text-left text-sm"
                            htmlFor="input4"
                        >
                            Seleksi Masuk
                        </label>
                        <select
                            className="flex flex-1 border-none rounded-lg border-4 ring-offset-2 ring-2 mr-2 border-slate-500 h-12"
                            name="input4"
                            id="input4"
                        >
                            <option value={221}>
                                Seleksi Nasional Berdasarkan Tes
                            </option>
                            <option value={222}>
                                Seleksi Nasional Berdasarkan Prestasi
                            </option>
                            <option value={223}>Seleksi Mandiri</option>
                            <option value={224}>Seleksi Kelas Regular I</option>
                        </select>
                    </div>
                    <div className="flex flex-row h-16 w-full items-center">
                        <label
                            className="w-[25%] text-left text-sm"
                            htmlFor="input3"
                        >
                            Program Studi
                        </label>
                        <select
                            className="flex flex-1 border-none rounded-lg border-4 ring-offset-2 ring-2 mr-2 border-slate-500 h-12"
                            name="input3"
                            id="input3"
                        >
                            <option value={331}>Teknik Informatika</option>
                            <option value={332}>Ilmu Komputer</option>
                            <option value={333}>Teknik Komputer</option>
                            <option value={334}>Sistem Informasi</option>
                            <option value={335}>Teknologi Informasi</option>
                            <option value={336}>
                                Pendidikan Teknologi Informasi
                            </option>
                        </select>
                    </div>
                    <div className="flex flex-row"></div>
                </div>
            ),
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById("input4").value,
                    document.getElementById("input3").value,
                    document.getElementById("input2").value,
                ];
            },
        }).then(({ value: formValues }) => {
            let data = {
                id_anggota: "",
                id_seleksi_masuk: 0,
                id_program_studi: 0,
                nama_anggota: "",
                updated_by: "",
            };

            data["id_anggota"] = e.target.name;
            data["id_seleksi_masuk"] = formValues[0];
            data["id_program_studi"] = formValues[1];
            data["nama_anggota"] = formValues[2];
            data["updated_by"] = auth.user.nama;
            console.log(auth.user.name);

            if (
                !(
                    data["id_anggota"] == "" ||
                    data["id_seleksi_masuk"] == 0 ||
                    data["id_program_studi"] == 0 ||
                    data["nama_anggota"] == "" ||
                    data["updated_by"] == ""
                )
            ) {
                router.put(route("anggota.update"), data);
                MySwal.fire({
                    title: <strong>Good job!</strong>,
                    html: <i>Data diubah!</i>,
                    icon: "success",
                });
            } else {
                MySwal.fire({
                    title: <strong>Oops!</strong>,
                    html: <i>Gagal Mengubah Data!</i>,
                    icon: "error",
                });
            }
        });
    };

    const deleteButton = async (e) => {
        MySwal.fire({
            title: "Apakah Anda Yakin?",
            showDenyButton: true,
            showCancelButton: true,
            showConfirmButton: false,
            denyButtonText: `Delete`,
        }).then((result) => {
            if (result.isDenied) {
                let dataDeleted = {
                    id_anggota: "",
                    deleted_by: "",
                };
                dataDeleted["id_anggota"] = e.target.name;
                dataDeleted["deleted_by"] = auth.user.nama;
                console.log(e.target.name);
                console.log(auth.user.name);
                console.log(dataDeleted);
                if (!(data["id_anggota"] == "" || data["deleted_by"] == "")) {
                    router.delete(
                        `/anggota/${e.target.name}/${auth.user.nama}`,
                        dataDeleted
                    );
                    MySwal.fire("Data Dihapus!", "", "success");
                }
            }
        });
    };
    const createButton = async (e) => {
        await MySwal.fire({
            title: "Create Anggota",
            html: (
                <div className="w-full flex flex-col text-sm">
                    <div className="flex flex-row h-16 w-full items-center">
                        <label
                            className="w-[25%] text-left text-sm"
                            htmlFor="input1"
                        >
                            ID Anggota
                        </label>
                        <input
                            className=" pl-4 flex flex-1 border-none rounded-lg border-4 ring-offset-2 ring-2 mr-2 border-slate-500 h-12"
                            id="input1"
                        />
                    </div>
                    <div className="flex flex-row h-16 w-full items-center">
                        <label
                            className="w-[25%] text-left text-sm"
                            htmlFor="input2"
                        >
                            Nama
                        </label>
                        <input
                            className=" pl-4 flex flex-1 border-none rounded-lg border-4 ring-offset-2 ring-2 mr-2 border-slate-500 h-12"
                            id="input2"
                        />
                    </div>
                    <div className="flex flex-row h-16 w-full items-center">
                        <label
                            className="w-[25%] text-left text-sm"
                            htmlFor="input4"
                        >
                            Seleksi Masuk
                        </label>
                        <select
                            className="flex flex-1 border-none rounded-lg border-4 ring-offset-2 ring-2 mr-2 border-slate-500 h-12"
                            name="input4"
                            id="input4"
                        >
                            <option value={221}>
                                Seleksi Nasional Berdasarkan Tes
                            </option>
                            <option value={222}>
                                Seleksi Nasional Berdasarkan Prestasi
                            </option>
                            <option value={223}>Seleksi Mandiri</option>
                            <option value={224}>Seleksi Kelas Regular I</option>
                        </select>
                    </div>
                    <div className="flex flex-row h-16 w-full items-center">
                        <label
                            className="w-[25%] text-left text-sm"
                            htmlFor="input3"
                        >
                            Program Studi
                        </label>
                        <select
                            className="flex flex-1 border-none rounded-lg border-4 ring-offset-2 ring-2 mr-2 border-slate-500 h-12"
                            name="input3"
                            id="input3"
                        >
                            <option value={331}>Teknik Informatika</option>
                            <option value={332}>Ilmu Komputer</option>
                            <option value={333}>Teknik Komputer</option>
                            <option value={334}>Sistem Informasi</option>
                            <option value={335}>Teknologi Informasi</option>
                            <option value={336}>
                                Pendidikan Teknologi Informasi
                            </option>
                        </select>
                    </div>
                    <div className="flex flex-row"></div>
                </div>
            ),
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById("input4").value,
                    document.getElementById("input3").value,
                    document.getElementById("input2").value,
                    document.getElementById("input1").value,
                ];
            },
        }).then(({ value: formValues }) => {
            let data = {
                id_anggota: "",
                id_seleksi_masuk: 0,
                id_program_studi: 0,
                nama_anggota: "",
                created_by: "",
            };

            data["id_anggota"] = formValues[3];
            data["id_seleksi_masuk"] = formValues[0];
            data["id_program_studi"] = formValues[1];
            data["nama_anggota"] = formValues[2];
            data["created_by"] = auth.user.nama;
            console.log(auth.user.name);

            if (
                !(
                    data["id_anggota"] == "" ||
                    data["id_seleksi_masuk"] == 0 ||
                    data["id_program_studi"] == 0 ||
                    data["nama_anggota"] == "" ||
                    data["created_by"] == ""
                )
            ) {
                router.post(route("anggota.create"), data);
                MySwal.fire({
                    title: <strong>Good job!</strong>,
                    html: <i>Data dibuat!</i>,
                    icon: "success",
                });
            } else {
                MySwal.fire({
                    title: <strong>Oops!</strong>,
                    html: <i>Gagal Membuat Data!</i>,
                    icon: "error",
                });
            }
        });
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Anggota" />

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
                        href={route("anggota.index")}
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

                {anggota?.length == 0 ? (
                    <div className="p-4">Data Tidak Ada</div>
                ) : (
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th>ID Anggota</th>
                                <th>Nama</th>
                                <th>Departemen</th>
                                <th>Strata</th>
                                <th>Program Studi</th>
                                <th>Seleksi Masuk</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {anggota?.map((item, index) => (
                                <tr key={index} className="text-gray-900">
                                    <td>{item.id_anggota}</td>
                                    <td>{item.seleksi_masuk}</td>
                                    <td>{item.program_studi}</td>
                                    <td>{item.nama_anggota}</td>
                                    <td>{item.strata}</td>
                                    <td>{item.departemen}</td>
                                    <td className="flex gap-2">
                                        <button
                                            name={item.id_anggota}
                                            onClick={editButton}
                                            className="bg-green-500 py-1 px-2 text-white hover:scale-105 duration-300 rounded-md shadow-md "
                                        >
                                            Edit
                                        </button>
                                        <button
                                            name={item.id_anggota}
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
