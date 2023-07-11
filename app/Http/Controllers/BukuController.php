<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BukuController extends Controller
{
    public function index()
    {
        // $buku = DB::select("call getAllBuku ()");
        // return $buku;

        $query = request('search');
        if (!isset($query) || empty($query)) {
            $buku = DB::select("call getAllBuku ()");
            return inertia('Buku', ['buku' => $buku]);
        }
        $bukuFound = DB::select("call searchBukuByJudul (?)", array($query));
        return inertia('Buku', ['buku' => $bukuFound]);
    }

    public function search()
    {
        // return $this->search();
    }

    public function create(Request $request)
    {
        $kode_eksemplar = $request->kode_eksemplar;
        $id_penerbit = $request->id_penerbit;
        $judul = $request->judul;
        $created_by = $request->created_by;

        $message = DB::select("call manageBuku (?,?,?,?,?)", array(1, $kode_eksemplar, $id_penerbit, $judul, $created_by));

        $buku = DB::select("call getAllBuku ()");
        return inertia('Buku', ['buku' => $buku, 'message' => $message]);
        // return $message;
        // return 
        // return inertia('Buku', ['buku' => $bukuFound]);;
    }

    public function update(Request $request)
    {
        $kode_eksemplar = $request->kode_eksemplar;
        $id_penerbit = $request->id_penerbit;
        $judul = $request->judul;
        $updated_by = $request->updated_by;

        $message = DB::select("call manageBuku (?,?,?,?,?)", array(2, $kode_eksemplar, $id_penerbit, $judul, $updated_by));

        $buku = DB::select("call getAllBuku ()");
        return inertia('Buku', ['buku' => $buku, 'message' => $message]);

        // $kode_eksemplar = $request->kode_eksemplar;
        // $id_penerbit = $request->id_penerbit;
        // $judul = $request->judul;
        // $updated_by = $request->updated_by;

        // $buku = DB::select("call updateBuku (?,?,?,?)", array($kode_eksemplar, $id_penerbit, $judul, $updated_by));
        // return $buku;
    }

    public function destroy(Request $request, $kode_eksemplar, $deleted_by)
    {
        // $kode_eksemplar = $request->kode_eksemplar;
        // $id_penerbit = $request->id_penerbit;
        // $judul = $request->judul;
        // $deleted_by = $request->deleted_by;
        $message = DB::select("call manageBuku (?,?,?,?,?)", array(3, $kode_eksemplar, null, null, $deleted_by));

        // $result = DB::select("call deleteBuku (?,?)", array($kode_eksemplar, $deleted_by));
        // return $message;
        $buku = DB::select("call getAllBuku ()");

        // return inertia('Buku', ['buku' => $buku, 'message' => $message]);
        redirect()->route('buku.index');
        // return inertia('Buku', ['buku' => $buku, 'message' => $message]);
    }
}
