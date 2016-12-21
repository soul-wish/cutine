window.__devtron = {require, process};
const Mousetrap = require('mousetrap');
const elementReady = require('element-ready');

const $ = document.querySelector.bind(document);

function registerShortcuts() {
    Mousetrap.bind('n', () => {
        if (document.URL !== 'https://m.facebook.com/home.php') {
            $('a[href^="/home"]').click();
        }
        elementReady('textarea[name="xc_message"').then(element => element.focus());
    });

    Mousetrap.bind('m', () => {
        $('a[href^="/messages"]').click();
        elementReady('a[data-store*="messages"]').then(element => element.click());
        elementReady('#m-messages-touch-composer-form a._5jby').then(element => element.click());
        elementReady('input[data-sigil="xm-tokenizer-input"]').then(element => element.focus());
        return false;
    });

    Mousetrap.bind('g h', () => {
        $('a[href^="/home"]').click();
    });

    Mousetrap.bind('g f', () => {
        $('a[href^="/friends"]').click();
    });

    Mousetrap.bind('g m', () => {
        $('a[href^="/messages"]').click();
    });

    Mousetrap.bind('g n', () => {
        $('a[href^="/notifications"]').click();
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
