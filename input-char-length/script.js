document.querySelectorAll('.display-length').forEach((el) => {
    const max = el.maxLength != -1 ? el.maxLength : "∞";
    const length = el.value.length;
    const wrap = document.createElement('div');
    wrap.classList.add('display-length-wrap');
    let style = window.getComputedStyle(el);
    wrap.style.width = style.getPropertyValue('width');
    el.parentNode.insertBefore(wrap, el);
    wrap.appendChild(el);
    el.insertAdjacentHTML('afterend', `<span class="display-length-counter">${length}/${max}</span>`);
    el.addEventListener('input', (e) => {
        const length = e.target.value.length;
        const max = e.target.maxLength != -1 ? e.target.maxLength : "∞";
        e.target.nextElementSibling.innerHTML = `${length}/${max}`;
    });
    el.style.width = '100%';
});
