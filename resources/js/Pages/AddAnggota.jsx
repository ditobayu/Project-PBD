import React from "react";
import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
const DeleteAnggota = () => {
    const {
        data,
        setData,
        post,
        // post,
        // delete: destroy,
        processing,
        errors,
        reset,
    } = useForm({
        id_anggota: "",
        id_seleksi_masuk: "",
        id_program_studi: "",
        nama_anggota: "",
        updated_by: "",
    });

    // useEffect(() => {
    //     return () => {
    //         reset('password');
    //     };
    // }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(data);

        post(route("anggota.create"));
    };

    return (
        <div>
            <form onSubmit={submit}>
                <div className="flex flex-row bg-red-500">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="id_anggota"
                        type="text"
                        name="id_anggota"
                        value={data.id_anggota}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("id_anggota", e.target.value)}
                    />

                    <InputError message={errors.id} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="id_seleksi_masuk"
                        type="number"
                        name="id_seleksi_masuk"
                        value={data.id_seleksi_masuk}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) =>
                            setData("id_seleksi_masuk", e.target.value)
                        }
                    />

                    <InputError message={errors.id} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="id_program_studi"
                        type="number"
                        name="id_program_studi"
                        value={data.id_program_studi}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) =>
                            setData("id_program_studi", e.target.value)
                        }
                    />

                    <InputError message={errors.id} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="nama_anggota"
                        type="text"
                        name="nama_anggota"
                        value={data.nama_anggota}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) =>
                            setData("nama_anggota", e.target.value)
                        }
                    />

                    <InputError message={errors.id} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="created_by"
                        type="text"
                        name="created_by"
                        value={data.created_by}
                        className="mt-1 block w-full"
                        autoComplete="current-created_by"
                        onChange={(e) => setData("created_by", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>
                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default DeleteAnggota;
