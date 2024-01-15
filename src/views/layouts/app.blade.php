<!DOCTYPE html>
<html>

<head>
    <title>@yield('title')</title>
    <meta charset="utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--shortcut icon-->
    <link rel="icon" type="image/x-icon" href="{{ asset('public/admin/assets/media/wedzy/favicon.png') }}">
    <!--Google Fonts-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700" />
    <!--fullcalendar-->
    <link href="{{ asset('public/admin/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css') }}" rel="stylesheet"
        type="text/css" />
    <!--datatables-->
    <link href="{{ asset('public/admin/assets/plugins/custom/datatables/datatables.bundle.css') }}" rel="stylesheet"
        type="text/css" />
    {{-- filepond image preview css --}}
    <link href="https://unpkg.com/filepond@^4/dist/filepond.css" rel="stylesheet" />
    <link href="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css" rel="stylesheet" /></>


    <!--begin::Global Stylesheets Bundle(used by all pages)-->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.23/css/jquery.dataTables.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
    <link href="{{ asset('public/admin/assets/plugins/global/plugins.bundle.css') }}" rel="stylesheet"
        type="text/css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
    <link href="{{ asset('public/admin/assets/css/style.bundle.css') }}" rel="stylesheet" type="text/css" />


    {{-- custom css  --}}
    <link rel="stylesheet" href="{{ asset('public/admin/assets/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('public/admin/assets/css/style2.css') }}">

    {{-- =============================================newly added================================================= --}}
    <!-- {{-- <script src="{{ url('admin/components/delete_alert.js') }}"></script>
    <script src="https://code.jquery.com/jquery-3.7.0.js"></script>
    {{-- <script src="https://code.jquery.com/jquery-3.7.0.js"></script>
    <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
    <script src="//cdn.datatables.net/plug-ins/1.10.11/sorting/date-eu.js" type="text/javascript"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.23/css/jquery.dataTables.min.css">
    <script src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js"></script> --}} -->
    {{-- ================================================== end newly added =============================================================== --}}
    {{-- ========================================================= manage user-> vendors js==================================================================== --}}

    {{-- <script src="{{ asset('admin/js/manage_users/vendors/vendors.js') }}"></script> --}}

    {{-- ========================================================= end->manage user-> vendors ==================================================================== --}}


    <!---->
</head>

<body>
    <main data-kt-name="metronic" id="kt_app_body" data-kt-app-layout="dark-sidebar" data-kt-app-header-fixed="true"
        data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-hoverable="false"
        data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true"
        data-kt-app-sidebar-push-footer="true" data-kt-app-toolbar-enabled="true" class="app-default">
        <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
            <div class="app-page flex-column flex-column-fluid" id="kt_app_page">

                <div id="kt_app_header" class="app-header">
                    <div class="app-container container-fluid d-flex align-items-stretch justify-content-between">
                        <div class="d-flex align-items-center d-lg-none ms-n2 me-2" title="Show sidebar menu">
                            <div class="btn btn-icon btn-active-color-primary w-35px h-35px"
                                id="kt_app_sidebar_mobile_toggle">
                                <span class="svg-icon svg-icon-1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                                            fill="currentColor" />
                                        <path opacity="0.3"
                                            d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                                            fill="currentColor" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                        </div>
                        <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-2"
                            id="kt_app_header_wrapper">
                            <div class="app-navbar flex-shrink-0">
                                <div class="app-navbar-item ms-1 ms-lg-9" id="kt_header_user_menu_toggle">
                                    <div class="cursor-pointer symbol symbol-35px symbol-md-40px"
                                        data-kt-menu-trigger="click" data-kt-menu-attach="parent"
                                        data-kt-menu-placement="bottom-end">
                                        {{-- <img src="{{ asset('public/admin/assets/media/wedzy/Ellipse.png') }}"
                                            alt="user" /> --}}
                                        <i title="Logout" class="fa-solid fa-circle-user fa-2xl"
                                            style="color:#EF2B7B;"></i>
                                    </div>
                                    <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                                        data-kt-menu="true">
                                        <div class="menu-item px-5">
                                            <a id="logoutModal_icon_btn" class="menu-link"><i
                                                    class="fa-solid fa-right-from-bracket fa-lg"
                                                    style="color:#EF2B7B;"></i><strong>
                                                    &nbsp;&nbsp;&nbsp;Logout</strong>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
                    <?php
                    $basename = basename($_SERVER['REQUEST_URI']);
                    $currentPage = pathinfo($_SERVER['PHP_SELF'], PATHINFO_BASENAME);
                    $pg_name = pathinfo($_SERVER['PHP_SELF'], PATHINFO_BASENAME);
                    ?>
                    <div id="kt_app_sidebar" class="app-sidebar flex-column" data-kt-drawer="true"
                        data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}"
                        data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start"
                        data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
                        <!--begin::Logo-->
                        <div class="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
                            <!--begin::Logo image-->
                            <a href="{{ url('/dashboard') }}">
                                <img alt="Logo" src="{{ asset('public/admin/assets/media/wedzy/logo1.png') }}"
                                    class="h-50px app-sidebar-logo-default" />
                                <img alt="Logo" src="{{ asset('public/admin/assets/media/wedzy/logo2.png') }}"
                                    class="h-30px app-sidebar-logo-minimize" />
                            </a>
                            <!--end::Logo image-->
                            <!--begin::Sidebar toggle-->
                            <div id="kt_app_sidebar_toggle"
                                class="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate"
                                data-kt-toggle="false" data-kt-toggle-state="active" data-kt-toggle-target="body"
                                data-kt-toggle-name="app-sidebar-minimize">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr079.svg-->
                                <span class="svg-icon svg-icon-2 rotate-180">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5"
                                            d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                                            fill="currentColor" />
                                        <path
                                            d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                                            fill="currentColor" />
                                    </svg>
                                </span>
                                <!--end::Svg Icon-->
                            </div>
                            <!--end::Sidebar toggle-->
                        </div>
                        <!--end::Logo-->
                        <!--begin::sidebar menu-->
                        <div class="app-sidebar-menu overflow-hidden flex-column-fluid">
                            @php
                                $firstParam = Request::segment(0);
                                $secondParam = Request::segment(1);
                                $thirdParam = Request::segment(2);
                                $fourthParam = Request::segment(3);
                                // dd($thirdParam);
                            @endphp
                            <!--begin::Menu wrapper-->
                            <div id="kt_app_sidebar_menu_wrapper"
                                class="app-sidebar-wrapper hover-scroll-overlay-y my-5" data-kt-scroll="true"
                                data-kt-scroll-activate="true" data-kt-scroll-height="auto"
                                data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
                                data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px"
                                data-kt-scroll-save-state="true">
                                <!--begin::Menu-->
                                <div class="menu menu-column menu-rounded menu-sub-indention px-3"
                                    id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="true">
                                    <!--begin:Menu item-->
                                    <div data-kt-menu-trigger="click" class="menu-item here show menu-accordion">
                                        <!--begin:Menu link-->
                                        <a href="{{ url('/dashboard') }}"
                                            class=" menu_tabs {{ Request::segment(1) === 'dashboard' ? 'active' : null }}">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <img
                                                            src="{{ asset('public/admin/assets/media/wedzy/dashboard2.png') }}" />
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Dashboard</span>
                                            </span>
                                        </a>
                                        <!--end:Menu link-->
                                    </div>
                                    <div data-kt-menu-trigger="click" class="drop-menu menu-item menu-accordion">
                                        <!--begin:Menu link-->
                                        <!-- <a href="../investors/manage_investor.php" > -->
                                        <span class="menu-link">
                                            <span class="menu-icon">
                                                <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                                                <span class="svg-icon svg-icon-2">
                                                    <img
                                                        src="{{ asset('public/admin/assets/media/wedzy/group2.png') }}" />
                                                </span>
                                                <!--end::Svg Icon-->
                                            </span>
                                            <span class="head-title menu-title">Manage Users</span>
                                            <span class="menu-arrow"></span>
                                        </span>
                                        <!-- </a> -->
                                        <!--end:Menu link-->
                                        <!--begin:Menu sub-->
                                        <div class="menu-sub menu-sub-accordion pink-color ">
                                            <!--begin:Menu item-->
                                            <div data-kt-menu-trigger="click"
                                                class="drop-menu menu-item menu-accordion">
                                                <!--begin:Menu link-->
                                                <!-- <a href="../investors/manage_investor.php" > -->
                                                <span class="menu-link">
                                                    <span class="menu-icon">
                                                        <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                                                        <span class="svg-icon svg-icon-2">
                                                            <img
                                                                src="{{ asset('public/admin/assets/media/wedzy/group2.png') }}" />
                                                        </span>
                                                        <!--end::Svg Icon-->
                                                    </span>
                                                    <span class="head-title menu-title">Bride/Groom</span>
                                                    <span class="menu-arrow"></span>
                                                </span>
                                                <!-- </a> -->
                                                <!--end:Menu link-->
                                                <!--begin:Menu sub-->
                                                <div class="menu-sub menu-sub-accordion pink-color">
                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/manage_user/bride/bride_groom_list') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'bride.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Bride/Groom-Listing</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->


                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/manage_user/bride/bride_archive_list') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'archive_list.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Archived Listing</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->
                                                </div>
                                                <!--end:Menu sub-->
                                            </div>
                                            <!--end:Menu item-->


                                            <!--begin:Menu item-->
                                            <div data-kt-menu-trigger="click"
                                                class="drop-menu menu-item menu-accordion <?php if ($pg_name == 'manage_user') {
                                                    echo ' ';
                                                } ?>">
                                                <!--begin:Menu link-->
                                                <!-- <a href="../investors/manage_investor.php" > -->
                                                <span class="menu-link">
                                                    <span class="menu-icon">
                                                        <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                                                        <span class="svg-icon svg-icon-2">
                                                            <img
                                                                src="{{ asset('public/admin/assets/media/wedzy/loan2.png') }}" />
                                                        </span>
                                                        <!--end::Svg Icon-->
                                                    </span>
                                                    <span class="head-title menu-title">Vendors</span>
                                                    <span class="menu-arrow"></span>
                                                </span>

                                                <!-- </a> -->
                                                <!--end:Menu link-->
                                                <!--begin:Menu sub-->
                                                <div class="menu-sub menu-sub-accordion pink-color">
                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/manage_user/vendors/vendor_list') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'vendors.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Vendors Listing</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->


                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/manage_user/vendors/vendor_archived_list') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'vendor_archive_list.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Archived Listing</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/manage_user/vendors/vendor_product_list') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'vendor_archive_list.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Vendors Product Listing</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->

                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/manage_user/vendors/vendor_service_list') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'vendors.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Vendors Service Listing</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                </div>
                                                <!--end:Menu sub-->
                                            </div>
                                            <!--end:Menu item-->

                                            <!--begin:Menu item-->
                                            <div data-kt-menu-trigger="click"
                                                class="drop-menu menu-item menu-accordion <?php if ($pg_name == 'manage_user') {
                                                    echo ' ';
                                                } ?>">
                                                <!--begin:Menu link-->
                                                <!-- <a href="../investors/manage_investor.php" > -->
                                                <span class="menu-link">
                                                    <span class="menu-icon">
                                                        <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                                                        <span class="svg-icon svg-icon-2">
                                                            <img
                                                                src="{{ asset('public/admin/assets/media/wedzy/feedback2.png') }}" />
                                                        </span>
                                                        <!--end::Svg Icon-->
                                                    </span>
                                                    <span class="head-title menu-title">Captains</span>
                                                    <span class="menu-arrow"></span>
                                                </span>
                                                <!-- </a> -->
                                                <!--end:Menu link-->
                                                <!--begin:Menu sub-->
                                                <div class="menu-sub menu-sub-accordion pink-color">
                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/manage_user/captains/captain_list') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'captians.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Captains Listing</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->


                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/manage_user/captains/captain_archived_list') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'archive_captains_list.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Archived Listing</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->


                                                </div>
                                                <!--end:Menu sub-->
                                            </div>
                                            <!--end:Menu item-->
                                            <!--begin:Menu item-->
                                            <div data-kt-menu-trigger="click"
                                                class="drop-menu menu-item menu-accordion <?php if ($pg_name == 'manage_user') {
                                                    echo ' ';
                                                } ?>">
                                                <!--begin:Menu link-->
                                                <!-- <a href="../investors/manage_investor.php" > -->
                                                <span class="menu-link">
                                                    <span class="menu-icon">
                                                        <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                                                        <span class="svg-icon svg-icon-2">
                                                            <img
                                                                src="{{ asset('public/admin/assets/media/wedzy/cms2.png') }}" />
                                                        </span>
                                                        <!--end::Svg Icon-->
                                                    </span>
                                                    <span class="head-title menu-title">Sub Admins</span>
                                                    <span class="menu-arrow"></span>
                                                </span>
                                                <!-- </a> -->
                                                <!--end:Menu link-->
                                                <!--begin:Menu sub-->
                                                <div class="menu-sub menu-sub-accordion pink-color">
                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/manage_user/subadmins/subadmin_list') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'sub_admin.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Sub Listing</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->


                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/manage_user/subadmins/subadmin_archived_list') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'sub_archive.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Archived Listing</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->


                                                </div>
                                                <!--end:Menu sub-->
                                            </div>
                                            <!--end:Menu item-->


                                        </div>
                                        <!--end:Menu sub-->
                                    </div>

                                    <div data-kt-menu-trigger="click"
                                        class="drop-menu menu-item menu-accordion <?php if ($pg_name == 'manage_user') {
                                            echo ' ';
                                        } ?>">
                                        <!--begin:Menu link-->
                                        <!-- <a href="../investors/manage_investor.php" > -->
                                        <span class="menu-link">
                                            <span class="menu-icon">
                                                <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                                                <span class="svg-icon svg-icon-2">
                                                    <img
                                                        src="{{ asset('public/admin/assets/media/wedzy/diamond2.png') }}" />
                                                </span>
                                                <!--end::Svg Icon-->
                                            </span>
                                            <span class="head-title menu-title">Manage Rentals</span>
                                            <span class="menu-arrow"></span>
                                        </span>
                                        <!-- </a> -->
                                        <!--end:Menu link-->
                                        <!--begin:Menu sub-->
                                        <div class="menu-sub menu-sub-accordion pink-color">
                                            <!--begin:Menu item-->
                                            <div class="menu-item">
                                                <!--begin:Menu link-->
                                                <a href="{{ url('/manage_weds_rents/products') }}"
                                                    class="menu-link menu_tabs <?php if ($currentPage == 'products.php') {
                                                        echo 'active';
                                                    } else {
                                                        print 'inactive';
                                                    } ?>">
                                                    <span class="menu-bullet">
                                                        <span class="bullet bullet-dot"></span>
                                                    </span>
                                                    <span class="menu-title">Manage Wedsrent</span>
                                                </a>
                                                <!--end:Menu link-->
                                            </div>
                                            <div class="menu-item">
                                                <!--begin:Menu link-->
                                                <a href="{{ url('/manage_jewels_rents/products') }}"
                                                    class="menu-link menu_tabs <?php if ($currentPage == 'products.php') {
                                                        echo 'active';
                                                    } else {
                                                        print 'inactive';
                                                    } ?>">
                                                    <span class="menu-bullet">
                                                        <span class="bullet bullet-dot"></span>
                                                    </span>
                                                    <span class="menu-title">Manage Jewelsrent</span>
                                                </a>
                                                <!--end:Menu link-->
                                            </div>
                                            <div class="menu-item">
                                                <!--begin:Menu link-->
                                                <a href="{{ url('/manage_rental/orders') }}"
                                                    class="menu-link menu_tabs <?php if ($currentPage == 'products.php') {
                                                        echo 'active';
                                                    } else {
                                                        print 'inactive';
                                                    } ?>">
                                                    <span class="menu-bullet">
                                                        <span class="bullet bullet-dot"></span>
                                                    </span>
                                                    <span class="menu-title">Manage Orders</span>
                                                </a>
                                                <!--end:Menu link-->
                                            </div>
                                            <!--end:Menu item-->
                                            <div class="menu-item">
                                                <!--begin:Menu link-->
                                                <a href="{{ url('/manage_rental_category/category') }}"
                                                    class="menu-link menu_tabs <?php if ($currentPage == 'products.php') {
                                                        echo 'active';
                                                    } else {
                                                        print 'inactive';
                                                    } ?>">
                                                    <span class="menu-bullet">
                                                        <span class="bullet bullet-dot"></span>
                                                    </span>
                                                    <span class="menu-title">Manage Rental Category</span>
                                                </a>
                                                <!--end:Menu link-->
                                            </div>
                                            <div class="menu-item">
                                                <!--begin:Menu link-->
                                                <a href="{{ url('/manage_sell_category/sell_category') }}"
                                                    class="menu-link menu_tabs <?php if ($currentPage == 'products.php') {
                                                        echo 'active';
                                                    } else {
                                                        print 'inactive';
                                                    } ?>">
                                                    <span class="menu-bullet">
                                                        <span class="bullet bullet-dot"></span>
                                                    </span>
                                                    <span class="menu-title">Manage Sell Category</span>
                                                </a>
                                                <!--end:Menu link-->
                                            </div>
                                        </div>
                                        <!--end:Menu sub-->
                                    </div>

                                    <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                        <!--begin:Menu link-->
                                        <a href="{{ url('/manage_contact_us/listing') }}"
                                            class=" menu_tabs <?php if ($currentPage == 'contact-us.php') {
                                                echo 'active';
                                            } else {
                                                print 'inactive';
                                            } ?>">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/communication/com004.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <img
                                                            src="{{ asset('public/admin/assets/media/wedzy/phone-call2.png') }}" />
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Manage Contact Us</span>
                                            </span>
                                        </a>
                                        <!--end:Menu link-->
                                    </div>

                                    <div data-kt-menu-trigger="click"
                                        class="drop-menu menu-item menu-accordion <?php if ($pg_name == 'manage_user') {
                                            echo ' ';
                                        } ?>">
                                        <!--begin:Menu link-->
                                        <!-- <a href="../investors/manage_investor.php" > -->
                                        <span class="menu-link">
                                            <span class="menu-icon">
                                                <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                                                <span class="svg-icon svg-icon-2">
                                                    <img
                                                        src="{{ asset('public/admin/assets/media/wedzy/feedback2.png') }}" />
                                                </span>
                                                <!--end::Svg Icon-->
                                            </span>
                                            <span class="head-title menu-title">Manage Feedback</span>
                                            <span class="menu-arrow"></span>
                                        </span>
                                        <div class="menu-sub menu-sub-accordion pink-color">
                                            <!--begin:Menu item-->
                                            <div class="menu-item">
                                                <!--begin:Menu link-->
                                                <a href="{{ url('/admin/manage_feedback/vendor') }}"
                                                    class="menu-link menu_tabs <?php if ($currentPage == 'feedback_vendor.php') {
                                                        echo 'active';
                                                    } else {
                                                        print 'inactive';
                                                    } ?>">
                                                    <span class="menu-bullet">
                                                        <span class="bullet bullet-dot"></span>
                                                    </span>
                                                    <span class="menu-title">Vendor</span>
                                                </a>
                                                <!--end:Menu link-->
                                            </div>
                                            <!--end:Menu item-->

                                            <!--begin:Menu item-->
                                            <div class="menu-item">
                                                <!--begin:Menu link-->
                                                <a href="{{ url('/admin/manage_feedback/duo') }}"
                                                    class="menu-link menu_tabs <?php if ($currentPage == 'feedback_captain.php') {
                                                        echo 'active';
                                                    } else {
                                                        print 'inactive';
                                                    } ?>">
                                                    <span class="menu-bullet">
                                                        <span class="bullet bullet-dot"></span>
                                                    </span>
                                                    <span class="menu-title">Duo</span>
                                                </a>
                                                <!--end:Menu link-->
                                            </div>
                                            <!--end:Menu item-->


                                        </div>
                                        <!--end:Menu sub-->
                                    </div>

                                    <div data-kt-menu-trigger="click"
                                        class="drop-menu menu-item menu-accordion <?php if ($pg_name == 'manage_user') {
                                            echo ' ';
                                        } ?>">
                                        <!--begin:Menu link-->
                                        <!-- <a href="../investors/manage_investor.php" > -->
                                        <span class="menu-link">
                                            <span class="menu-icon">
                                                <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                                                <span class="svg-icon svg-icon-2">
                                                    <img
                                                        src="{{ asset('public/admin/assets/media/wedzy/loan2.png') }}" />
                                                </span>
                                                <!--end::Svg Icon-->
                                            </span>
                                            <span class="head-title menu-title">Manage Loan</span>
                                            <span class="menu-arrow"></span>
                                        </span>
                                        <!-- </a> -->
                                        <!--end:Menu link-->
                                        <!--begin:Menu sub-->
                                        <div class="menu-sub menu-sub-accordion pink-color">
                                            <!--begin:Menu item-->
                                            <div class="menu-item">
                                                <!--begin:Menu link-->
                                                <a href="{{ url('/manage_loan/list_loan') }}"
                                                    class="menu-link menu_tabs <?php if ($currentPage == 'manage_loan.php') {
                                                        echo 'active';
                                                    } else {
                                                        print 'inactive';
                                                    } ?>">
                                                    <span class="menu-bullet">
                                                        <span class="bullet bullet-dot"></span>
                                                    </span>
                                                    <span class="menu-title">Loan Listing</span>
                                                </a>
                                                <!--end:Menu link-->
                                            </div>
                                            <!--end:Menu item-->


                                            <!--begin:Menu item-->
                                            <div class="menu-item">
                                                <!--begin:Menu link-->
                                                <a href="{{ url('/manage_loan/archive_loan') }}"
                                                    class="menu-link menu_tabs <?php if ($currentPage == 'view_archive_list.php') {
                                                        echo 'active';
                                                    } else {
                                                        print 'inactive';
                                                    } ?>">
                                                    <span class="menu-bullet">
                                                        <span class="bullet bullet-dot"></span>
                                                    </span>
                                                    <span class="menu-title">Archived Listing</span>
                                                </a>
                                                <!--end:Menu link-->
                                            </div>
                                            <!--end:Menu item-->


                                        </div>
                                        <!--end:Menu sub-->
                                    </div>

                                    <div data-kt-menu-trigger="click"
                                        class="drop-menu menu-item menu-accordion <?php if ($pg_name == 'manage_user') {
                                            echo ' ';
                                        } ?>">
                                        <!--begin:Menu link-->
                                        <!-- <a href="../investors/manage_investor.php" > -->
                                        <span class="menu-link">
                                            <span class="menu-icon">
                                                <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                                                <span class="svg-icon svg-icon-2">
                                                    <img
                                                        src="{{ asset('public/admin/assets/media/wedzy/cms2.png') }}" />
                                                </span>
                                                <!--end::Svg Icon-->
                                            </span>
                                            <span class="head-title menu-title">Manage CMS</span>
                                            <span class="menu-arrow"></span>
                                        </span>
                                        <!-- </a> -->
                                        <!--end:Menu link-->
                                        <!--begin:Menu sub-->
                                        <div class="menu-sub menu-sub-accordion pink-color">
                                            <!--begin:Menu item-->
                                            <div data-kt-menu-trigger="click"
                                                class="drop-menu menu-item menu-accordion <?php if ($pg_name == 'manage_user') {
                                                    echo ' ';
                                                } ?>">
                                                <!--begin:Menu link-->
                                                <!-- <a href="../investors/manage_investor.php" > -->
                                                <span class="menu-link">
                                                    <span class="menu-icon">
                                                        <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                                                        <span class="svg-icon svg-icon-2">
                                                            <img
                                                                src="{{ asset('public/admin/assets/media/wedzy/group2.png') }}" />
                                                        </span>
                                                        <!--end::Svg Icon-->
                                                    </span>
                                                    <span class="head-title menu-title">News & Ideas</span>
                                                    <span class="menu-arrow"></span>
                                                </span>
                                                <div class="menu-sub menu-sub-accordion pink-color">
                                                    <!--begin:Menu item-->
                                                    <div data-kt-menu-trigger="click"
                                                        class="drop-menu menu-item menu-accordion <?php if ($pg_name == 'manage_user') {
                                                            echo ' ';
                                                        } ?>">
                                                        <!--begin:Menu link-->
                                                        <!-- <a href="../investors/manage_investor.php" > -->
                                                        <span class="menu-link">
                                                            <span class="menu-icon">
                                                                <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                                                                <span class="svg-icon svg-icon-2">
                                                                    <img
                                                                        src="{{ asset('public/admin/assets/media/wedzy/group2.png') }}" />
                                                                </span>
                                                                <!--end::Svg Icon-->
                                                            </span>
                                                            <span class="head-title menu-title">Manage Articles</span>
                                                            <span class="menu-arrow"></span>
                                                        </span>
                                                        <!--end:Menu sub-->
                                                        <div class="menu-sub menu-sub-accordion pink-color">
                                                            <!--begin:Menu item-->
                                                            <div class="menu-item">
                                                                <!--begin:Menu link-->
                                                                <a href="{{ url('/cms/news_ideas/customer/') }}"
                                                                    class="menu-link menu_tabs <?php if ($currentPage == 'news_customer.php') {
                                                                        echo 'active';
                                                                    } else {
                                                                        print 'inactive';
                                                                    } ?>">
                                                                    <span class="menu-bullet">
                                                                        <span class="bullet bullet-dot"></span>
                                                                    </span>
                                                                    <span class="menu-title">Customer</span>
                                                                </a>
                                                                <!--end:Menu link-->
                                                            </div>
                                                            <!--end:Menu item-->


                                                            <!--begin:Menu item-->
                                                            <div class="menu-item">
                                                                <!--begin:Menu link-->
                                                                <a href="{{ url('/cms/news_ideas/vendor/') }}"
                                                                    class="menu-link menu_tabs <?php if ($currentPage == 'news_vendor.php') {
                                                                        echo 'active';
                                                                    } else {
                                                                        print 'inactive';
                                                                    } ?>">
                                                                    <span class="menu-bullet">
                                                                        <span class="bullet bullet-dot"></span>
                                                                    </span>
                                                                    <span class="menu-title">Vendor</span>
                                                                </a>
                                                                <!--end:Menu link-->
                                                            </div>
                                                            <!--end:Menu item-->
                                                        </div>
                                                    </div>
                                                    <!--end:Menu item-->

                                                </div>
                                                <div class=" menu-sub-accordion pink-color">
                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/manage_category') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'news_customer.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-link">
                                                                <span class="menu-icon">
                                                                    <!--begin::Svg Icon | path: icons/duotune/communication/com004.svg-->
                                                                    <span class="svg-icon svg-icon-2">
                                                                        <img
                                                                            src="{{ asset('public/admin/assets/media/wedzy/category.png') }}" />
                                                                    </span>
                                                                    <!--end::Svg Icon-->
                                                                </span>
                                                                <span class="menu-title">Manage Category</span>
                                                            </span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->
                                                </div>
                                                <!--end:Menu sub-->
                                            </div>
                                            <!--end:Menu item-->


                                            <!--begin:Menu item-->
                                            <div data-kt-menu-trigger="click"
                                                class="drop-menu menu-item menu-accordion <?php if ($pg_name == 'manage_user') {
                                                    echo ' ';
                                                } ?>">
                                                <!--begin:Menu link-->
                                                <!-- <a href="../investors/manage_investor.php" > -->
                                                <span class="menu-link">
                                                    <span class="menu-icon">
                                                        <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                                                        <span class="svg-icon svg-icon-2">
                                                            <img
                                                                src="{{ asset('public/admin/assets/media/wedzy/group2.png') }}" />
                                                        </span>
                                                        <!--end::Svg Icon-->
                                                    </span>
                                                    <span class="head-title menu-title">Manage FAQ's</span>
                                                    <span class="menu-arrow"></span>
                                                </span>
                                                <!-- </a> -->
                                                <!--end:Menu link-->
                                                <!--begin:Menu sub-->
                                                <div class="menu-sub menu-sub-accordion pink-color">
                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/cms/manage_faqs/customer/') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'faqs_customer.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Customer</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->


                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/cms/manage_faqs/vendor/') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'faqs_vendor.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Vendor</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->

                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/cms/manage_faqs/captain/') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'faqs_captain.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Captain</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->


                                                </div>
                                                <!--end:Menu sub-->
                                            </div>
                                            <!--end:Menu item-->

                                            <!--begin:Menu item-->
                                            <div data-kt-menu-trigger="click"
                                                class="drop-menu menu-item menu-accordion <?php if ($pg_name == 'manage_user') {
                                                    echo ' ';
                                                } ?>">
                                                <!--begin:Menu link-->
                                                <!-- <a href="../investors/manage_investor.php" > -->
                                                <span class="menu-link">
                                                    <span class="menu-icon">
                                                        <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                                                        <span class="svg-icon svg-icon-2">
                                                            <img
                                                                src="{{ asset('public/admin/assets/media/wedzy/group2.png') }}" />
                                                        </span>
                                                        <!--end::Svg Icon-->
                                                    </span>
                                                    <span class="head-title menu-title">Privacy Policy</span>
                                                    <span class="menu-arrow"></span>
                                                </span>
                                                <!-- </a> -->
                                                <!--end:Menu link-->
                                                <!--begin:Menu sub-->
                                                <div class="menu-sub menu-sub-accordion pink-color">
                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ route('privacy-policy-customer') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'privacy-policy_customer.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Customer</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->


                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/cms/privacy_policy/vendor') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'privacy-policy_vendor.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Vendor</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->

                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/cms/privacy_policy/captain') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'privacy-policy_captain.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Captain</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->


                                                </div>
                                                <!--end:Menu sub-->
                                            </div>
                                            <!--end:Menu item-->

                                            <div data-kt-menu-trigger="click"
                                                class="drop-menu menu-item menu-accordion <?php if ($pg_name == 'manage_user') {
                                                    echo ' ';
                                                } ?>">
                                                <!--begin:Menu link-->
                                                <!-- <a href="../investors/manage_investor.php" > -->
                                                <span class="menu-link">
                                                    <span class="menu-icon">
                                                        <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                                                        <span class="svg-icon svg-icon-2">
                                                            <img
                                                                src="{{ asset('public/admin/assets/media/wedzy/group2.png') }}" />
                                                        </span>
                                                        <!--end::Svg Icon-->
                                                    </span>
                                                    <span class="head-title menu-title">Terms & Condition</span>
                                                    <span class="menu-arrow"></span>
                                                </span>
                                                <!-- </a> -->
                                                <!--end:Menu link-->
                                                <!--begin:Menu sub-->
                                                <div class="menu-sub menu-sub-accordion pink-color">
                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/cms/terms_conditions/customer/') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'terms_Conditions_customer.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Customer</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->


                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/cms/terms_conditions/vendor/') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'terms_Conditions_vendor.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Vendor</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->

                                                    <!--begin:Menu item-->
                                                    <div class="menu-item">
                                                        <!--begin:Menu link-->
                                                        <a href="{{ url('/cms/terms_conditions/captain/') }}"
                                                            class="menu-link menu_tabs <?php if ($currentPage == 'terms_Conditions_captain.php') {
                                                                echo 'active';
                                                            } else {
                                                                print 'inactive';
                                                            } ?>">
                                                            <span class="menu-bullet">
                                                                <span class="bullet bullet-dot"></span>
                                                            </span>
                                                            <span class="menu-title">Captain</span>
                                                        </a>
                                                        <!--end:Menu link-->
                                                    </div>
                                                    <!--end:Menu item-->

                                                </div>
                                                <!--begin:Menu item-->
                                                <div class="menu-item">
                                                    <!--begin:Menu link-->
                                                    <a href="{{ url('/cms/about_us/') }}"
                                                        class="menu-link menu_tabs <?php if ($currentPage == '.php') {
                                                            echo 'active';
                                                        } else {
                                                            print 'inactive';
                                                        } ?>">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">About Us</span>
                                                    </a>
                                                    <!--end:Menu link-->
                                                </div>
                                                <!--end:Menu item-->
                                                <!--end:Menu sub-->
                                            </div>
                                            <!--end:Menu item-->

                                        </div>
                                        <!--end:Menu sub-->
                                    </div>

                                    <!--begin:Menu item-->
                                    <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                        <!--begin:Menu link-->
                                        <a href="{{ url('/manage_notification') }}"
                                            class=" menu_tabs <?php if ($currentPage == 'notification.php') {
                                                echo 'active';
                                            } else {
                                                print 'inactive';
                                            } ?>">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/communication/com004.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <img
                                                            src="{{ asset('public/admin/assets/media/wedzy/bell2.png') }}" />
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Manage Notification</span>
                                            </span>
                                        </a>
                                        <!--end:Menu link-->
                                    </div>
                                    <!--end:Menu item-->
                                </div>
                                <!--end::Menu-->
                            </div>
                            <!--end::Menu wrapper-->
                        </div>
                        <!--end::sidebar menu-->
                    </div>
                    @yield('content')
                    {{-- Content --}}
                </div>
            </div>
        </div>
    </main>

    <!--begin::Scrolltop-->
    <div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
        <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
        <span class="svg-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1"
                    transform="rotate(90 13 6)" fill="currentColor" />
                <path
                    d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                    fill="currentColor" />
            </svg>
        </span>
        <!--end::Svg Icon-->
    </div>

    <div class="modal fade" id="submit-modal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <i class="fa fa-check tick" aria-hidden="true"></i>
                    <p class="modal-text inner-p">Your Details has been Submitted <br> Successfully !
                    </p>
                </div>
            </div>
        </div>
    </div>


    <!--log out modal-->
    <div class="modal deleteModal swal2-show" tabindex="-1" id="logoutModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <h2 class="mb-3">Logout</h2>
                    <p>Are you sure want to Logout?</p>
                    <div class="modal-footer justify-content-around">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <a href="{{ url('logout') }}"><button type="button"
                                class="btn btn-primary popup-button">Logout</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--log out modal-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>

    <script>
        const BASE_URL = "{{ url('/') }}";
        const CSRF = '{{ csrf_token() }}';
    </script>
    {{-- <script src="https://unpkg.com/filepond@^4/dist/filepond.js"></script> --}}
    <script src="{{ asset('public/static/static/src/plugins/src/filepond/filepond.min.js') }}"></script>
    <script src="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js"></script>
    <!--begin::Global Javascript Bundle(used by all pages)-->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@2.11.8/dist/umd/popper.min.js" crossorigin="anonymous"></script>
        </script>

     {{-- <script src="https://unpkg.com/filepond@^4/dist/filepond.js"></script> --}}
     <script src="{{ asset('public/static/static/src/plugins/src/filepond/filepond.min.js') }}"></script>
     <script src="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js"></script>
     <!--begin::Global Javascript Bundle(used by all pages)-->
     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" crossOrigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" crossorigin="anonymous"></script>
    <script src="{{ asset('public/admin/assets/plugins/global/plugins.bundle.js') }}"></script>
    <script src="{{ asset('public/admin/assets/js/scripts.bundle.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
    <script src="{{ asset('public/admin/assets/plugins/custom/datatables/datatables.bundle.js') }}"></script>
    <!-- Bootstrap links -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" crossorigin="anonymous"></script>
    <!--end::Vendors Javascript-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/js/all.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.21/js/jquery.dataTables.min.js"></script>

    {{-- logout start --}}

    {{-- file-pond image-preview --}}
    <script src="{{ url('public/admin/components/delete_alert.js') }}"></script>
    <script src="{{ url('public/admin/assets/js/custom/apps/user-management/users/list/table.js') }}"></script>
    <script src="{{ asset('public/admin/js/manage_wedsrent/manage_wedsrent.js') }}"></script>
    <script src="{{ asset('public/admin/js/manage_wedsrent/manage_update_wedsrent.js') }}"></script>
    <script src="{{ asset('public/admin/js/manage_loan/loan.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/additional-methods.min.js"></script>

    <script>
        $(document).on('click', '#logoutModal_icon_btn', function() {
            $('#logoutModal').modal('show');
        })
    </script>
    {{-- logout end --}}

    {{-- Script --}}
    @yield('scripts')



    {{-- custom js  --}}
    <script src="{{ url('public/admin/components/delete_alert.js') }}"></script>
    <script src="//cdn.ckeditor.com/4.14.1/standard/ckeditor.js"></script>
    <script src="{{ asset('public/admin/js/pages/managearticle/customer_article.js') }}"></script>
    <script src="{{ asset('public/admin/js/pages/managearticle/vendor_article.js') }}"></script>
    <script src="{{ asset('public/admin/js/pages/managerentals/jewelsrent.js') }}"></script>
    <script src="{{ asset('public/admin/js/pages/contactus/contactus.js') }}"></script>
    <script src="{{ asset('public/admin/js/pages/managerentals/rentalcategory.js') }}"></script>
    <script src="{{ asset('public/admin/js/pages/managerentals/sellcategory.js') }}"></script>
    <script src="{{ asset('public/admin/js/manage_wedsrent/manage_wedsrent.js') }}"></script>
    <script src="{{ asset('public/admin/js/CMS/PrivacyAndPolicy/privacyAndpolicy.js') }}"></script>
    <script src="{{ asset('public/admin/js/manage_feedback/manageFeedback.js') }}"></script>
    <script src="{{ asset('public/admin/js/manage_users/subadmins/subAdmin.js') }}"></script>

    <!--end::Body-->
</body>

</html>
