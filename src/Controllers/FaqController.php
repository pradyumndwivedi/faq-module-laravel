<?php

namespace Faq\Pradyumndwivedi\Controllers;

use Faq\Pradyumndwivedi\Faq;
use Illuminate\Http\Request;

class FaqController
{
    /**
     * Created By: Pradyumn Dwivedi
     * Created at: 11 Jan 2023
     * Use: To invoke faq class
     */
    public function __invoke(Faq $faq)
    {
        $quote = $faq->justDoIt();
        return view('faq::index', compact('quote'));
    }
}
