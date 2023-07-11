<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anggota extends Model
{
    use HasFactory; 

    public $table = "anggota";
    
    protected $fillable = ["id","nama","departemen","strata","program_studi","seleksi_masuk"];
    
}
