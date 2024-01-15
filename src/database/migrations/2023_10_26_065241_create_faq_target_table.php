<?php

namespace Faq\Pradyumndwivedi\database\migrations;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Created By: Pradyumn Dwivedi
     * Created at: 15 Jan 2024
     * Use: Migration file for faq target when we have multiple apps
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('faq_target', function (Blueprint $table) {
            $table->id();
            $table->string('faq_target_title', 255);
            $table->enum('is_active', [1, 0])->default(1)->comment('1=Active, 0=InActive');
            $table->integer('created_by')->nullable();
            $table->integer('modified_by')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('faq_target');
    }
};
