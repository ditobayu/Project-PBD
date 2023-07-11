<?php

namespace App\Http\Controllers;

use App\Models\Anggota;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AnggotaController extends Controller
{
    public function index()
    {
        // return inertia('Anggota', ['anggota' => $anggota]);

        $query = request('search');
        if (!isset($query) || empty($query)) {
            $anggota = DB::select("call getAllAnggota ()");
            return inertia('Anggota', ['anggota' => $anggota]);
        }
        $anggotaFinded = DB::select("call searchAnggotaByName (?)", array($query));
        return inertia('Anggota', ['anggota' => $anggotaFinded]);
    }

    public function search()
    {
        // return $this->search();
    }

    public function create(Request $request)
    {

        $id_anggota = $request->id_anggota;
        $id_seleksi_masuk = $request->id_seleksi_masuk;
        $id_program_studi = $request->id_program_studi;
        $nama_anggota = $request->nama_anggota;
        $created_by = $request->created_by;

        $anggota = DB::select("call addAnggota (?,?,?,?,?)", array($id_anggota, $id_seleksi_masuk, $id_program_studi, $nama_anggota, $created_by));
        return inertia('Anggota', ['anggota' => $anggota]);
    }

    public function update(Request $request)
    {
        $id_anggota = $request->id_anggota;
        $id_seleksi_masuk = $request->id_seleksi_masuk;
        $id_program_studi = $request->id_program_studi;
        $nama_anggota = $request->nama_anggota;
        $updated_by = $request->updated_by;

        $anggota = DB::select("call updateAnggota (?,?,?,?,?)", array($id_anggota, $id_seleksi_masuk, $id_program_studi, $nama_anggota, $updated_by));
        return inertia('Anggota', ['anggota' => $anggota]);
    }

    public function destroy(Request $request, $id, $deleted_by)
    {
        $anggota = DB::select("call deleteAnggota (?,?)", array($id, $deleted_by));
        return redirect()->route('anggota.index');
    }
}
