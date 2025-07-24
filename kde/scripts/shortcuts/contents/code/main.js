registerShortcut("newDesktop", "Create New Virtual Desktop", "Meta+Ctrl+D", function() {
    const currentDesktopCount = workspace.desktops;
    workspace.addDesktop(currentDesktopCount + 1);
});
