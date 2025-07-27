registerShortcut(
    "addNewVirtualDesktop",
    "Add New Virtual Desktop",
    "Ctrl+Shift+N",
    function () {
        callDBus(
            "org.kde.KWin",
            "/VirtualDesktopManager",
            "org.kde.KWin.VirtualDesktopManager",
            "createDesktop"
        );
    }
);
