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
        delete: destroy,
        processing,
        errors,
        reset,
    } = useForm({
        id: "",
        deleted_by: "",
    });

    // useEffect(() => {
    //     return () => {
    //         reset('password');
    //     };
    // }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(data);

        destroy(route("anggota.destroy"));
    };

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="id"
                        type="text"
                        name="id"
                        value={data.id}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("id", e.target.value)}
                    />

                    <InputError message={errors.id} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="deleted_by"
                        type="text"
                        name="deleted_by"
                        value={data.deleted_by}
                        className="mt-1 block w-full"
                        autoComplete="current-deleted_by"
                        onChange={(e) => setData("deleted_by", e.target.value)}
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
