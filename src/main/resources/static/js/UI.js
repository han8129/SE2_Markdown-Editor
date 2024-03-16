document.addEventListener('DOMContentLoaded', function() {
    const editor = document.querySelector('#editor');
    const preview = document.querySelector('.preview');

    editor.addEventListener('input', function(e) {
        console.log(e.target.value);
        preview.innerHTML = DOMPurify.sanitize(marked.parse(e.target.value));
    });
});
