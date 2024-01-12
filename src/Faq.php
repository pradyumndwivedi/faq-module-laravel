<?php

namespace Faq\Pradyumndwivedi;

use Illuminate\Support\Facades\Http;

class Faq{
    /**
     * Created By: Pradyumn Dwivedi
     * Cfreated at: 11 jan 2023
     * Use: To get random the inspiorational quote
     */
    public function justDoIt(){
        $response = Http::get('https://zenquotes.io/api/random');
        return $response[0]["h"];
    }
}
