<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    public function word()
    {
        return $this->belongsTo(Word::class);
    }
}