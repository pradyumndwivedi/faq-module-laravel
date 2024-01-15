<?php

namespace Faq\Pradyumndwivedi\Providers;

use Illuminate\Support\ServiceProvider;

class FaqProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
        $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
        $this->loadViewsFrom(__DIR__.'/../views', 'faq');

        //public assets
        $this->publishes([
            __DIR__.'/../public' => public_path('vendor/faq'),
        ], 'public');

        //database migration
        $this->publishes([
            __DIR__.'/../database/migrations/' => database_path('migrations')
        ], 'faq-migrations');
    }
}
