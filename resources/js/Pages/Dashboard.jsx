import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="bg-white mx-auto shadow-sm sm:rounded-lg">
                <div className="text-gray-900">
                    You're logged in!
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                    <h3>asdas</h3>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
