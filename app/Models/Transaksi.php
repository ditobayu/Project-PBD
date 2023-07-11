<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    use HasFactory;

    public $table = "transaksi";

    // protected $fillable = ["kode_eksemplar", "id_penerbit", "judul", "created_at", "created_by", "updated_at", "updated_by", "deleted_at", "deleted_by"];
}
