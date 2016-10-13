window.__devtron = {require: require, process: process};
const Mousetrap = require('mousetrap');
const $ = document.querySelector.bind(document);

function registerShortcuts() {
    Mousetrap.bind('g h', () => {
        $('a[href^="/home.php"]').click();
    });

    Mousetrap.bind('g f', () => {
        $('a[href^="/friends"]').click();
    });

    Mousetrap.bind('g m', () => {
        $('a[href^="/messages"]').click();
    });

    Mousetrap.bind('g n', () => {
        $('a[href^="/notifications.php"]').click();
    });

    Mousetrap.bind('g s', () => {
        $('a[href^="/search/"]').click();
    });

    Mousetrap.bind('g p', () => {
        $('#bookmarks_jewel a').click();
    });

    Mousetrap.bind(['backspace', 'left'], () => {
		window.history.back();
	});

    Mousetrap.bind('right', () => {
		window.history.forward();
	});
}

document.addEventListener('DOMContentLoaded', () => {
	registerShortcuts();
});